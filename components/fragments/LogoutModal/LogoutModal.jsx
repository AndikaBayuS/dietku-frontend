import {
  Button,
  HStack,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { removeUserData } from "utils/common";

export function LogoutModal({ isOpen, onClose }) {
  const router = useRouter();
  const logOut = async () => {
    await removeUserData();
    router.reload("/");
  };

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Anda Yakin Ingin Keluar ?</ModalHeader>
        <ModalCloseButton />
        <ModalFooter>
          <HStack>
            <Button onClick={logOut} colorScheme={"green"}>
              Ya
            </Button>
            <Button onClick={onClose} colorScheme={"red"}>
              Batal
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
