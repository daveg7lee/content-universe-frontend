import { atom } from "recoil";

export const nameState = atom({
  key: "nameState",
  default: "",
});

export const phoneState = atom({
  key: "phoneState",
  default: "",
});

export const passengersState = atom({ key: "passengersState", default: "" });

interface ITrainReservation {
  to: string;
  from: string;
  departureTime: string;
  arrivalTime: string;
  trainType: string;
  timeTaken: string;
  date: string;
  cost: number;
}

export const trainReservationState = atom<ITrainReservation>({
  key: "trainReservationState",
  default: {
    to: "Daegu",
    from: "Seoul",
    departureTime: "12:00",
    arrivalTime: "13:10",
    trainType: "KTX",
    timeTaken: "1:10",
    date: "2023/10/23",
    cost: 30,
  },
});
