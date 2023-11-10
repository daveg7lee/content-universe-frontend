import Header from "@/components/Header";
import { VStack, Input, Button, Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Wishtime() {
  const router = useRouter();

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
        <Text
          fontSize="2xl"
          fontWeight="bold"
          mb="3"
          textAlign="left"
          w={"full"}
        >
          희망시간?
        </Text>
        <Input type="date" placeholder="Please enter your phone number" />
      </VStack>

      <Button
        bgColor="#3288FF"
        color="white"
        w="full"
        _hover={{ bgColor: "#3288FF", opacity: 0.8 }}
        mt="32px"
        onClick={() => {
          router.push("/taxi/wishplace");
        }}
      >
        Next
      </Button>
    </Box>
  );
}