import { Box, Button, Image as ChakraImage } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function Welcome() {
  return (
    <Box
      h="100vh"
      pt="24"
      pb="12"
      px={"6"}
      position="relative"
      overflow="hidden"
      display="flex"
      alignItems="flex-end"
    >
      <Box position="absolute" top="-135px" left="-190px">
        <Image src="/main_red.png" alt="red image" width={430} height={430} />
      </Box>
      <Box
        position="absolute"
        top="45%"
        left="50%"
        style={{
          transform: "translate(-50%, -50%)",
        }}
        w="300px"
      >
        <ChakraImage src="/logo.png" alt="logo" boxSize="300px" />
      </Box>
      <Box position="absolute" bottom="-135px" right="-120px">
        <Image src="/main_blue.png" alt="red image" width={430} height={430} />
      </Box>
      <Link href="/home" style={{ width: "100%", height: "fit-content" }}>
        <Button
          bgColor="black"
          color="white"
          w="full"
          _hover={{ bgColor: "black", opacity: 0.8 }}
          zIndex="99"
          size="lg"
        >
          Get Started
        </Button>
      </Link>
    </Box>
  );
}
