import Header from "@/components/Header";
import { VStack, Input, Button, Box, Text, Textarea } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Others() {
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
          Additional Questions
        </Text>
        <Textarea placeholder="Please enter your phone number" />
      </VStack>

      <Button
        bgColor="#3288FF"
        color="white"
        w="full"
        _hover={{ bgColor: "#3288FF", opacity: 0.8 }}
        mt="32px"
        onClick={() => {
          router.push("/taxi/reserved");
        }}
      >
        Next
      </Button>
    </Box>
  );
}
