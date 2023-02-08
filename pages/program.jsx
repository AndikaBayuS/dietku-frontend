import { dietCategory } from "@/data/diettCategory";
import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Program() {
  const router = useRouter();
  return (
    <Box maxW={"container.xl"} mx={"auto"} mt={5}>
      <SimpleGrid columns={{ base: 1, md: 3 }} alignItems={"center"} gap={5}>
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
            onClick={() => router.push(diet.url)}
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
