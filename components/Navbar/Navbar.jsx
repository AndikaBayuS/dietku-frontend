import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { useState } from "react";
import { useFormik } from "formik";
import { registerUser } from "@/utils/axios";

export default function Navbar() {
  const { isOpen, onToggle, onOpen, onClose } = useDisclosure();
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

  return (
    <Box>
      <Flex
        bg={"white"}
        color={"gray.600"}
        minH={{ base: "70px", md: "80px" }}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={"gray.200"}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "space-between" }}
          maxW={"container.xl"}
          mx={"auto"}
          align={"center"}
        >
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            Dietku
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>

          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"green.400"}
            href={"#"}
            _hover={{
              bg: "green.300",
            }}
            onClick={onOpen}
          >
            Masuk
          </Button>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        ></Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Daftar</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {isFormLogin ? (
              <VStack spacing={5}>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input placeholder="Masukkan alamat email anda" />
                </FormControl>
                <FormControl>
                  <FormLabel>Kata Sandi</FormLabel>
                  <Input type="password" placeholder="Masukkan kata sandi anda" />
                </FormControl>
                <Button colorScheme={"green"}>Masuk</Button>
                <HStack py={5}>
                  <Text>Belum punya akun?</Text>
                  <Text
                    color={"green"}
                    onClick={() => setIsFormLogin(false)}
                    cursor={"pointer"}
                  >
                    Daftar
                  </Text>
                </HStack>
              </VStack>
            ) : (
              <form onSubmit={registerForm.handleSubmit}>
                <VStack spacing={5}>
                  {/* <FormControl>
                    <FormLabel>Nama</FormLabel>
                    <Input placeholder="Masukkan nama anda" id="" />
                  </FormControl> */}
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
                      onClick={() => setIsFormLogin(true)}
                      cursor={"pointer"}
                    >
                      Masuk
                    </Text>
                  </HStack>
                </VStack>
              </form>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                as={NextLink}
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"md"}
                color={"black"}
                _hover={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link as={NextLink} key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Beranda",
    href: "/",
  },
  {
    label: "Program",
    href: "/program",
  },
  {
    label: "Kategori",
    href: "/category",
  },
  {
    label: "Tentang",
    href: "#",
  },
];
