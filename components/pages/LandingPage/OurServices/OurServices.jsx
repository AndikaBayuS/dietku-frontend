import {
  Box,
  Card,
  CardBody,
  Center,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

export default function OurServices() {
  return (
    <Box mt={"5rem"}>
      <Text
        textAlign={"center"}
        fontSize={"4xl"}
        color={"green.600"}
        fontWeight={"semibold"}
      >
        Pelayanan Kami
      </Text>
      <SimpleGrid columns={3} alignItems={"center"} h={"20rem"} gap={5}>
        <Card
          h={"10rem"}
          bgColor={"green.500"}
          bgImage={"https://picsum.photos/200/300"}
        >
          <CardBody textAlign={"center"}>
            <Center h={"full"}>
              <Box>
                <Heading size="md">Caltion</Heading>
                <Text>Hitung kalori yang anda butuhkan</Text>
              </Box>
            </Center>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Box>
  );
}
