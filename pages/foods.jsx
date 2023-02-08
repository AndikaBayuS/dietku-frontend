import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getFoodsData } from "@/utils/axios";

export default function Foods() {
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    getFoodsData().then((res) => {
      setFoodList(res.data.data);
    });
  }, []);

  return (
    <Box maxW={"container.xl"} mx={"auto"} mt={5}>
      <Heading size={"lg"} textAlign={"center"}>Daftar Makanan Rekomendasi</Heading>
      <Text textAlign={"center"}>Rekomendasi makanan untuk kegiatan diet kamu!</Text>
      <SimpleGrid columns={{ base: 1, md: 3, lg: 4 }} gap={5}>
        {foodList &&
          foodList?.map((food) => (
            <Card>
              <CardBody>
                <Image
                  borderRadius={"lg"}
                  src={food.url_image}
                  boxSize={280}
                  mx={"auto"}
                  objectFit={"cover"}
                />
                <Heading size="md">{food.nama_makanan}</Heading>
                <Text>Kalori: {food.kalori}</Text>
              </CardBody>
            </Card>
          ))}
      </SimpleGrid>
    </Box>
  );
}
