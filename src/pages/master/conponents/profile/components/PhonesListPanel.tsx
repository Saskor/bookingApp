import { Icon20TrashSimpleOutline, Icon20InfoCircleOutline } from "@vkontakte/icons";
import { Button, Panel, PanelHeaderBack, type PanelProps, Text } from "@vkontakte/vkui";
import { observer } from "mobx-react";
import { useCallback, useRef, useState, type FC } from "react";

import { ConfirmModal } from "components/confirmModal/ConfirmModal";
import { InputField } from "components/inputField/InputField";
import { Tooltip } from "components/tooltip/Tooltip";
import { rootStore } from "store/rootStore";

import { usePhonesListPanelState } from "./hooks";
import {
  StyledIconButton,
  StyledOrgSettingsModalContainer,
  StyledPanelHeader,
  StyledPhoneInputFieldContainer,
} from "./styles";
import { getIsPhonesListLastItemFullfilled } from "./utils";

export const PhonesListPanel = observer<FC<PanelProps>>(({ id }) => {
  const { phonesList, setPhonesList, getEmptyPhone, saveState } = usePhonesListPanelState();

  const { goBack } = rootStore.panelsStore;

  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const deletedItemIndexRef = useRef(0);

  const prepareDeletePhoneHandler = (phoneIndex: number) => () => {
    deletedItemIndexRef.current = phoneIndex;
    setIsConfirmModalOpen(true);
  };

  const handleConfirmDeletePhone = () => {
    setPhonesList(
      deletedItemIndexRef.current === 0
        ? [getEmptyPhone()]
        : phonesList.filter(
            (_, deletedPhoneFieldIndex) => deletedPhoneFieldIndex !== deletedItemIndexRef.current
          )
    );
  };

  const handleCancelDeletePhone = () => {
    setIsConfirmModalOpen(false);
  };

  const handleAddPhone = () =>
    setPhonesList([
      ...phonesList,
      ...(getIsPhonesListLastItemFullfilled(phonesList) ? [getEmptyPhone()] : []),
    ]);

  const prepareChangePhoneHandler = (phoneIndex: number) => (newPhone: string) => {
    setPhonesList(
      phonesList.map(({ value: oldPhone, id }, changedPhoneIndex) => ({
        value: changedPhoneIndex === phoneIndex ? newPhone : oldPhone,
        id,
      }))
    );
  };

  const handlePanelClose = useCallback(() => {
    saveState();
    goBack();
  }, [goBack, saveState]);

  return (
    <Panel id={id}>
      <StyledPanelHeader>
        <PanelHeaderBack hideLabelOnVKCom hideLabelOnIOS onClick={handlePanelClose} />
        <Text>Контактные телефоны организации</Text>
      </StyledPanelHeader>

      <StyledOrgSettingsModalContainer>
        <Button
          onClick={handleAddPhone}
          mode="primary"
          appearance="accent-invariable"
          style={{ maxWidth: "fit-content" }}
        >
          Добавить телефон
        </Button>
        {phonesList.map(({ value, id }, phoneIndex) => (
          <StyledPhoneInputFieldContainer key={id}>
            <InputField
              type="tel"
              id={id}
              value={value}
              onChange={prepareChangePhoneHandler(phoneIndex)}
              placeholder={"Телефон организации"}
              minWidth={250}
            />

            <StyledIconButton
              aria-label="Удаление поля"
              onClick={prepareDeletePhoneHandler(phoneIndex)}
            >
              <Icon20TrashSimpleOutline
                style={{ color: "var(--vkui--color_accent_red)", padding: 0 }}
              />
            </StyledIconButton>

            <Tooltip
              content={
                <>
                  <div>Можно вводить любое текстовое значение,</div>
                  <div>что введете, то и отобразится у клиента</div>
                </>
              }
            >
              <Icon20InfoCircleOutline
                style={{ color: "var(--vkui--color_accent__azure--hover)", padding: 0 }}
              />
            </Tooltip>
          </StyledPhoneInputFieldContainer>
        ))}
      </StyledOrgSettingsModalContainer>

      <ConfirmModal
        title="Удалить номер телефона?"
        description={phonesList[deletedItemIndexRef.current]?.value || ""}
        isOpen={isConfirmModalOpen}
        confirmButtonText="Удалить"
        onCancel={handleCancelDeletePhone}
        onConfirm={handleConfirmDeletePhone}
      />
    </Panel>
  );
});
