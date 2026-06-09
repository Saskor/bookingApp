import {
  Icon20GearOutline,
  Icon20ListLetterOutline,
  Icon20ArticleBoxOutline,
} from "@vkontakte/icons";
import { Panel, Tabs, TabsItem } from "@vkontakte/vkui";
import { masterLayoutTabsIdsMap, masterLayoutTabsIdsToComponentsMap } from "./constants";
import { useState } from "react";
import { StyledTabContent } from "./styles";
import { ValueOf } from "types";

export const MasterLayout = ({ masterVkId }: { masterVkId: string }) => {
  const [currentTabId, setСurrentTabId] = useState<ValueOf<typeof masterLayoutTabsIdsMap>>(
    masterLayoutTabsIdsMap.profile
  );
  const items = [
    <TabsItem
      key={masterLayoutTabsIdsMap.profile}
      id={masterLayoutTabsIdsMap.profile}
      aria-controls="profile"
      children={
        <StyledTabContent>
          <Icon20GearOutline />
          <span>Профиль и настройки</span>
        </StyledTabContent>
      }
    />,
    <TabsItem
      key={masterLayoutTabsIdsMap.workSchedule}
      id={masterLayoutTabsIdsMap.workSchedule}
      aria-controls="workSchedule"
      children={
        <StyledTabContent>
          <Icon20ListLetterOutline />
          <span>График занятости</span>
        </StyledTabContent>
      }
    />,
    <TabsItem
      key={masterLayoutTabsIdsMap.recentBookings}
      id={masterLayoutTabsIdsMap.recentBookings}
      aria-controls="recentBookings"
      children={
        <StyledTabContent>
          <Icon20ArticleBoxOutline />
          <span>История записей</span>
        </StyledTabContent>
      }
    />,
  ];

  const CurrentTabComponent = masterLayoutTabsIdsToComponentsMap[currentTabId];

  return (
    <Panel id="master">
      <Tabs
        onSelectedIdChange={(id) => setСurrentTabId(id as ValueOf<typeof masterLayoutTabsIdsMap>)}
      >
        {items}
      </Tabs>
      <CurrentTabComponent />
    </Panel>
  );
};
