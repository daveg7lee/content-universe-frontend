import { trainReservationState } from "@/atom";
import { Button, Heading, VStack } from "@chakra-ui/react";
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
      gap={5}
    >
      <Heading textAlign="center">Your reservation has been completed.</Heading>
      <Button onClick={() => router.push("/taxi/name")}>Reserve Taxi</Button>
    </VStack>
  );
}