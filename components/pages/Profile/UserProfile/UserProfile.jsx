import { Box, Text, VStack } from "@chakra-ui/react";

export default function UserProfile({ userData }) {
  const latestIndex = userData?.DataUser?.length - 1;
  return (
    <Box>
      <VStack alignItems={"start"} textAlign={"left"}>
        <Box>
          <Text fontWeight={"semibold"}>Username</Text>
          <Text color={"gray.500"}>{userData?.username}</Text>
        </Box>
        <Box>
          <Text fontWeight={"semibold"}>Email</Text>
          <Text color={"gray.500"}>{userData?.email}</Text>
        </Box>
        <Box>
          <Text fontWeight={"semibold"}>Umur</Text>
          <Text color={"gray.500"}>{userData?.DataUser[latestIndex]?.umur}</Text>
        </Box>
        <Box>
          <Text fontWeight={"semibold"}>Berat Badan</Text>
          <Text color={"gray.500"}>{userData?.DataUser[latestIndex]?.berat_badan}</Text>
        </Box>
        <Box>
          <Text fontWeight={"semibold"}>Tinggi Badan</Text>
          <Text color={"gray.500"}>{userData?.DataUser[latestIndex]?.tinggi_badan}</Text>
        </Box>
        <Box>
          <Text fontWeight={"semibold"}>Jenis Kelamin</Text>
          <Text color={"gray.500"}>{userData?.DataUser[latestIndex]?.jk}</Text>
        </Box>
      </VStack>
    </Box>
  );
}
