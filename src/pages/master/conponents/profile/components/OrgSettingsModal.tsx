import { Button, Text } from "@vkontakte/vkui";
import { InputField } from "components/inputField/InputField";
import { ModalFullScreen } from "components/modalFullScreen/ModalFullScreen";
import { observer } from "mobx-react";
import { rootStore } from "store/rootStore";
import { StyledOrgSettingsModalContainer } from "./styles";
import { useState } from "react";
import { modalsIdsMap } from "../constants";

export const OrgSettingsModal = observer(() => {
  const { orgName, changeOrgName, reminderHours, setReminderHours } =
    rootStore.orgSettingsModalStore;
  const { addNewModal, removeLastModal, modalsStack } = rootStore.modalsStore;

  const isOpen =
    modalsStack.length > 0 && modalsStack.slice(-1)[0] === modalsIdsMap.OrgSettingsModal;
  const close = () => {
    if (isOpen) {
      removeLastModal();
    }
  };

  const [isOrgNameFieldValid, setIsOrgNameFieldValid] = useState(true);
  const checkIsOrgNameFieldValid = (newOrgName: string) => {
    setIsOrgNameFieldValid(newOrgName.length !== 0);
  };

  const [isReminderHoursFieldValid, setIsReminderHoursFieldValid] = useState(true);

  const checkIsReminderHoursFieldValid = (newReminderHours: string) => {
    setIsReminderHoursFieldValid(Number(newReminderHours) !== 0);
  };

  return (
    <ModalFullScreen
      id={modalsIdsMap.OrgSettingsModal}
      isOpen={isOpen}
      close={close}
      title={<Text>Настройки организации</Text>}
    >
      <StyledOrgSettingsModalContainer>
        <InputField
          minWidth={310}
          isValid={isOrgNameFieldValid}
          checkIsValid={checkIsOrgNameFieldValid}
          id={"orgName"}
          value={orgName}
          onChange={changeOrgName}
          placeholder={"Название организации"}
          topLabel="Название организации"
          bottomLabel={!isOrgNameFieldValid ? "Поле обязательно для заполнения" : ""}
        />
        <Button
          onClick={() => addNewModal(modalsIdsMap.PhonesListModal)}
          mode="primary"
          appearance="accent-invariable"
          style={{ maxWidth: "fit-content" }}
        >
          Редактировать список телефонов
        </Button>

        <Button
          onClick={() => addNewModal(modalsIdsMap.WebLinksModal)}
          mode="primary"
          appearance="accent-invariable"
          style={{ padding: "2px 0" }}
        >
          <div style={{ whiteSpace: "normal", maxHeight: 60 }}>
            Редактировать cсылки в соцсетях и месенджерах
          </div>
        </Button>

        <Button
          onClick={() => addNewModal(modalsIdsMap.ServicesModal)}
          mode="primary"
          appearance="accent-invariable"
        >
          <div style={{ whiteSpace: "normal" }}>Редактировать список услуг</div>
        </Button>

        <Button
          // onClick={() => addNewModal(modalsIdsMap.WebLinksModal)}
          mode="primary"
          appearance="accent-invariable"
        >
          <div style={{ whiteSpace: "normal" }}>Редактировать список мастеров</div>
        </Button>

        <InputField
          type="number"
          minWidth={310}
          isValid={isReminderHoursFieldValid}
          checkIsValid={checkIsReminderHoursFieldValid}
          id={"reminderHours"}
          value={reminderHours}
          onChange={(newValue) => {
            setReminderHours(Number(newValue));
          }}
          topLabel={"За сколько часов уведомлять клиента об услуге"}
          bottomLabel={
            !isReminderHoursFieldValid ? "Клиент не может быть уведомлен за 0 часов" : ""
          }
        />
      </StyledOrgSettingsModalContainer>
    </ModalFullScreen>
  );
});
