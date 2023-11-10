import { Box, Button, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function Welcome() {
  return (
    <Box
      h="100vh"
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="space-between"
      pt="24"
      pb="12"
      px={[6, 0]}
      position="relative"
      overflow="hidden"
    >
      <Box position="absolute" top="-135px" left="-190px">
        <Image src="/main_red.png" alt="red image" width={430} height={430} />
      </Box>
      <Box>
        <Image src="/koreacompass.png" alt="logo" width={360} height={360} />
      </Box>
      <Link href="/from" style={{ width: "100%" }}>
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
      <Box position="absolute" bottom="-95px" right="-100px">
        <Image src="/main_blue.png" alt="red image" width={430} height={430} />
      </Box>
    </Box>
  );
}
