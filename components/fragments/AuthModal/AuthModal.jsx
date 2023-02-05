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
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useState } from "react";

export function AuthModal({ isOpenAuthModal, onCloseAuthModal }) {
  const [isFormLogin, setIsFormLogin] = useState(true);
  const registerForm = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      registerUser(values.username, values.email, values.password);
    },
  });

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      loginUser(values.email, values.password);
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
