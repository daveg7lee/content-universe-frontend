import { ArrowBackIcon } from "@chakra-ui/icons";
import { HStack, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <HStack pb={6}>
      <Box onClick={router.back} cursor="pointer">
        <ArrowBackIcon fontSize="2xl" />
      </Box>
    </HStack>
  );
}
