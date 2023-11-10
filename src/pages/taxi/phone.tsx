import { phoneState } from "@/atom";
import Header from "@/components/Header";
import { VStack, Input, Button, Box, Text } from "@chakra-ui/react";
import router, { useRouter } from "next/router";
import { useRecoilState } from "recoil";

export default function Phone() {
  const router = useRouter();
  const [phone, setPhone] = useRecoilState(phoneState);

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
          What is your phone?
        </Text>
        <Input
          type="number"
          placeholder="Please enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </VStack>

      <Button
        bgColor="#3288FF"
        color="white"
        w="full"
        _hover={{ bgColor: "#3288FF", opacity: 0.8 }}
        mt="32px"
        onClick={() => {
          if (!phone) return;
          router.push("/taxi/passengers");
        }}
      >
        Next
      </Button>
    </Box>
  );
}
