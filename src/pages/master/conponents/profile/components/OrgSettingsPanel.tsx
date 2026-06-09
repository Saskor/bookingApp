import { Button, Panel, Text, type PanelProps } from "@vkontakte/vkui";
import { observer } from "mobx-react";
import { useState, type FC } from "react";

import { InputField } from "components/inputField/InputField";
import { rootStore } from "store/rootStore";

import { panelsIdsMap } from "../constants";

import { useOrgSettingsPanelState } from "./hooks";
import { StyledOrgSettingsModalContainer } from "./styles";

export const OrgSettingsPanel = observer<FC<PanelProps>>(({ id }) => {
  const { orgName, setOrgName, reminderHours, setReminderHours, saveState } =
    useOrgSettingsPanelState();

  const { goTo, goBack } = rootStore.panelsStore;

  const [isOrgNameFieldValid, setIsOrgNameFieldValid] = useState(true);
  const checkIsOrgNameFieldValid = (newOrgName: string) => {
    setIsOrgNameFieldValid(newOrgName.length !== 0);
  };

  const [isReminderHoursFieldValid, setIsReminderHoursFieldValid] = useState(true);
  const checkIsReminderHoursFieldValid = (newReminderHours: string) => {
    setIsReminderHoursFieldValid(Number(newReminderHours) !== 0);
  };

  return (
    <Panel id={id}>
      <StyledOrgSettingsModalContainer>
        <InputField
          minWidth={310}
          isValid={isOrgNameFieldValid}
          checkIsValid={checkIsOrgNameFieldValid}
          id={"orgName"}
          value={orgName}
          onChange={setOrgName}
          placeholder={"Название организации"}
          topLabel="Название организации"
          bottomLabel={!isOrgNameFieldValid ? "Поле обязательно для заполнения" : ""}
        />
        <Button
          onClick={() => goTo(panelsIdsMap.PhonesList)}
          mode="primary"
          appearance="accent-invariable"
          style={{ maxWidth: "fit-content" }}
        >
          Редактировать список телефонов
        </Button>

        <Button
          onClick={() => goTo(panelsIdsMap.WebLinks)}
          mode="primary"
          appearance="accent-invariable"
          style={{ padding: "2px 0" }}
        >
          <div style={{ whiteSpace: "normal", maxHeight: 60 }}>
            Редактировать cсылки в соцсетях и месенджерах
          </div>
        </Button>

        <Button
          onClick={() => goTo(panelsIdsMap.Services)}
          mode="primary"
          appearance="accent-invariable"
        >
          <div style={{ whiteSpace: "normal" }}>Редактировать список услуг</div>
        </Button>

        <Text>Редактировать список филиалов</Text>

        <Text>Редактировать список ролей пользователей</Text>

        <Text>Редактировать список специалистов</Text>

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
    </Panel>
  );
});
