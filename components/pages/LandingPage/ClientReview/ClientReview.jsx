import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

export default function ClientReview() {
  return (
    <Box mt={"5rem"}>
      <Text
        textAlign={"center"}
        fontSize={"4xl"}
        color={"green.600"}
        fontWeight={"semibold"}
      >
        Testimoni Klien
      </Text>
      <SimpleGrid columns={3} alignItems={"center"} gap={5}>
        <Card bg={"white"} maxW={"xs"} borderRadius={"md"} shadow={"md"}>
          <CardBody textAlign={"center"} mx={"auto"}>
            <Image
              src={"https://i.pravatar.cc/300"}
              boxSize={"150px"}
              borderRadius={"full"}
              border={1}
              display={"block"}
              mx={"auto"}
              borderColor={"green.200"}
            />
            <Heading my={4}>Halo</Heading>
            <Text mb={3}>20 Tahun</Text>
            <Text>
              “Rekomendasi diet yang diberikan oleh Dietku membantu saya
              menurunkan badan secara efisien”
            </Text>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Box>
  );
}
