import { trainReservationState } from "@/atom";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";

export default function Reserved() {
  const router = useRouter();
  // const trainReservation = useRecoilValue(trainReservationState);

  return (
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
        onClick={() => router.push("/taxi/name")}
        bgColor="#3288FF"
        color="white"
        w="full"
      >
        Reserve Taxi
      </Button>
      <Button
        onClick={() => router.push("/train/receipt")}
        bgColor="#3288FF"
        color="white"
        w="full"
      >
        Get Reciept
      </Button>
    </VStack>
  );
}
