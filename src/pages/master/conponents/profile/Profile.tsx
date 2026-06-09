import { View } from "@vkontakte/vkui";
import { observer } from "mobx-react";

import { rootStore } from "store/rootStore";

import { OrgSettingsPanel } from "./components/OrgSettingsPanel";
import { PhonesListPanel } from "./components/PhonesListPanel";
import { ServiceSettingsPanel } from "./components/ServiceSettingsModal";
import { ServicesPanel } from "./components/ServicesModal";
import { WebLinksPanel } from "./components/WebLinksModal";
import { panelsIdsMap } from "./constants";
import { StyledOrgSettingsContainer } from "./styles";

export const Profile = observer(() => {
  const { goBack, navHistory, last: activePanel } = rootStore.panelsStore;

  return (
    <StyledOrgSettingsContainer>
      <View activePanel={activePanel} history={navHistory} onSwipeBack={goBack}>
        <OrgSettingsPanel id={panelsIdsMap.OrgSettings} />
        <PhonesListPanel id={panelsIdsMap.PhonesList} />
        <WebLinksPanel id={panelsIdsMap.WebLinks} />
        <ServicesPanel id={panelsIdsMap.Services} />
        <ServiceSettingsPanel id={panelsIdsMap.ServiceSettings} />
      </View>
    </StyledOrgSettingsContainer>
  );
});
