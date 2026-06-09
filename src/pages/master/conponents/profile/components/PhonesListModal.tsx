import { ModalFullScreen } from "components/modalFullScreen/ModalFullScreen";
import { Tooltip } from "components/tooltip/Tooltip";
import { Button, IconButton, Text } from "@vkontakte/vkui";
import { Icon20TrashSimpleOutline, Icon20InfoCircleOutline } from "@vkontakte/icons";
import { InputField } from "components/inputField/InputField";
import { StyledOrgSettingsModalContainer, StyledPhoneInputFieldContainer } from "./styles";
import { observer } from "mobx-react";
import { rootStore } from "store/rootStore";
import { uuidv4 } from "utils/uuid";
import { modalsIdsMap } from "../constants";
import { getEmptyPhone } from "store/orgSettingsModalStore/utils";

export const PhonesListModal = observer(() => {
  const { phonesList, setPhonesList } = rootStore.orgSettingsModalStore;
  const { removeLastModal, modalsStack } = rootStore.modalsStore;

  const isOpen =
    modalsStack.length > 0 && modalsStack.slice(-1)[0] === modalsIdsMap.PhonesListModal;
  const close = () => {
    if (isOpen) {
      removeLastModal();
    }
  };

  return (
    <ModalFullScreen
      id={modalsIdsMap.PhonesListModal}
      isOpen={isOpen}
      close={close}
      title={<Text>Контактные телефоны организации</Text>}
    >
      <StyledOrgSettingsModalContainer>
        <Button
          onClick={() => setPhonesList([...phonesList, getEmptyPhone()])}
          mode="primary"
          appearance="accent-invariable"
          style={{ maxWidth: "fit-content" }}
        >
          Добавить телефон
        </Button>
        {phonesList.map(({ phone, id }, phoneIndex) => (
          <StyledPhoneInputFieldContainer key={id}>
            <InputField
              type="tel"
              id={id}
              value={phone}
              onChange={(newPhone) => {
                setPhonesList(
                  phonesList.map(({ phone: oldPhone, id }, changedPhoneIndex) => ({
                    phone: changedPhoneIndex === phoneIndex ? newPhone : oldPhone,
                    id,
                  }))
                );
              }}
              placeholder={"Телефон организации"}
            />
            <IconButton
              style={{
                width: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Удаление поля"
              onClick={() =>
                setPhonesList(
                  phonesList.filter(
                    (_, deletedPhoneFieldIndex) => deletedPhoneFieldIndex !== phoneIndex
                  )
                )
              }
            >
              <Icon20TrashSimpleOutline
                style={{ color: "var(--vkui--color_accent_red)", padding: 0 }}
              />
            </IconButton>
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
    </ModalFullScreen>
  );
});
