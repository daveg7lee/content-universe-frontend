import GuideHeader from "@/components/GuideHeader";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function Guide2() {
  return (
    <Box
      px={[3, 0]}
      minH="100vh"
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
        <Text my={3}>2. Click on the search button</Text>
        <Box borderRadius="lg" overflow="hidden">
          <Image src="/guide2.png" alt="Guide Img" width={380} height={200} />
        </Box>
        <Text my={3}>3. Select your station of departure/arrival</Text>
        <Box borderRadius="lg" overflow="hidden">
          <Image src="/guide3.png" alt="Guide Img" width={380} height={200} />
        </Box>
      </Box>
      <Link href="/guide/3" style={{ width: "100%", marginTop: "32px" }}>
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
