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
      <SimpleGrid columns={2} alignItems={"center"} gap={5}>
        {dietCategory.map((diet) => (
          <Card bg={"gray.50"} mx={"auto"}>
            <CardBody>
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
