import type { ITimeSlot } from "types";
import { monthsNamesForDayLabelMap } from "../constants";

export const getMonthNodeLabel = (dateString: ITimeSlot["date"]) => {
  const date = new Date(dateString);
  const localizedMonthName = date.toLocaleString("default", {
    month: "long",
  });

  return `${localizedMonthName.slice(0, 1).toUpperCase()}${localizedMonthName.slice(
    1
  )}/${date.getFullYear()}`;
};

export const getDayNodeLabel = (dateString: ITimeSlot["date"]) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const monthEnglishName = date.toLocaleString("en", { month: "long" });

  return `${day}/${monthsNamesForDayLabelMap[monthEnglishName]}`;
};
