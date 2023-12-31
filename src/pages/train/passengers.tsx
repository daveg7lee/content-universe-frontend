import { passengersState } from "@/atom";
import Header from "@/components/Header";
import { Box, Button, Center, Input, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useRecoilState } from "recoil";

export default function Passengers() {
  const [passengers, setPassengers] = useRecoilState(passengersState);

  return (
    <Box
      py="8"
      px={[6, 0]}
      display="flex"
      justifyContent="space-between"
      flexDir="column"
      minH="100vh"
    >
      <VStack w="full" gap={0}>
        <Header />
        <Text fontSize="2xl" fontWeight="bold" textAlign="left" w={"full"}>
          For how many passengers?
        </Text>
        <Text color="gray.400" mb="3" fontSize="sm" textAlign="left" w="full">
          (Max: 9)
        </Text>
        <Input
          type="number"
          value={passengers}
          onChange={(e) => setPassengers(e.target.value)}
        />
      </VStack>
      <Link href="/train/reserved" style={{ width: "100%", marginTop: "32px" }}>
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
    </Box>
  );
}
