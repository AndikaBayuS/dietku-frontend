import { Box, ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
    <Box bgColor={"green.50"} minH={"100vh"}>
      <Navbar />
      <Component {...pageProps} />
    </Box>
    </ChakraProvider>
  );
}

export default MyApp;
