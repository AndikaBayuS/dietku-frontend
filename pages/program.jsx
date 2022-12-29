import { Box, Card, CardBody, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";

export default function Program() {
  return (
    <Box maxW={"container.xl"} mx={"auto"} mt={5}>
      <SimpleGrid columns={2} alignItems={"center"} gap={5}>
        <Card bg={"white"} maxW={"md"} mx={"auto"}>
          <CardBody>
            <Image
              src="/content-1.png"
              borderRadius={"md"}
              objectFit={"cover"}
            />
            <Heading my={3} fontSize={"xl"}>Diet Mayo</Heading>
            <Text>
              Diet Mayo merupakan diet yang berfokus pada pengubahan gaya hidup
              menjadi lebih sehat
            </Text>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Box>
  );
}
