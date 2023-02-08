import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navbar from "../components/fragments/Navbar/Navbar";
import "styles/globals.css";
import { MDXProvider } from "@mdx-js/react";

const theme = extendTheme({
  styles: {
    global: {
      ".mdx-prose": {
        '*': {
          maxWidth: "container.xl",
          mx: "auto",
        },
        h1: {
          fontSize: "3xl",
          mb: "4",
          mt: "5",
          fontWeight: "semibold",
        },
        p: {
          fontSize: "md",
          lineHeight: "1.5",
          mt: '3'
        },
      },
    },
  },
});

const MDXWrapper = {
  wrapper: (props) => <div className="mdx-prose" {...props} />,
};

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Box minH={"100vh"}>
        <Navbar />
        <MDXProvider components={MDXWrapper}>
          <Component {...pageProps} />
        </MDXProvider>
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
