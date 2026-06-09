import { Button, Checkbox } from "@vkontakte/vkui";
import { useState } from "react";
import { StyledOrgSettingsContainer } from "./styles";
import { ModalFullScreen } from "components/modalFullScreen/ModalFullScreen";
import { OrgSettingsModal } from "./components/OrgSettingsModal";
import { observer } from "mobx-react";
import { rootStore } from "store/rootStore";
import { modalsIdsMap } from "./constants";
import { PhonesListModal } from "./components/PhonesListModal";
import { WebLinksModal } from "./components/WebLinksModal";
import { ServicesModal } from "./components/ServicesModal";
import { ServiceSettingsModal } from "./components/ServiceSettingsModal";

export const Profile = observer(() => {
  const { addNewModal } = rootStore.modalsStore;
  const [hasOrgBranches, setHasOrgBranches] = useState(false);
  const [isOrgBranchesModalOpen, setIsOrgBranchesModalOpen] = useState(false);

  return (
    <StyledOrgSettingsContainer>
      <Button
        mode="primary"
        appearance="accent-invariable"
        style={{ maxWidth: "fit-content" }}
        onClick={() => addNewModal(modalsIdsMap.OrgSettingsModal)}
      >
        Общие настройки организации
      </Button>
      <Checkbox
        style={{ maxWidth: "fit-content" }}
        checked={hasOrgBranches}
        onChange={(event) => setHasOrgBranches(event.target.checked)}
      >
        У организации есть филиалы
      </Checkbox>
      {hasOrgBranches && (
        <Button
          onClick={() => setIsOrgBranchesModalOpen(true)}
          mode="primary"
          appearance="accent-invariable"
          style={{ maxWidth: "fit-content" }}
        >
          Настроить список филиалов
        </Button>
      )}
      <OrgSettingsModal />
      <PhonesListModal />
      <WebLinksModal />
      <ServicesModal isBranch={false} />
      <ServiceSettingsModal />
      <ModalFullScreen
        id="123"
        title="123"
        isOpen={isOrgBranchesModalOpen}
        close={() => {
          setIsOrgBranchesModalOpen(false);
        }}
      >
        123
      </ModalFullScreen>
    </StyledOrgSettingsContainer>
  );
});
