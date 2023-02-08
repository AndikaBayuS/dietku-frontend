import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaUser, FaHistory } from "react-icons/fa";
import { RiLogoutBoxRFill } from "react-icons/ri";
import UserProfile from "@/components/pages/Profile/UserProfile/UserProfile";
import { getUserInfo } from "@/utils/axios";
import { LogoutModal } from "@/components/fragments/LogoutModal/LogoutModal";
import DietHistory from "@/components/pages/Profile/DietHistory/DietHistory";

export default function Profile() {
  const [userData, setUserData] = useState();
  const [isMenu, setIsMenu] = useState("profile");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const profileMenu = () => {
    switch (isMenu) {
      case "profile":
        return <UserProfile userData={userData} />;
      case "history":
        return <DietHistory />;
      default:
        return <UserProfile />;
    }
  };

  useEffect(() => {
    getUserInfo().then((res) => {
      setUserData(res.data.user);
    });
  }, []);

  return (
    <Box maxW={"container.xl"} mx={"auto"} mt={5}>
      <Flex>
        <Box
          shadow={"sm"}
          border={"1px"}
          borderColor={"gray.200"}
          w={"30.5rem"}
          maxH={"15rem"}
          bgColor={"gray.50"}
          borderRadius={"md"}
          p={5}
        >
          <Flex>
            <Avatar
              size={"md"}
              name={userData?.username}
              backgroundColor={"green.300"}
            />
            <Box ml={5}>
              <Text>{userData?.username}</Text>
              <Text color={"gray.500"}>{userData?.email}</Text>
            </Box>
          </Flex>
          <Divider my={5} />
          <Box>
            <Button
              leftIcon={<FaUser />}
              variant="ghost"
              w={"full"}
              justifyContent={"flex-start"}
              onClick={() => setIsMenu("profile")}
            >
              Profil
            </Button>
            <Button
              leftIcon={<FaHistory />}
              variant="ghost"
              w={"full"}
              justifyContent={"flex-start"}
              onClick={() => setIsMenu("history")}
            >
              Riwayat
            </Button>
            <Button
              leftIcon={<RiLogoutBoxRFill />}
              variant="ghost"
              w={"full"}
              justifyContent={"flex-start"}
              onClick={onOpen}
            >
              Keluar
            </Button>
          </Box>
        </Box>
        <Box
          ml={5}
          shadow={"sm"}
          border={"1px"}
          borderColor={"gray.200"}
          w={"full"}
          bgColor={"gray.50"}
          borderRadius={"md"}
          p={5}
        >
          {profileMenu()}
        </Box>
      </Flex>

      <LogoutModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}
