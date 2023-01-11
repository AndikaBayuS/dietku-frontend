import {
  Box,
  Card,
  CardBody,
  Center,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { servicesData } from "@/data/servicesData";

export default function OurServices() {
  return (
    <Container pt={"5rem"} maxW={"container.xl"} mx={"auto"}>
      <Text
        textAlign={"center"}
        fontSize={"4xl"}
        color={"green.600"}
        fontWeight={"semibold"}
      >
        Layanan Kami
      </Text>
      <SimpleGrid
        mt={"5rem"}
        columns={{ base: 1, md: 2, lg: 3 }}
        alignItems={"center"}
        gap={5}
      >
        {servicesData.map((service) => (
          <Card
            h={"10rem"}
            bgColor={"gray.100"}
            cursor={"pointer"}
            _hover={{ bgColor: "green.300" }}
            transition={"all 0.3s ease"}
          >
            <CardBody padding={5}>
              <Center h={"full"}>
                <VStack spacing={2} alignItems={"start"}>
                  <Box
                    borderRadius={"full"}
                    bgColor={"green.100"}
                    padding={3}
                    color={"green.900"}
                  >
                    {service?.icons}
                  </Box>
                  <Heading size="md">{service.title}</Heading>
                  <Text>{service.description}</Text>
                </VStack>
              </Center>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
