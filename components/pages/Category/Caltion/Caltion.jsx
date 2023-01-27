import { calcCaltion } from "@/utils/calculators";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useFormik } from "formik";

export default function Caltion() {
  const formik = useFormik({
    initialValues: {
      weight: null,
      height: null,
      age: null,
      gender: "male",
      bmi: 0,
    },
    onSubmit: (values) => {
      alert(
        calcCaltion(values.weight, values.height, values.age, values.gender)
      );
    },
  });

  return (
    <Box maxW={"container.xl"} mx={"auto"} mt={5}>
      <Text fontWeight={"semibold"} textAlign={"center"}>
        Caltion
      </Text>
      <Text textAlign={"center"}>
        Hitung kalori yang Anda butuhkan dengan kalkulator Caltion{" "}
      </Text>

      <Grid templateColumns={"repeat(3, 1fr)"} gap={5}>
        <GridItem colSpan={2}>
          <Box>
            <form onSubmit={formik.handleSubmit}>
              <FormControl>
                <FormLabel>Tinggi Badan</FormLabel>
                <Input
                  type={"number"}
                  bg={"white"}
                  id="height"
                  name="height"
                  onChange={formik.handleChange}
                  value={formik.values.height}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Berat Badan</FormLabel>
                <Input
                  type={"number"}
                  bg={"white"}
                  id="weight"
                  name="weight"
                  onChange={formik.handleChange}
                  value={formik.values.weight}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Usia</FormLabel>
                <Input
                  type={"number"}
                  bg={"white"}
                  id="age"
                  name="age"
                  onChange={formik.handleChange}
                  value={formik.values.age}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Jenis Kelamin</FormLabel>
                <RadioGroup defaultValue="male">
                  <Stack direction="row">
                    <Radio
                      bg={"white"}
                      id="gender"
                      name="gender"
                      onChange={formik.handleChange}
                      value="male"
                      isChecked
                    >
                      Pria
                    </Radio>
                    <Radio
                      bg={"white"}
                      id="gender"
                      name="gender"
                      onChange={formik.handleChange}
                      value="female"
                    >
                      Wanita
                    </Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>

              <Button colorScheme={"green"} mt={5} type={"submit"}>
                Hitung
              </Button>
            </form>

            {/* <FormControl>
          <FormLabel>Aktivitas</FormLabel>
          <Select placeholder="Select option" bg={"white"}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </FormControl> */}
          </Box>
        </GridItem>
        <GridItem>
          <Stack direction="row" h={"full"}>
            <Divider orientation="vertical" />
            <Text>Hasil</Text>
          </Stack>
        </GridItem>
      </Grid>
    </Box>
  );
}
