import { Icon20GearCircleFillGray, Icon20TrashSimpleOutline } from "@vkontakte/icons";
import { Button, Panel, PanelHeaderBack, Text, type PanelProps } from "@vkontakte/vkui";
import { observer } from "mobx-react";
import { useState, useRef, type FC } from "react";

import { ConfirmModal } from "components/confirmModal/ConfirmModal";
import { useOrgId } from "pages/master/hooks";
import { rootStore } from "store/rootStore";

import { panelsIdsMap } from "../constants";

import { useServicesPanelState } from "./hooks";
import {
  StyledOrgSettingsModalContainer,
  StyledServiceItemContainer,
  StyledIconButton,
  StyledPanelHeader,
} from "./styles";
import { getEmptyService } from "./utils";

export const ServicesPanel = observer<FC<PanelProps>>(({ id }) => {
  const { setServicesListIndex } = rootStore.orgSettingsStore;
  const { goTo, goBack } = rootStore.panelsStore;
  const { services: servicesList, setServices: setServicesList } = useServicesPanelState();
  const { orgId } = useOrgId();

  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const deletedItemIndexRef = useRef(0);

  const prepareDeleteServiceHandler = (serviceIndex: number) => () => {
    deletedItemIndexRef.current = serviceIndex;
    setIsConfirmModalOpen(true);
  };

  const handleConfirmDeleteService = () => {
    setServicesList(
      deletedItemIndexRef.current === 0
        ? [getEmptyService(orgId)]
        : servicesList.filter(
            (_, deletedServiceFieldIndex) =>
              deletedServiceFieldIndex !== deletedItemIndexRef.current
          )
    );
    setServicesListIndex(0);
  };

  const handleCancelDeleteService = () => {
    setIsConfirmModalOpen(false);
  };

  const handleAddService = () => {
    setServicesList([...servicesList, getEmptyService(orgId)]);
    setServicesListIndex(servicesList.length);
    goTo(panelsIdsMap.ServiceSettings);
  };

  const prepareMoveToServiceHandler = (serviceIndex: number) => () => {
    goTo(panelsIdsMap.ServiceSettings);
    setServicesListIndex(serviceIndex);
  };

  return (
    <Panel id={id}>
      <StyledPanelHeader>
        <PanelHeaderBack hideLabelOnVKCom hideLabelOnIOS onClick={goBack} />
        <Text>Список услуг</Text>
      </StyledPanelHeader>

      <StyledOrgSettingsModalContainer>
        <Button
          onClick={handleAddService}
          mode="primary"
          appearance="accent-invariable"
          style={{ maxWidth: "fit-content" }}
        >
          Добавить услугу
        </Button>
        {servicesList.map(({ name, id }, serviceIndex) => (
          <StyledServiceItemContainer key={id}>
            <Text style={{ background: "rgb(235,235,235,0.20)" }}>
              {name || "Тут будет название услуги, нажмите на значек шестеренки справа"}
            </Text>
            <StyledIconButton
              aria-label="Настройки"
              onClick={prepareMoveToServiceHandler(serviceIndex)}
            >
              <Icon20GearCircleFillGray
                style={{ color: "var(--vkui--color_accent_red)", padding: 0 }}
              />
            </StyledIconButton>

            <StyledIconButton
              aria-label="Удаление поля"
              onClick={prepareDeleteServiceHandler(serviceIndex)}
            >
              <Icon20TrashSimpleOutline
                style={{ color: "var(--vkui--color_accent_red)", padding: 0 }}
              />
            </StyledIconButton>
          </StyledServiceItemContainer>
        ))}
      </StyledOrgSettingsModalContainer>

      <ConfirmModal
        title="Удалить услугу?"
        description={servicesList[deletedItemIndexRef.current]?.name || ""}
        isOpen={isConfirmModalOpen}
        confirmButtonText="Удалить"
        onCancel={handleCancelDeleteService}
        onConfirm={handleConfirmDeleteService}
      />
    </Panel>
  );
});
