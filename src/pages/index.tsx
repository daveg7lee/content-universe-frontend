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
      py="12"
      px={[6, 0]}
    >
      <Box>
        <Heading>Welcome to KoreaCompass</Heading>
        <Image src="/koreacompass.png" alt="logo" width={360} height={360} />
      </Box>
      <Link href="/from" style={{ width: "100%" }}>
        <Button
          bgColor="#3288FF"
          color="white"
          w="full"
          _hover={{ bgColor: "#3288FF", opacity: 0.8 }}
        >
          Continue
        </Button>
      </Link>
    </Box>
  );
}
