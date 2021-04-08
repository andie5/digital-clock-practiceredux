import { ADD_HOUR, ADD_MINUTE } from "./action-types";

export const increaseHours = () => {
  return { type: ADD_HOUR };
};

export const increaseMinutes = () => {
  return { type: ADD_MINUTE };
};
