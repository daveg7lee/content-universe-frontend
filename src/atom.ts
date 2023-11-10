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
  cost: number;
}

export const trainReservationState = atom<ITrainReservation>({
  key: "trainReservationState",
});
