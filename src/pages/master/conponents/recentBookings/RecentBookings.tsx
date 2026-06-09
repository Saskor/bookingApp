import { Tree } from "components/navTree/Tree";
import { getDayNodeLabel, getMonthNodeLabel } from "components/navTree/utils/dates";
import { TimeSlotStatus } from "constants/enums";
import type { ITimeSlot } from "types";
import { Node as masterTreeNode } from "components/masterTreeNode/Node";
import type { ITreeDataItem } from "components/navTree/types";
import { nonExistentPositiveNumber } from "constants/shared";

export const RecentBookings = () => {
  const slots: ITimeSlot[] = [
    {
      id: 1,
      serviceId: 1,
      serviceName: "Стрижка",
      ownerId: 1,
      date: "2026-03-01", // YYYY-MM-DD
      startTime: "11:30", // HH:MM
      endTime: "12:30", // HH:MM
      status: TimeSlotStatus["TIME_SLOT_STATUS_AVAILABLE"],
    },
    {
      id: 2,
      serviceId: 1,
      serviceName: "Стрижка",
      ownerId: 1,
      date: "2026-03-01", // YYYY-MM-DD
      startTime: "11:30", // HH:MM
      endTime: "12:30", // HH:MM
      status: TimeSlotStatus["TIME_SLOT_STATUS_AVAILABLE"],
    },
    {
      id: 3,
      serviceId: 1,
      serviceName: "Стрижка",
      ownerId: 1,
      date: "2026-03-01", // YYYY-MM-DD
      startTime: "11:30", // HH:MM
      endTime: "12:30", // HH:MM
      status: TimeSlotStatus["TIME_SLOT_STATUS_AVAILABLE"],
    },
  ];

  const data = slots.reduce<ITreeDataItem[]>((acc, item) => {
    const [year, month] = item.date.split("-");

    let existedMonthLevelItemIndex = nonExistentPositiveNumber;

    for (const [monthLevelItemIndex, monthNode] of acc.entries()) {
      if (monthNode.data.label === getMonthNodeLabel(item.date)) {
        existedMonthLevelItemIndex = monthLevelItemIndex;
      }
    }

    let existedDayLevelItemIndex = nonExistentPositiveNumber;

    if (existedMonthLevelItemIndex > nonExistentPositiveNumber) {
      for (const [dayLevelItemIndex, dayNode] of acc[
        existedMonthLevelItemIndex
      ].children.entries()) {
        if (dayNode.data.label === getDayNodeLabel(item.date)) {
          existedDayLevelItemIndex = dayLevelItemIndex;
        }
      }
    }

    const newTimeSlotNodeData = {
      data: {
        id: `${item.date}-${item.startTime}-${item.id}`,
        label: `${item.startTime} ${item.serviceName}`,
      },
      info: item,
      children: [],
    };
    const newDayItemNodeData = {
      data: {
        id: item.date,
        label: getDayNodeLabel(item.date),
      },
      children: [{ ...newTimeSlotNodeData }],
    };
    const newMonthItemNodeData = {
      data: {
        id: `${month}-${year}`,
        label: getMonthNodeLabel(item.date),
      },
      children: [{ ...newDayItemNodeData }],
    };

    if (existedMonthLevelItemIndex === nonExistentPositiveNumber) {
      return [...acc, newMonthItemNodeData];
    } else if (existedDayLevelItemIndex === nonExistentPositiveNumber) {
      acc[existedMonthLevelItemIndex].children.push(newDayItemNodeData);

      return acc;
    } else {
      acc[existedMonthLevelItemIndex].children[existedDayLevelItemIndex].children.push(
        newTimeSlotNodeData
      );

      return acc;
    }
  }, []);

  return <Tree data={data} childrenNode={masterTreeNode} />;
};
