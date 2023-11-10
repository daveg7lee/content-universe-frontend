import { trainReservationState } from "@/atom";
import Header from "@/components/Header";
import { SearchIcon } from "@chakra-ui/icons";
import {
  InputGroup,
  Input,
  InputRightElement,
  VStack,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";
import router from "next/router";
import { useState } from "react";
import { useRecoilValue } from "recoil";

export default function Drivers() {
  const trainReservation = useRecoilValue(trainReservationState);
  const [checked, setChecked] = useState<number | null>(null);

  return (
    <Box py="8" px={[6, 0]}>
      <Header />
      <Text fontSize="2xl" fontWeight="bold" mb="3">
        {trainReservation.to} Taxi
      </Text>
      <Input type="date" />
      <VStack mt="6" w="full">
        <Box
          _hover={{ bgColor: "gray.100" }}
          p="3"
          transition="all"
          transitionDuration="0.5s"
          borderRadius="md"
          cursor="pointer"
          w="full"
          onClick={() => setChecked(1)}
          bgColor={checked === 1 ? "gray.100" : ""}
        >
          <Text>이기현</Text>
        </Box>
      </VStack>
      {checked && (
        <Button
          position="fixed"
          bottom="8"
          onClick={() => {
            router.push("/taxi/name");
          }}
          w={
            typeof window !== undefined && window.innerWidth < 390
              ? window.innerWidth - 48
              : "390px"
          }
        >
          Next
        </Button>
      )}
    </Box>
  );
}
