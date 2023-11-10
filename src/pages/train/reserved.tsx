import { trainReservationState } from "@/atom";
import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";

export default function Reserved() {
  const trainReservation = useRecoilValue(trainReservationState);

  return (
    <VStack
      flexDir="column"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      gap={5}
    >
      <Heading textAlign="center">Your reservation has been completed.</Heading>
      <Button>Reserve Taxi</Button>
    </VStack>
  );
}
