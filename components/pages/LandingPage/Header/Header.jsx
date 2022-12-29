import { Box, SimpleGrid, Text, Image } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box>
      <SimpleGrid columns={2} alignItems={"center"} h={"30rem"}>
        <Box fontSize={"5xl"} color={"green.600"} fontWeight={"semibold"}>
          <Text>Jaga Kesehatanmu</Text>
          <Text>bersama Dietku</Text>
        </Box>
        <Image
          src="/header-1.png"
          objectFit={"cover"}
        />
      </SimpleGrid>
    </Box>
  );
}
