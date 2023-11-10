import Header from "@/components/Header";
import { Box, Button, Center, Input, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

export default function Passengers() {
  return (
    <Box
      py="8"
      px={[6, 0]}
      display="flex"
      justifyContent="space-between"
      flexDir="column"
      minH="100vh"
    >
      <VStack w="full">
        <Header />
        <Text fontSize="2xl" fontWeight="bold" mb="3">
          How many passengers will come?
        </Text>
        <Input type="number" />
      </VStack>
      <Link href="/congrat" style={{ width: "100%", marginTop: "32px" }}>
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
