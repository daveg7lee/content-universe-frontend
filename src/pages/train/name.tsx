import { nameState } from "@/atom";
import Header from "@/components/Header";
import { VStack, Input, Button, Text, Box } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";

export default function Name() {
  const router = useRouter();
  const [name, setName] = useRecoilState(nameState);

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
          What is your name?
        </Text>
        <Input
          type="text"
          placeholder="Please enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </VStack>

      <Button
        bgColor="#3288FF"
        color="white"
        w="full"
        _hover={{ bgColor: "#3288FF", opacity: 0.8 }}
        mt="32px"
        onClick={() => {
          if (!name) return;
          router.push("/train/passengers");
        }}
      >
        Next
      </Button>
    </Box>
  );
}
