import { Checkbox, Panel, PanelHeaderBack, type PanelProps, Text } from "@vkontakte/vkui";
import { observer } from "mobx-react";
import { useState, type FC } from "react";

import { InputField } from "components/inputField/InputField";
import { InpuTextAreaField } from "components/textAreaField/textAreaField";
import { nonExistentPositiveNumber } from "constants/shared";
import type { InternalHandlerServiceResponse } from "openapi/requests";
import { rootStore } from "store/rootStore";

import { useServicesPanelState } from "./hooks";
import { StyledOrgSettingsModalContainer, StyledPanelHeader } from "./styles";

export const ServiceSettingsPanel = observer<FC<PanelProps>>(({ id: activePanel }) => {
  const { servicesListIndex } = rootStore.orgSettingsStore;
  const {
    services: servicesList,
    setServices: setServicesList,
    saveServiceState,
  } = useServicesPanelState();

  const {
    id = 0,
    name = "",
    description = "",
    price = 0,
    durationMinutes = 0,
    reminderHours = 24,
    extraFieldLabel = "",
    extraFieldRequired = false,
  } = servicesList[servicesListIndex] || {};

  const { goBack } = rootStore.panelsStore;

  const isCreated = id > nonExistentPositiveNumber;

  const [isNameValid, setIsNameValid] = useState(true);
  const checkIsNameValid = (newValue: string) => {
    setIsNameValid(newValue.length > 0);
  };

  const [isDescriptionValid, setIsDescriptionValid] = useState(true);
  const checkIsDescriptionValid = (newValue: string) => {
    setIsDescriptionValid(newValue.length > 0);
  };

  const [isPriceValid, setIsPriceValid] = useState(true);
  const checkIsPriceValid = (newValue: string) => {
    setIsPriceValid(Number(newValue) >= 0);
  };

  const [isDurationValid, setIsDurationValid] = useState(true);
  const checkIsDurationValid = (newValue: string) => {
    setIsDurationValid(Number(newValue) > 0);
  };

  const [isReminderHoursValid, setIsReminderHoursValid] = useState(true);
  const checkIsReminderHoursValid = (newValue: string) => {
    setIsReminderHoursValid(Number(newValue) > 0);
  };

  const [isExtraFieldLabelValid, setIsExtraFieldLabelValid] = useState(true);
  const checkIsExtraFieldLabelValid = (newValue: string) => {
    setIsExtraFieldLabelValid(Number(newValue) > 0);
  };

  const setValues = (
    fieldName: keyof InternalHandlerServiceResponse,
    value: string | number | boolean
  ) => {
    servicesList[servicesListIndex] = { ...servicesList[servicesListIndex], [fieldName]: value };
    setServicesList([...servicesList]);
  };

  const handlePanelClose = () => {
    saveServiceState(servicesListIndex, isCreated ? id : undefined);
    goBack();
  };

  return (
    <Panel id={activePanel}>
      <StyledPanelHeader>
        <PanelHeaderBack hideLabelOnVKCom hideLabelOnIOS onClick={handlePanelClose} />
        <Text>Настройки услуги</Text>
      </StyledPanelHeader>

      <StyledOrgSettingsModalContainer style={{ gap: 0 }}>
        <InputField
          type="text"
          minWidth={310}
          isValid={isNameValid}
          checkIsValid={checkIsNameValid}
          id={"serviceName"}
          value={name}
          onChange={(newValue) => {
            setValues("name", newValue);
          }}
          placeholder={"Название услуги"}
          topLabel={"Название услуги"}
          bottomLabel={!isNameValid ? "Поле обязательно для заполнения" : ""}
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
          isValid={isDescriptionValid}
          checkIsValid={checkIsDescriptionValid}
          bottomLabel={!isDescriptionValid ? "Поле обязательно для заполнения" : ""}
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
          isValid={isPriceValid}
          checkIsValid={checkIsPriceValid}
          bottomLabel={!isPriceValid ? "Цена не может быть меньше 0 руб." : ""}
        />

        <InputField
          type="number"
          minWidth={310}
          isValid={isDurationValid}
          checkIsValid={checkIsDurationValid}
          id={"serviceDuration"}
          value={durationMinutes}
          onChange={(newValue) => {
            setValues("durationMinutes", newValue);
          }}
          topLabel={"Длительность услуги в минутах"}
          bottomLabel={!isDurationValid ? "Длительность услуги не может быть 0 минут" : ""}
        />

        <InputField
          type="number"
          minWidth={310}
          isValid={isReminderHoursValid}
          checkIsValid={checkIsReminderHoursValid}
          id={"serviceReminderHours"}
          value={reminderHours}
          onChange={(newValue) => {
            setValues("reminderHours", newValue);
          }}
          topLabel={"За сколько часов напоминать клиенту"}
          bottomLabel={
            !isDurationValid ? "Напоминание об услуге не может высылаться клиенту за 0 часов" : ""
          }
        />

        <Checkbox
          style={{ maxWidth: "fit-content" }}
          checked={extraFieldRequired}
          onChange={(event) => {
            setValues("extraFieldRequired", event.target.checked);
          }}
        >
          Клиент обязан заполнить дополнительные данные чтобы записаться
        </Checkbox>

        {extraFieldRequired && (
          <InpuTextAreaField
            minWidth={310}
            value={extraFieldLabel}
            onChange={(newValue) => {
              setValues("extraFieldLabel", newValue);
            }}
            id={"extraFieldLabel"}
            placeholder="Описание данных"
            topLabel={"Описание данных, заполняемых клиентом перед записью"}
            isValid={isExtraFieldLabelValid}
            checkIsValid={checkIsExtraFieldLabelValid}
            bottomLabel={
              !isExtraFieldLabelValid && extraFieldRequired
                ? "Описание данных для заполнения клиентом не может содержать 0 символов"
                : ""
            }
          />
        )}
      </StyledOrgSettingsModalContainer>
    </Panel>
  );
});
