import { atom } from "recoil";

const nameState = atom({
  key: "nameState",
  default: "",
});

const phoneState = atom({
  key: "phoneState",
  default: "",
});

interface ITrainReservation {
  to: string;
  from: string;
  departureTime: string;
  arrivalTime: string;
  trainType: string;
  timeTaken: string;
  cost: number;
}

export const trainReservationState = atom<ITrainReservation>({
  key: "trainReservationState",
});
