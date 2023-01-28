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
  NumberInput,
  NumberInputField,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useState } from "react";

export default function Caltion() {
  const [userBMI, setUserBMI] = useState(0);
  const [showData, setShowData] = useState(false);
  const formik = useFormik({
    initialValues: {
      weight: "",
      height: "",
      age: "",
      gender: "male",
    },
    onSubmit: (values) => {
      setUserBMI(
        calcCaltion(values.weight, values.height, values.age, values.gender)
      );
      setShowData(true);
    },
  });

  const disableButton = () => {
    if (formik.values.weight === "") {
      return true;
    } else if (formik.values.height === "") {
      return true;
    } else if (formik.values.age === "") {
      return true;
    } else {
      return false;
    }
  };

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
                <NumberInput min={0}>
                  <NumberInputField
                    bg={"white"}
                    id="weight"
                    name="weight"
                    onChange={formik.handleChange}
                    value={formik.values.weight}
                  />
                </NumberInput>
              </FormControl>

              <FormControl>
                <FormLabel>Usia</FormLabel>
                <NumberInput min={0}>
                  <NumberInputField
                    type={"number"}
                    bg={"white"}
                    id="age"
                    name="age"
                    onChange={formik.handleChange}
                    value={formik.values.age}
                  />
                </NumberInput>
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

              <Button
                colorScheme={"green"}
                mt={5}
                type={"submit"}
                disabled={disableButton()}
              >
                Hitung
              </Button>
            </form>
          </Box>
        </GridItem>
        <GridItem>
          <Stack direction="row" h={"full"}>
            <Divider orientation="vertical" />
            <VStack alignItems={"start"}>
              <Text fontWeight={"semibold"}>Hasil Data</Text>
              {showData ? (
                <>
                  <Text fontWeight={"semibold"}>
                    Tinggi Badan: {formik.values.height}
                  </Text>
                  <Text fontWeight={"semibold"}>
                    Berat Badan: {formik.values.weight}
                  </Text>
                  <Text fontWeight={"semibold"}>Umur: {formik.values.age}</Text>
                  <Text fontWeight={"semibold"}>
                    Jenis Kelamin:{" "}
                    {formik.values.gender === "male" ? "Pria" : "Wanita"}
                  </Text>
                  <Text fontWeight={"semibold"}>
                    Kebutuhan Kalori: {userBMI}
                  </Text>
                </>
              ) : (
                <>
                  <Text textAlign={"center"}>
                    Hasil kalkulasi akan ditampilkan disini
                  </Text>
                </>
              )}
            </VStack>
          </Stack>
        </GridItem>
      </Grid>
    </Box>
  );
}
