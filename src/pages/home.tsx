import { Box, Button, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <Box overflow="hidden">
      <HStack gap="4px" px="20px" py="8px">
        <Image src="/logo.png" alt="logo" width={60} height={60} />
        <Text>KoreaCompass</Text>
      </HStack>
      <Box
        backgroundImage="/hangul.png"
        w="full"
        h="220px"
        backgroundSize="cover"
        backgroundPosition="center"
        px="45px"
        py="30px"
        position="relative"
        isolation="isolate"
        _after={{
          content: '""',
          position: "absolute",
          background: "white",
          zIndex: "-1",
          inset: 0,
          opacity: 0.8,
        }}
      >
        <Text fontSize="25px" fontWeight="bold">
          Language Barrier? <br /> Not on our watch!
        </Text>
        <Text>
          Secure your transportation within Korea <br /> easily through
          KoreaCompass!
        </Text>
      </Box>
      <Box py="28px" px="45px">
        <Text color="black" fontSize="15px" fontWeight="semibold" mb="15px">
          Top spots in Korea this Winter
        </Text>
        <SimpleGrid columns={[2]} gap="15px">
          <Box
            fontSize="15px"
            color="white"
            fontWeight="bold"
            w="140px"
            h="76px"
            display="flex"
            justifyContent={"center"}
            alignItems={"center"}
            backgroundImage="/jeonju.jpg"
            backgroundPosition="center"
            backgroundSize="cover"
            borderRadius="6px"
            position="relative"
            isolation="isolate"
            _after={{
              content: '""',
              position: "absolute",
              background: "black",
              zIndex: "-1",
              inset: 0,
              opacity: 0.4,
              borderRadius: "6px",
            }}
          >
            Jeonju
          </Box>
          <Box
            fontSize="15px"
            color="white"
            fontWeight="bold"
            w="140px"
            h="76px"
            display="flex"
            justifyContent={"center"}
            alignItems={"center"}
            backgroundImage="/suwon.jpg"
            backgroundPosition="center"
            backgroundSize="cover"
            borderRadius="6px"
            position="relative"
            isolation="isolate"
            _after={{
              content: '""',
              position: "absolute",
              background: "black",
              zIndex: "-1",
              inset: 0,
              opacity: 0.4,
              borderRadius: "6px",
            }}
          >
            Suwon
          </Box>
          <Box
            fontSize="15px"
            color="white"
            fontWeight="bold"
            w="140px"
            h="76px"
            display="flex"
            justifyContent={"center"}
            alignItems={"center"}
            backgroundImage="/gyeongbook.jpg"
            backgroundPosition="center"
            backgroundSize="cover"
            borderRadius="6px"
            position="relative"
            isolation="isolate"
            _after={{
              content: '""',
              position: "absolute",
              background: "black",
              zIndex: "-1",
              inset: 0,
              opacity: 0.4,
              borderRadius: "6px",
            }}
          >
            Seoul
          </Box>
          <Box
            fontSize="15px"
            color="white"
            fontWeight="bold"
            w="140px"
            h="76px"
            display="flex"
            justifyContent={"center"}
            alignItems={"center"}
            backgroundImage="/everland.png"
            backgroundPosition="center"
            backgroundSize="cover"
            borderRadius="6px"
            position="relative"
            isolation="isolate"
            _after={{
              content: '""',
              position: "absolute",
              background: "black",
              zIndex: "-1",
              inset: 0,
              opacity: 0.4,
              borderRadius: "6px",
            }}
          >
            Yongin
          </Box>
        </SimpleGrid>
      </Box>
      <Box
        backgroundImage="/taxi_driver.png"
        w="full"
        h="170px"
        backgroundSize="cover"
        backgroundPosition="center"
        position="relative"
        isolation="isolate"
        _after={{
          content: '""',
          position: "absolute",
          background: "white",
          zIndex: "-1",
          inset: 0,
          opacity: 0.6,
        }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          bgColor="black"
          color="white"
          _hover={{
            bgColor: "black",
          }}
          onClick={() => router.push("/train/from")}
        >
          Find a Tour Taxi
        </Button>
      </Box>
    </Box>
  );
}
