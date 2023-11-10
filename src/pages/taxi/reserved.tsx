import { ArrowBackIcon, CheckCircleIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Reserved() {
  const router = useRouter();

  return (
    <>
      <HStack justifyContent="space-between" py={6} px={[6, 0]}>
        <Box onClick={router.back}>
          <Box cursor="pointer">
            <ArrowBackIcon fontSize="2xl" />
          </Box>
        </Box>
      </HStack>
      <VStack
        flexDir="column"
        h="100vh"
        alignItems="center"
        pt={12}
        gap={2}
        px={[6, 0]}
      >
        <Text textAlign="center" fontWeight="bold" fontSize="21px">
          Reservation Completed!
        </Text>
        <CheckCircleIcon fontSize="9xl" color="green" my="60px" />

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
          Go home
        </Button>
      </VStack>
    </>
  );
}
