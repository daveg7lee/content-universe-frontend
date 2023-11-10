import Header from "@/components/Header";
import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import { toPng } from "html-to-image";
import QRCode from "qrcode.react";
import { useCallback, useRef } from "react";

export default function Receipt() {
  const ref = useRef<HTMLDivElement>(null);

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true }).then((dataUrl) => {
      const link = document.createElement("a");
      link.download = "receipt.png";
      link.href = dataUrl;
      link.click();
    });
  }, [ref]);

  return (
    <Box px="36px" py="8" ref={ref} bgColor="white">
      <Header />
      <VStack flexDir="column" h="100vh" alignItems="center" gap={0}>
        <Text fontWeight="semibold" fontSize="21px" mb="7px">
          Reciept
        </Text>
        <QRCode
          value={
            "Just do it. I should make very long text to make it complicated"
          }
          width="120px"
          height="120px"
        />
        <HStack mt="15px" justifyContent="space-between" w="full">
          <Text>Ticket Number</Text>
          <Text>82103-0310-1234-33</Text>
        </HStack>
        <HStack mt="15px" justifyContent="space-between" w="full">
          <Text>Date of Issue</Text>
          <Text>2023/11/12 | 21:23:12</Text>
        </HStack>

        <Text my="22px" textAlign="left" w="full">
          2023/11/12(Sunday)
        </Text>

        <Text textAlign="left" w="full">
          KTX 125 | Economy <br /> Seoul 11:25 → Busan 14:42 <br /> 1 Adult, 0
          Children
        </Text>
        <HStack mt="10px" justifyContent="space-between" w="full">
          <Text>Total amount paid</Text>
          <Text>$23</Text>
        </HStack>
        <Button
          bgColor="#3288FF"
          color="white"
          w="full"
          mt="16px"
          _hover={{ bgColor: "#3288FF", opacity: 0.6 }}
          onClick={onButtonClick}
        >
          Save
        </Button>
      </VStack>
    </Box>
  );
}
