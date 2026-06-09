import { useState, useEffect } from "react";
import bridge, { UserInfo } from "@vkontakte/vk-bridge";
import { Tree } from "./components/navTree/Tree";
import { Node as masterTreeNode } from "./components/masterTreeNode/Node";
import { PanelHeader, SplitCol, SplitLayout } from "@vkontakte/vkui";
import { TimeSlotStatus } from "./constants/enums";
import { ITimeSlot } from "types";
import type { ITreeDataItem } from "components/navTree/types";
import { getDayNodeLabel, getMonthNodeLabel } from "components/navTree/utils/dates";
import { MasterLayout } from "pages/master/MasterLayout";

export const App = () => {
  const [fetchedUser, setUser] = useState<UserInfo | undefined>();

  useEffect(() => {
    async function fetchData() {
      const user = await bridge.send("VKWebAppGetUserInfo");
      setUser(user);
    }
    fetchData();
  }, []);

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

    let existedMonthLevelItemIndex = -1;

    for (const [monthLevelItemIndex, monthNode] of acc.entries()) {
      if (monthNode.data.label === getMonthNodeLabel(item.date)) {
        existedMonthLevelItemIndex = monthLevelItemIndex;
      }
    }

    let existedDayLevelItemIndex = -1;

    if (existedMonthLevelItemIndex > -1) {
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

    if (existedMonthLevelItemIndex === -1) {
      return [...acc, newMonthItemNodeData];
    } else if (existedDayLevelItemIndex === -1) {
      acc[existedMonthLevelItemIndex].children.push(newDayItemNodeData);

      return acc;
    } else {
      acc[existedMonthLevelItemIndex].children[existedDayLevelItemIndex].children.push(
        newTimeSlotNodeData
      );

      return acc;
    }
  }, []);

  return (
    <SplitLayout header={<PanelHeader delimiter="none" />}>
      <SplitCol stretchedOnMobile width={"100%"}>
        <MasterLayout masterVkId="1" />
        {/* <Tree data={data} childrenNode={masterTreeNode} /> */}
      </SplitCol>
    </SplitLayout>
  );
};
