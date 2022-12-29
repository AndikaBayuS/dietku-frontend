import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";

export default function ProductIntro() {
  return (
    <Box mt={"5rem"}>
      <SimpleGrid columns={2} alignItems={"center"} h={"20rem"}>
        <Image src="/content-1.png" borderRadius={"md"} objectFit={"cover"} />
        <Box fontSize={"md"} color={"green.600"} ml={"auto"}>
          <Text fontSize={"4xl"} color={"green.600"} fontWeight={"semibold"}>
            Tentang Dietku
          </Text>
          <Text maxW={"lg"}>
            Dietku adalah aplikasi berbasis web yang berguna untuk membantu
            pengguna yang ingin melakukan diet gizi seimbang melalui perhitungan
            kalori dan berbagai metode lainnya.
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
