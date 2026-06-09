import { observer } from "mobx-react";
import { Text } from "@vkontakte/vkui";
import { rootStore } from "store/rootStore";
import { modalsIdsMap } from "../constants";
import { ModalFullScreen } from "components/modalFullScreen/ModalFullScreen";
import { StyledOrgSettingsModalContainer } from "./styles";
import { InputField } from "components/inputField/InputField";
import { useState } from "react";
import type { IService } from "store/orgSettingsModalStore/types";
import { InpuTextAreaField } from "components/textAreaField/textAreaField";

export const ServiceSettingsModal = observer(() => {
  const { servicesList, setServicesList, servicesListIndex } = rootStore.orgSettingsModalStore;
  const { removeLastModal, modalsStack } = rootStore.modalsStore;

  const { name, description, price, durationMinutes } = servicesList[servicesListIndex];

  const isOpen =
    modalsStack.length > 0 && modalsStack.slice(-1)[0] === modalsIdsMap.ServiceSettingsModal;
  const close = () => {
    if (isOpen) {
      removeLastModal();
    }
  };

  const [isServiceNameFieldValid, setIsServiceNameFieldValid] = useState(true);
  const [isServiceDescriptionFieldValid, setIsServiceDescriptionFieldValid] = useState(true);
  const [isServiceDurationFieldValid, setIsServiceDurationFieldValid] = useState(true);

  const checkIsServiceNameFieldValid = (newServiceName: string) => {
    setIsServiceNameFieldValid(newServiceName.length !== 0);
  };

  const checkIsServiceDescriptionFieldValid = (newServiceDescription: string) => {
    setIsServiceDescriptionFieldValid(newServiceDescription.length !== 0);
  };
  const checkIsServiceDurationFieldValid = (newServiceDuration: string) => {
    setIsServiceDurationFieldValid(Number(newServiceDuration) !== 0);
  };

  const setValues = (fieldName: keyof IService, value: string | number) => {
    servicesList[servicesListIndex] = { ...servicesList[servicesListIndex], [fieldName]: value };
    setServicesList([...servicesList]);
  };

  return (
    <ModalFullScreen
      id={modalsIdsMap.ServiceSettingsModal}
      isOpen={isOpen}
      close={close}
      title={<Text>Настройки услуги</Text>}
    >
      <StyledOrgSettingsModalContainer style={{ gap: 0 }}>
        <InputField
          minWidth={310}
          isValid={isServiceNameFieldValid}
          checkIsValid={checkIsServiceNameFieldValid}
          id={"serviceName"}
          value={name}
          onChange={(newValue) => {
            setValues("name", newValue);
          }}
          placeholder={"Название услуги"}
          topLabel={"Название услуги"}
          bottomLabel={!isServiceNameFieldValid ? "Поле обязательно для заполнения" : ""}
        />
        <InpuTextAreaField
          minWidth={310}
          value={description}
          onChange={(newValue) => {
            setValues("description", newValue);
          }}
          id={"serviceDescription"}
          placeholder={"Введите описание услуги"}
          topLabel={"Описание услуги для клиента"}
          isValid={isServiceDescriptionFieldValid}
          checkIsValid={checkIsServiceDescriptionFieldValid}
          bottomLabel={!isServiceDescriptionFieldValid ? "Поле обязательно для заполнения" : ""}
        />
        <InputField
          type="number"
          minWidth={310}
          id={"servicePrice"}
          value={price}
          onChange={(newValue) => {
            setValues("price", newValue);
          }}
          topLabel={"Цена услуги"}
        />
        <InputField
          type="number"
          minWidth={310}
          isValid={isServiceDurationFieldValid}
          checkIsValid={checkIsServiceDurationFieldValid}
          id={"serviceDuration"}
          value={durationMinutes}
          onChange={(newValue) => {
            setValues("durationMinutes", newValue);
          }}
          topLabel={"Длительность услуги в минутах"}
          bottomLabel={
            !isServiceDurationFieldValid ? "Длительность услуги не может быть 0 минут" : ""
          }
        />
      </StyledOrgSettingsModalContainer>
    </ModalFullScreen>
  );
});
