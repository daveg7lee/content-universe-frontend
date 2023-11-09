import { SearchIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface IStation {
  nodeid: string;
  nodename: string;
}

export default function FromStations() {
  const router = useRouter();
  const { englishName, citycode, fromNodeName, fromNodeId } = router.query;
  const [stations, setStations] = useState<IStation[]>([]);

  const fetchStations = async () => {
    if (!citycode) return;

    const res = await axios.get(
      `https://apis.data.go.kr/1613000/TrainInfoService/getCtyAcctoTrainSttnList?serviceKey=t3Soa3B8WucvsGBe%2Bx8lkY8ajIzEeBD2axF2HKIkomW3eidNhg931WZHHGIf2wrF4V%2FFCmvVZWDVlfQfbju%2BNg%3D%3D&pageNo=1&numOfRows=100&_type=json&cityCode=${citycode}`
    );

    setStations(res?.data?.response?.body?.items?.item);
  };

  useEffect(() => {
    fetchStations();
  }, [citycode]);

  return (
    <Box py="8" px={[6, 0]}>
      <Text fontSize="2xl" fontWeight="bold" mb="3">
        Which station do you want to go?
      </Text>
      <VStack mt="6" w="full">
        {stations.map(({ nodename, nodeid }, index) => (
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
              router.push(
                {
                  pathname: "/transportation",
                  query: { englishName, toNodeId: nodeid, fromNodeId },
                },
                "/transportation"
              )
            }
          >
            <Text>{nodename}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}
