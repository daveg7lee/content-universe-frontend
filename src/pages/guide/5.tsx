import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Guide5() {
  const router = useRouter();
  const [reserved, setReserved] = useState(false);

  return (
    <Box
      px={[3, 0]}
      h="100vh"
      display="flex"
      flexDir="column"
      justifyContent="space-between"
      pb={6}
    >
      <Box>
        <HStack justifyContent="space-between" py={6}>
          <ArrowBackIcon fontSize="3xl" />
        </HStack>
        <Text fontSize="xl" fontWeight="bold" mt={4} mb={12}>
          Start Reservation
        </Text>
        <Box borderRadius="lg" overflow="hidden">
          <Image src="/korail.png" alt="Guide Img" width={380} height={200} />
        </Box>
      </Box>
      <VStack>
        <Button
          bgColor="#3288FF"
          color="white"
          w="full"
          _hover={{ bgColor: "#3288FF", opacity: 0.8 }}
          mt="auto"
          onClick={() => {
            setReserved(true);
            window.open(
              "https://www.letskorail.com/ebizbf/EbizbfForeign_pr16100.do?gubun=1",
              "_ blank"
            );
          }}
        >
          Start Reservation
        </Button>
        {reserved && (
          <Link href="/home" style={{ width: "100%" }}>
            <Button
              bgColor="#3288FF"
              color="white"
              w="full"
              _hover={{ bgColor: "#3288FF", opacity: 0.8 }}
              mt="auto"
            >
              Next
            </Button>
          </Link>
        )}
      </VStack>
    </Box>
  );
}
