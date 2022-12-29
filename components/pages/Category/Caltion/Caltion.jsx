import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Caltion() {
  return (
    <Box maxW={"container.xl"} mx={"auto"} mt={5}>
      <Text fontWeight={"semibold"} textAlign={"center"}>
        Caltion
      </Text>
      <Text textAlign={"center"}>
        Hitung kalori yang Anda butuhkan dengan kalkulator Caltion{" "}
      </Text>

      <Box>
        <FormControl>
          <FormLabel>Tinggi Badan</FormLabel>
          <Input type={"number"} bg={"white"} />
        </FormControl>

        <FormControl>
          <FormLabel>Berat Badan</FormLabel>
          <Input type={"number"} bg={"white"} />
        </FormControl>

        <FormControl>
          <FormLabel>Usia</FormLabel>
          <Input type={"number"} bg={"white"} />
        </FormControl>

        <FormControl>
          <FormLabel>Jenis Kelamin</FormLabel>
          <RadioGroup>
            <Stack direction="row">
              <Radio bg={"white"}>Pria</Radio>
              <Radio bg={"white"}>Wanita</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Aktivitas</FormLabel>
          <Select placeholder="Select option" bg={"white"}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </FormControl>

        <Button colorScheme={"green"} mt={5}>Hitung</Button>
      </Box>
    </Box>
  );
}
