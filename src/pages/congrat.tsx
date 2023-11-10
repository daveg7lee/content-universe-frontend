import { Box, Button, Center, Heading, VStack } from "@chakra-ui/react";

export default function Congrat() {
  return (
    <VStack
      flexDir="column"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      gap={5}
    >
      <Heading textAlign="center">Your reservation has been completed.</Heading>
      <Button>Reserve Taxi</Button>
    </VStack>
  );
}
