import Header from "@/components/Header";
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

const citiesData = [
  {
    citycode: 11,
    cityname: "서울특별시",
    englishName: "Seoul",
  },
  {
    citycode: 12,
    cityname: "세종특별시",
    englishName: "Sejong",
  },
  {
    citycode: 21,
    cityname: "부산광역시",
    englishName: "Busan",
  },
  {
    citycode: 22,
    cityname: "대구광역시",
    englishName: "Daegu",
  },
  {
    citycode: 23,
    cityname: "인천광역시",
    englishName: "Incheon",
  },
  {
    citycode: 24,
    cityname: "광주광역시",
    englishName: "Gwangju",
  },
  {
    citycode: 25,
    cityname: "대전광역시",
    englishName: "Daejeon",
  },
  {
    citycode: 26,
    cityname: "울산광역시",
    englishName: "Ulsan",
  },
  {
    citycode: 31,
    cityname: "경기도",
    englishName: "Gyeonggi-do",
  },
  {
    citycode: 32,
    cityname: "강원도",
    englishName: "Gangwon-do",
  },
  {
    citycode: 33,
    cityname: "충청북도",
    englishName: "Chung-cheong bukdo",
  },
  {
    citycode: 34,
    cityname: "충청남도",
    englishName: "Chungcheongnam-do",
  },
  {
    citycode: 35,
    cityname: "전라북도",
    englishName: "Jeollabuk do",
  },
  {
    citycode: 36,
    cityname: "전라남도",
    englishName: "Jeollanam-do",
  },
  {
    citycode: 37,
    cityname: "경상북도",
    englishName: "Gyeongsangbuk-do",
  },
  {
    citycode: 38,
    cityname: "경상남도",
    englishName: "Gyeongsangnam-do",
  },
];

const AI_cities = ["Yeo su"];

export default function From() {
  const router = useRouter();
  const { nodename, nodeid, fromEnglishName } = router.query;
  const [cities, setCities] =
    useState<{ citycode: number; cityname: string; englishName: string }[]>(
      citiesData
    );

  const onChangeTerm = (term: string) => {
    const searchTerm = term.toLowerCase();
    const result = citiesData.filter(({ englishName }) =>
      englishName.toLowerCase().includes(searchTerm)
    );
    setCities(result);
  };

  return (
    <Box py="8" px={[6, 0]}>
      <Header />
      <Text fontSize="2xl" fontWeight="bold" mb="3">
        Where do you want to go?
      </Text>
      <InputGroup>
        <Input
          placeholder="Search"
          onChange={(e) => {
            onChangeTerm(e.target.value);
          }}
        />
        <InputRightElement>
          <SearchIcon color="grey" />
        </InputRightElement>
      </InputGroup>
      <Text mt="2" mb="1" fontSize="md" fontWeight="semibold">
        Recommend
      </Text>
      {AI_cities.map((city, index) => (
        <Badge
          key={index}
          mr="1"
          colorScheme="gray"
          borderRadius="lg"
          px="2"
          py="1"
          cursor="pointer"
        >
          {city}
        </Badge>
      ))}
      <VStack mt="6" w="full">
        {cities.map(({ englishName, citycode }, index) => (
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
                pathname: "/train/to-stations",
                query: {
                  toEnglishName: englishName,
                  fromEnglishName,
                  citycode,
                  fromNodeName: nodename,
                  fromNodeId: nodeid,
                },
              })
            }
          >
            <Text>{englishName}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}
