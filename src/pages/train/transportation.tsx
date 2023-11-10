import { trainReservationState } from "@/atom";
import Header from "@/components/Header";
import {
  Box,
  Button,
  Center,
  HStack,
  Select,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import dayjs from "dayjs";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSetRecoilState } from "recoil";

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
  const { fromEnglishName, toEnglishName, toNodeId, fromNodeId } = router.query;
  const [trainsData, setTrainsData] = useState<ITrainData[]>();
  const [sdate, setSdate] = useState<Date | null>(new Date());
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState<number | null>(null);
  const [trainCode, setTrainCode] = useState<string>("00");
  const [departureTime, setDepartureTime] = useState<string>();
  const [arrivalTime, setArrivalTime] = useState<string>();
  const [trainType, setTrainType] = useState<string>();
  const [timeTaken, setTimeTaken] = useState<string>();
  const [cost, setCost] = useState<number>();
  const setTrainReservationState = useSetRecoilState(trainReservationState);

  const fetchTrainData = async () => {
    if (!toNodeId || !fromNodeId || !sdate || !trainCode) return;

    setLoading(true);

    const year = sdate.getFullYear();
    const month = String(sdate.getMonth() + 1).padStart(2, "0");
    const day = String(sdate.getDate()).padStart(2, "0");

    const formattedDate = `${year}${month}${day}`;

    const res = await axios.get(
      `https://apis.data.go.kr/1613000/TrainInfoService/getStrtpntAlocFndTrainInfo?serviceKey=t3Soa3B8WucvsGBe%2Bx8lkY8ajIzEeBD2axF2HKIkomW3eidNhg931WZHHGIf2wrF4V%2FFCmvVZWDVlfQfbju%2BNg%3D%3D&pageNo=1&numOfRows=100&_type=json&depPlaceId=${fromNodeId}&arrPlaceId=${toNodeId}&depPlandTime=${formattedDate}&trainGradeCode=${trainCode}`
    );

    setTrainsData(res?.data?.response?.body?.items?.item);
    setLoading(false);
  };

  useEffect(() => {
    fetchTrainData();
  }, [fromNodeId, toNodeId, sdate, trainCode]);

  const onClickNext = () => {
    if (
      typeof toEnglishName !== "string" ||
      typeof fromEnglishName !== "string" ||
      !departureTime ||
      !arrivalTime ||
      !trainType ||
      !timeTaken ||
      !cost
    )
      return;

    setTrainReservationState({
      to: toEnglishName,
      from: fromEnglishName,
      departureTime,
      arrivalTime,
      trainType,
      timeTaken,
      cost,
    });
  };

  return (
    <Box py="8" px={[6, 0]}>
      <Header />
      <Text fontSize="2xl" fontWeight="bold" mb="3">
        Here are some plans to {toEnglishName} from {fromEnglishName}
      </Text>
      <DatePicker selected={sdate} onChange={(date) => setSdate(date)} />
      <Select
        onChange={(e) => setTrainCode(e.target.value)}
        value={trainCode}
        mt={2}
      >
        <option value="00">KTX</option>
        <option value="01">Saemaeul</option>
        <option value="02">Mugunghwa</option>
        <option value="18">ITX-MAUM</option>
        <option value="08">ITX-Saemaul</option>
      </Select>
      {loading ? (
        <Center h="80vh">
          <Spinner />
        </Center>
      ) : !trainsData || trainsData.length === 0 ? (
        <Center h="80vh">
          <Text>
            No Data Avaliable.{" "}
            <Text color="#3288FF" onClick={() => router.back()}>
              Go back
            </Text>
          </Text>
        </Center>
      ) : (
        trainsData?.map((i, index) => {
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
              bgColor={checked === index ? "gray.100" : ""}
              py="2"
              mt={2}
              cursor="pointer"
              onClick={() => {
                setChecked(index);
                setDepartureTime(
                  i.depplandtime.toString().slice(8, 10) +
                    ":" +
                    i.depplandtime.toString().slice(10, 12)
                );
                setArrivalTime(
                  i.arrplandtime.toString().slice(8, 10) +
                    ":" +
                    i.arrplandtime.toString().slice(10, 12)
                );
                setTrainType(i.traingradename);
                setTimeTaken(
                  `${Math.floor(diff)}h ${diffMin - 60 * Math.floor(diff)}min`
                );
                setCost(Math.round((i.adultcharge / 1314.6) * 100) / 100);
              }}
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
                    {`${Math.floor(diff)}h ${
                      diffMin - 60 * Math.floor(diff)
                    }min`}
                  </Text>
                </VStack>
              </HStack>
              <VStack gap="0" alignItems="flex-start">
                <Text>${Math.round((i.adultcharge / 1314.6) * 100) / 100}</Text>
                <Text fontSize="xs">₩{i.adultcharge}</Text>
              </VStack>
            </Box>
          );
        })
      )}
      {checked !== null && (
        <Button
          position="fixed"
          bottom="8"
          onClick={() => {
            onClickNext();
            router.push("/train/name");
          }}
          w={
            typeof window !== undefined && window.innerWidth < 390
              ? window.innerWidth - 48
              : "390px"
          }
        >
          Next
        </Button>
      )}
    </Box>
  );
}
