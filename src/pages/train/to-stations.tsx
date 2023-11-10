import Header from "@/components/Header";
import { Box, Center, Spinner, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface IStation {
  nodeid: string;
  nodename: string;
}

export default function FromStations() {
  const router = useRouter();
  const { englishName, citycode, fromEnglishName, fromNodeId, toEnglishName } =
    router.query;
  const [stations, setStations] = useState<IStation[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchStations = async () => {
    if (!citycode) return;

    setLoading(true);

    const res = await axios.get(
      `https://apis.data.go.kr/1613000/TrainInfoService/getCtyAcctoTrainSttnList?serviceKey=t3Soa3B8WucvsGBe%2Bx8lkY8ajIzEeBD2axF2HKIkomW3eidNhg931WZHHGIf2wrF4V%2FFCmvVZWDVlfQfbju%2BNg%3D%3D&pageNo=1&numOfRows=100&_type=json&cityCode=${citycode}`
    );

    setStations(res?.data?.response?.body?.items?.item);
    setLoading(false);
  };

  useEffect(() => {
    fetchStations();
  }, [citycode]);

  return (
    <Box py="8" px={[6, 0]}>
      <Header />
      <Text fontSize="2xl" fontWeight="bold" mb="3">
        Which station do you want to go?
      </Text>
      <VStack mt="6" w="full">
        {loading ? (
          <Center h="80vh">
            <Spinner />
          </Center>
        ) : (
          stations.map(({ nodename, nodeid }, index) => (
            <Box
              key={index}
              _hover={{ bgColor: "gray.100" }}
              p="3"
              transition="all"
              transitionDuration="0.5s"
              borderRadius="md"
              cursor="pointer"
              w="full"
              onClick={() =>
                router.push({
                  pathname: "/train/transportation",
                  query: {
                    toNodeId: nodeid,
                    fromNodeId,
                    fromEnglishName,
                    toEnglishName,
                  },
                })
              }
            >
              <Text>{nodename}</Text>
            </Box>
          ))
        )}
      </VStack>
    </Box>
  );
}
