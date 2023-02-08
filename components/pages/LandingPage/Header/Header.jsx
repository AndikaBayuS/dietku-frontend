import { Box, SimpleGrid, Text, Button, Container } from "@chakra-ui/react";
import Lottie from "react-lottie-player";
import lottieFood from "@/components/Lottie/lottie-food.json";

export default function Header() {
  return (
    <Container maxW={"container.xl"} mx={"auto"} pt={{ base: 10, md: 5 }}>
      <SimpleGrid columns={{ base: 1, md: 2 }} alignItems={"center"}>
        <Box>
          <Text fontSize={"4xl"} color={"green.600"} fontWeight={"semibold"}>
            Jaga Kesehatanmu <br /> bersama dietku
          </Text>
          <Text maxW={"lg"} mt={5}>
            Dengan dietku kamu bisa melakukan diet dengan mudah dan aman. Kamu
            bisa mengetahui berapa kalori yang kamu butuhkan setiap harinya dan
            juga rekomendasi makanan yang bisa kamu konsumsi.
          </Text>
        </Box>
        <Box>
          <Lottie
            loop
            play
            animationData={lottieFood}
            style={{
              width: 350,
              height: 350,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </Box>
      </SimpleGrid>
    </Container>
  );
}
