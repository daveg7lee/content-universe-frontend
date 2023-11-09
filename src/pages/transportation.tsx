import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const trainData = [
  {
    trainType: "KTX 069",
    travelTime: "1h 49min",
    departureTime: "9:27",
    arrivalTime: "11:16",
    price: "43,000",
  },
];

interface ITrainData {
  adultcharge: number;
  arrplacename: string;
  arrplandtime: number;
  depplacename: string;
  depplandtime: number;
  traingradename: string;
  trainno: number;
}

export default function Transportation() {
  const router = useRouter();
  const { englishName, toNodeId, fromNodeId } = router.query;
  const [trainsData, setTrainsData] = useState<ITrainData[]>();

  const fetchTrainData = async () => {
    if (!toNodeId || !fromNodeId) return;

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    const formattedDate = `${year}${month}${day}`;

    const res = await axios.get(
      `https://apis.data.go.kr/1613000/TrainInfoService/getStrtpntAlocFndTrainInfo?serviceKey=t3Soa3B8WucvsGBe%2Bx8lkY8ajIzEeBD2axF2HKIkomW3eidNhg931WZHHGIf2wrF4V%2FFCmvVZWDVlfQfbju%2BNg%3D%3D&pageNo=1&numOfRows=100&_type=json&depPlaceId=${fromNodeId}&arrPlaceId=${toNodeId}&depPlandTime=${formattedDate}&trainGradeCode=00`
    );

    setTrainsData(res.data.response.body.items.item);
  };

  useEffect(() => {
    fetchTrainData();
  }, [fromNodeId, toNodeId]);

  return (
    <Box py="8" px={[6, 0]}>
      <Text fontSize="2xl" fontWeight="bold" mb="3">
        Here are some plans to {englishName}
      </Text>
      {trainsData?.map((i, index) => {
        const depplanddate = dayjs(
          `${i.depplandtime.toString().slice(0, 4)}-${i.depplandtime
            .toString()
            .slice(4, 6)}-${i.depplandtime
            .toString()
            .slice(6, 8)}T${i.depplandtime
            .toString()
            .slice(8, 10)}:${i.depplandtime
            .toString()
            .slice(10, 12)}:${i.depplandtime.toString().slice(12, 14)}Z`
        );
        const arrplanddate = dayjs(
          `${i.arrplandtime.toString().slice(0, 4)}-${i.arrplandtime
            .toString()
            .slice(4, 6)}-${i.arrplandtime
            .toString()
            .slice(6, 8)}T${i.arrplandtime
            .toString()
            .slice(8, 10)}:${i.arrplandtime
            .toString()
            .slice(10, 12)}:${i.arrplandtime.toString().slice(12, 14)}Z`
        );

        const diff = arrplanddate.diff(depplanddate) / 1000 / 60 / 60;
        const diffMin = arrplanddate.diff(depplanddate) / 1000 / 60;

        return (
          <Box
            key={index}
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
            borderBottom="1px solid"
            borderColor="gray.200"
            py="2"
            cursor="pointer"
            onClick={() => router.push("/guide/1")}
          >
            <HStack gap="10px">
              <VStack
                gap="0px"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <HStack gap="2px" fontWeight="semibold">
                  <Text>
                    {i.depplandtime.toString().slice(8, 10) +
                      ":" +
                      i.depplandtime.toString().slice(10, 12)}
                  </Text>
                  <Text>-</Text>
                  <Text>
                    {i.arrplandtime.toString().slice(8, 10) +
                      ":" +
                      i.arrplandtime.toString().slice(10, 12)}
                  </Text>
                </HStack>
                <Text fontSize="xs">{i.traingradename}</Text>
                <Text fontSize="xs">
                  {`${Math.floor(diff)}h ${diffMin - 60 * Math.floor(diff)}min`}
                </Text>
              </VStack>
            </HStack>
            <VStack gap="0" alignItems="flex-start">
              <Text>$32.79</Text>
              <Text fontSize="xs">₩{i.adultcharge}</Text>
            </VStack>
          </Box>
        );
      })}
    </Box>
  );
}
