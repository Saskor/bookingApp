import { Profile } from "./conponents/profile/Profile";

export const masterLayoutTabsIdsMap = {
  profile: "1",
  workSchedule: "2",
  recentBookings: "3",
} as const;

export const masterLayoutTabsIdsToComponentsMap: Record<string, () => JSX.Element> = {
  [masterLayoutTabsIdsMap.profile]: Profile,
  // [masterLayoutTabsIdsMap.workSchedule]: WorkSchedule,
  // [masterLayoutTabsIdsMap.recentBookings]: RecentBookings,
};
