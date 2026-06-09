import { useState, useEffect } from "react";
import { PanelHeader, ScreenSpinner, SplitCol, SplitLayout } from "@vkontakte/vkui";
import { MasterLayout } from "pages/master/MasterLayout";
import { useGetVkUserInfo } from "api/hooks";
import { additionalApiKeysMap } from "constants/api";

export const App = () => {
  const { data: { id: vkUserId = 0 } = {} } = useGetVkUserInfo();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (vkUserId) {
      localStorage.setItem(additionalApiKeysMap.userInfoKey, `${vkUserId}`);
      setIsAuthorized(true);
    }
  }, [vkUserId]);

  return (
    <SplitLayout header={<PanelHeader delimiter="none" />}>
      <SplitCol stretchedOnMobile width={"100%"}>
        {isAuthorized ? <MasterLayout /> : <ScreenSpinner />}
      </SplitCol>
    </SplitLayout>
  );
};
function useModalManager(): [any, any] {
  throw new Error("Function not implemented.");
}
