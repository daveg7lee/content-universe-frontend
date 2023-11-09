import GuideHeader from "@/components/GuideHeader";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Guide1() {
  const router = useRouter();

  return (
    <Box
      px={[3, 0]}
      h="100vh"
      display="flex"
      flexDir="column"
      justifyContent="space-between"
      pb={6}
    >
      <Box>
        <GuideHeader />
        <Text fontSize="xl" fontWeight="bold" mt={4}>
          Ticket Reservation Instructions
        </Text>
        <Text my={3}>1. Choose the date of departure</Text>
        <Box borderRadius="lg" overflow="hidden">
          <Image src="/guide1.png" alt="Guide Img" width={380} height={200} />
        </Box>
      </Box>
      <Link href="/guide/2" style={{ width: "100%" }}>
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
