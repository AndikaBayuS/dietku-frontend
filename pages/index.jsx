import { Box } from "@chakra-ui/react";
import Head from "next/head";
import ClientReview from "../components/pages/LandingPage/ClientReview/ClientReview";
import Header from "../components/pages/LandingPage/Header/Header";
import OurServices from "../components/pages/LandingPage/OurServices/OurServices";

export default function Home() {
  return (
    <Box bgColor={"green.100"}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box mx={"auto"}>
        <Header />
        <Box
          bgColor={"gray.50"}
          borderTopRadius={{ base: 0, md: "4.75rem" }}
          mt={"5rem"}
        >
          <OurServices />
          <ClientReview />
        </Box>
      </Box>
    </Box>
  );
}
