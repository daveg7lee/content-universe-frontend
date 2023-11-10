import { ArrowBackIcon } from "@chakra-ui/icons";
import { HStack, Button, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function GuideHeader() {
  const router = useRouter();

  return (
    <HStack justifyContent="space-between" py={6}>
      <Box onClick={router.back}>
        <Box cursor="pointer">
          <ArrowBackIcon fontSize="2xl" />
        </Box>
      </Box>
      <Button
        bgColor="#3288FF"
        color="white"
        w="100px"
        onClick={() => router.push("/guide/5")}
      >
        Skip
      </Button>
    </HStack>
  );
}
