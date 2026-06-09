import { ModalFullScreen } from "components/modalFullScreen/ModalFullScreen";
import { Text } from "@vkontakte/vkui";
import { InputField } from "components/inputField/InputField";
import { StyledOrgSettingsModalContainer } from "./styles";
import { observer } from "mobx-react";
import { rootStore } from "store/rootStore";
import { modalsIdsMap } from "../constants";

export const WebLinksModal = observer(() => {
  const { webLinks, setWebLinks } = rootStore.orgSettingsModalStore;
  const { removeLastModal, modalsStack } = rootStore.modalsStore;

  const isOpen = modalsStack.length > 0 && modalsStack.slice(-1)[0] === modalsIdsMap.WebLinksModal;
  const close = () => {
    if (isOpen) {
      removeLastModal();
    }
  };

  return (
    <ModalFullScreen
      id="webLinksModal"
      isOpen={isOpen}
      close={close}
      title={<Text>Ссылки в соцсетях и месенджерах</Text>}
    >
      <StyledOrgSettingsModalContainer>
        <InputField
          key={webLinks.vkLinks[0].id}
          topLabel="Ссылка на сообщество в VK"
          minWidth={310}
          type="text"
          id="vk"
          value={webLinks.vkLinks[0].href}
          onChange={(newValue) => {
            setWebLinks({
              ...webLinks,
              vkLinks: [{ href: newValue, id: webLinks.vkLinks[0].id }],
            });
          }}
          placeholder={"https://vk.ru/"}
        />

        <InputField
          key={webLinks.tgLinks[0].id}
          topLabel="Ссылка на канал в Telegram"
          minWidth={310}
          type="text"
          id="vk"
          value={webLinks.tgLinks[0].href}
          onChange={(newValue) => {
            setWebLinks({
              ...webLinks,
              tgLinks: [{ href: newValue, id: webLinks.tgLinks[0].id }],
            });
          }}
          placeholder={"https://t.me/"}
        />

        <InputField
          key={webLinks.maxLinks[0].id}
          topLabel="Ссылка на канал в MAX"
          minWidth={310}
          type="text"
          id="max"
          value={webLinks.maxLinks[0].href}
          onChange={(newValue) => {
            setWebLinks({
              ...webLinks,
              maxLinks: [{ href: newValue, id: webLinks.maxLinks[0].id }],
            });
          }}
          placeholder={"https://max.ru/"}
        />

        <InputField
          key={webLinks.webLinks[0].id}
          topLabel="Ссылка на сайт"
          minWidth={310}
          type="text"
          id="web"
          value={webLinks.webLinks[0].href}
          onChange={(newValue) => {
            setWebLinks({
              ...webLinks,
              webLinks: [{ href: newValue, id: webLinks.webLinks[0].id }],
            });
          }}
          placeholder={"https://mysite.ru/"}
        />
      </StyledOrgSettingsModalContainer>
    </ModalFullScreen>
  );
});
