import FormLogin from "@/components/forms/FormLogin/FormLogin";
import FormRegister from "@/components/forms/FormRegister/FormRegister";
import { loginUser, registerUser } from "@/utils/axios";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";

export function AuthModal({ isOpenAuthModal, onCloseAuthModal }) {
  const router = useRouter();
  const toast = useToast();
  const [isFormLogin, setIsFormLogin] = useState(true);
  const registerForm = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      registerUser(values.username, values.email, values.password)
        .then(() => {
          toast({
            title: "Success",
            description: "Berhasil mendaftar, silahkan login",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        })
        .catch(() => {
          toast({
            title: "Error",
            description: "Username atau email sudah digunakan",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        });
    },
  });

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      loginUser(values.email, values.password)
        .then(() => {
          router.reload(window.location.pathname);
        })
        .catch(() => {
          toast({
            title: "Error",
            description: "Periksa kembali email dan password anda",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        });
    },
  });

  const handleShowRegister = () => setIsFormLogin(false);
  const handleShowLogin = () => setIsFormLogin(true);

  return (
    <Modal isOpen={isOpenAuthModal} onClose={onCloseAuthModal} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{isFormLogin ? "Masuk" : "Daftar"}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {isFormLogin ? (
            <FormLogin
              loginForm={loginForm}
              setIsFormLogin={handleShowRegister}
            />
          ) : (
            <FormRegister
              registerForm={registerForm}
              setIsFormLogin={handleShowLogin}
            />
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
