import { getUserInfo } from "@/utils/axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: false,
    title: {
      display: true,
      text: "Riwayat Diet",
    },
  },
};

export default function DietHistory() {
  const [dietInfo, setDietInfo] = useState([]);

  useEffect(() => {
    getUserInfo().then((res) => {
      let data = res.data.user?.DataUser;

      data.map(({ berat_badan, createdAt }) => {
        setDietInfo((dietInfo) => [
          ...dietInfo,
          { berat_badan: berat_badan, createdAt: createdAt },
        ]);
      });
    });
  }, []);

  const dateFormat = (date) => {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const month = ("0" + newDate.getMonth()).slice(-2);
    const day = ("0" + newDate.getDate()).slice(-2);

    return `${day}-${month}-${year}`;
  };

  const data = {
    labels: dietInfo.map((item) => dateFormat(item.createdAt)),
    datasets: [
      {
        data: dietInfo.map((item) => item.berat_badan),
        borderColor: "#38A169",
        backgroundColor: "#38A169",
      },
    ],
  };

  console.log(Date.parse(dietInfo.map((item) => item.createdAt)));

  return <Line options={options} data={data} />;
}
