import {
  Icon20GearOutline,
  Icon20ListLetterOutline,
  Icon20ArticleBoxOutline,
} from "@vkontakte/icons";
import { Panel, Tabs, TabsItem, Title } from "@vkontakte/vkui";
import { masterLayoutTabsIdsMap, masterLayoutTabsIdsToComponentsMap } from "./constants";
import { useState } from "react";
import { StyledTabContent } from "./styles";
import { ValueOf } from "types";
import { useGetData } from "./hooks";

export const MasterLayout = () => {
  const { isUserBelongToThisOrg, userPermissions } = useGetData();

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
      {isUserBelongToThisOrg && userPermissions?.all ? (
        <>
          <Tabs
            onSelectedIdChange={(id) =>
              setСurrentTabId(id as ValueOf<typeof masterLayoutTabsIdsMap>)
            }
          >
            {items}
          </Tabs>
          <CurrentTabComponent />
        </>
      ) : (
        <Title align="center">Вы не авторизованы в данной организации</Title>
      )}
    </Panel>
  );
};
