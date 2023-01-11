import {
  Box,
  SimpleGrid,
  Text,
  Button,
  Container,
} from "@chakra-ui/react";
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <Button colorScheme={"green"} mt={5}>
            Mulai
          </Button>
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
