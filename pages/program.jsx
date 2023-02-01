import { dietCategory } from "@/data/DietCategory";
import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

export default function Program() {
  return (
    <Box maxW={"container.xl"} mx={"auto"} mt={5}>
      <SimpleGrid columns={3} alignItems={"center"} gap={5}>
        {dietCategory.map((diet) => (
          <Card
            bg={"gray.50"}
            mx={"auto"}
            variant={"outline"}
            transition={"all 0.3s ease-in-out"}
            cursor={"pointer"}
            shadow={"sm"}
            _hover={{ borderColor: "green.500" }}
            key={diet.title}
          >
            <CardBody
              transition={"all 0.3s ease"}
              _hover={{ border: "10px", borderColor: "green.500" }}
            >
              <Image src={diet.image} borderRadius={"md"} objectFit={"cover"} />
              <Heading my={3} fontSize={"xl"}>
                {diet.title}
              </Heading>
              <Text>{diet.description}</Text>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}
