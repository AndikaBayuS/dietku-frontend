import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function FormRegister({ registerForm, setIsFormLogin }) {
  return (
    <form onSubmit={registerForm.handleSubmit}>
      <VStack spacing={5}>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            placeholder="Masukkan username anda"
            id="username"
            name="username"
            onChange={registerForm.handleChange}
            value={registerForm.values.username}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Masukkan alamat email anda"
            id="email"
            name="email"
            onChange={registerForm.handleChange}
            value={registerForm.values.email}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Kata Sandi</FormLabel>
          <Input
            type="password"
            placeholder="Masukkan kata sandi anda"
            id="password"
            name="password"
            onChange={registerForm.handleChange}
            value={registerForm.values.password}
          />
        </FormControl>

        <Button colorScheme={"green"} type="submit">
          Daftar
        </Button>
        <HStack py={5}>
          <Text>Sudah punya akun?</Text>
          <Text
            color={"green"}
            onClick={setIsFormLogin}
            cursor={"pointer"}
          >
            Masuk
          </Text>
        </HStack>
      </VStack>
    </form>
  );
}
