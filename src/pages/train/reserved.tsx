import { ArrowBackIcon, CheckCircleIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Reserved() {
  const router = useRouter();

  return (
    <>
      <HStack justifyContent="space-between" py={6}>
        <Box onClick={router.back}>
          <Box cursor="pointer">
            <ArrowBackIcon fontSize="2xl" />
          </Box>
        </Box>
        <Button
          bgColor="#3288FF"
          color="white"
          w="100px"
          onClick={() => router.push("/train/receipt")}
          _hover={{
            bgColor: "#3288FF",
            opacity: 0.6,
          }}
        >
          Get receipt
        </Button>
      </HStack>
      <VStack
        flexDir="column"
        h="100vh"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <Text textAlign="center" fontWeight="bold" fontSize="21px">
          Purcahse Successful!
        </Text>
        <CheckCircleIcon fontSize="9xl" color="green" my="60px" />
        <Button
          onClick={() => router.push("/taxi/drivers")}
          bgColor="#3288FF"
          color="white"
          w="full"
          _hover={{
            bgColor: "#3288FF",
            opacity: 0.6,
          }}
        >
          Reserve Taxi
        </Button>
        <Button
          onClick={() => router.push("/home")}
          bgColor="#3288FF"
          color="white"
          w="full"
          _hover={{
            bgColor: "#3288FF",
            opacity: 0.6,
          }}
        >
          Maybe Later
        </Button>
      </VStack>
    </>
  );
}
