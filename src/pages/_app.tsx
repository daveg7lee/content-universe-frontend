import { Box, ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <RecoilRoot>
        <Box maxW="390px" mx="auto" minH="100vh">
          <Component {...pageProps} />
        </Box>
      </RecoilRoot>
    </ChakraProvider>
  );
}
