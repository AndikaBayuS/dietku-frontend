import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  VStack,
  Text,
} from "@chakra-ui/react";

export default function FormLogin({ loginForm, setIsFormLogin }) {
  return (
    <form onSubmit={loginForm.handleSubmit}>
      <VStack spacing={5}>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            placeholder="Masukkan username anda"
            id="username"
            name="username"
            value={loginForm.values.username}
            onChange={loginForm.handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Kata Sandi</FormLabel>
          <Input
            type="password"
            placeholder="Masukkan kata sandi anda"
            id="password"
            name="password"
            value={loginForm.values.password}
            onChange={loginForm.handleChange}
          />
        </FormControl>
        <Button colorScheme={"green"} type={"submit"}>Masuk</Button>
        <HStack py={5}>
          <Text>Belum punya akun?</Text>
          <Text color={"green"} onClick={setIsFormLogin} cursor={"pointer"}>
            Daftar
          </Text>
        </HStack>
      </VStack>
    </form>
  );
}
