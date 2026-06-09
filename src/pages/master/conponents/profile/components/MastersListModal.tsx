import { observer } from "mobx-react";
import { Button, IconButton, Text } from "@vkontakte/vkui";
import { rootStore } from "store/rootStore";
import { modalsIdsMap } from "../constants";
import type { IServicesListModalProps } from "./types";
import { ModalFullScreen } from "components/modalFullScreen/ModalFullScreen";
import type { FC } from "react";
import { StyledOrgSettingsModalContainer, StyledServiceItemContainer } from "./styles";
import { Icon20GearCircleFillGray, Icon20TrashSimpleOutline } from "@vkontakte/icons";
import { getEmptyService } from "store/orgSettingsModalStore/utils";

export const MastersListModal = observer<FC<IServicesListModalProps>>(({ isBranch }) => {
  const { servicesList, setServicesList, setServicesListIndex, resetServicesList } =
    rootStore.orgSettingsModalStore;
  const { addNewModal, removeLastModal, modalsStack } = rootStore.modalsStore;

  const isOpen = modalsStack.length > 0 && modalsStack.slice(-1)[0] === modalsIdsMap.ServicesModal;
  const close = () => {
    if (isOpen) {
      removeLastModal();
    }
  };

  return (
    <ModalFullScreen
      id={modalsIdsMap.ServicesModal}
      isOpen={isOpen}
      close={close}
      title={<Text>{`Услуги ${isBranch ? "филиала" : ""} организации`}</Text>}
    >
      <StyledOrgSettingsModalContainer>
        <Button
          onClick={() => setServicesList([...servicesList, getEmptyService()])}
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
            <IconButton
              style={{
                width: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Настройки"
              onClick={() => {
                addNewModal(modalsIdsMap.ServiceSettingsModal);
                setServicesListIndex(serviceIndex);
              }}
            >
              <Icon20GearCircleFillGray
                style={{ color: "var(--vkui--color_accent_red)", padding: 0 }}
              />
            </IconButton>

            <IconButton
              style={{
                width: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Удаление поля"
              onClick={() => {
                if (serviceIndex !== 0) {
                  setServicesList(
                    servicesList.filter(
                      (_, deletedServiceFieldIndex) => deletedServiceFieldIndex !== serviceIndex
                    )
                  );
                } else {
                  resetServicesList();
                }

                setServicesListIndex(0);
              }}
            >
              <Icon20TrashSimpleOutline
                style={{ color: "var(--vkui--color_accent_red)", padding: 0 }}
              />
            </IconButton>
          </StyledServiceItemContainer>
        ))}
      </StyledOrgSettingsModalContainer>
    </ModalFullScreen>
  );
});
