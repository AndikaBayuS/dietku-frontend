import { clientReview } from "@/data/clientReview";
import {
  Box,
  Card,
  CardBody,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

export default function ClientReview() {
  return (
    <Container mt={"5rem"} maxW={"container.xl"} mx={"auto"}>
      <Text
        textAlign={"center"}
        fontSize={"4xl"}
        color={"green.600"}
        fontWeight={"semibold"}
      >
        Testimoni Klien
      </Text>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        alignItems={"center"}
        gap={5}
        mt={"5rem"}
      >
        {clientReview.map((review) => (
          <Card
            bg={"white"}
            borderRadius={"md"}
            shadow={"md"}
            key={review.name}
          >
            <CardBody textAlign={"center"} mx={"auto"}>
              <Image
                src={review?.image}
                boxSize={"150px"}
                borderRadius={"full"}
                border={1}
                display={"block"}
                mx={"auto"}
                borderColor={"green.200"}
              />
              <Heading my={4}>{review.name}</Heading>
              <Text mb={3}>20 Tahun</Text>
              <Text>{review.review}</Text>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
