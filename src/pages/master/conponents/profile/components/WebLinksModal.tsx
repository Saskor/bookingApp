import { Panel, PanelHeaderBack, Text, type PanelProps } from "@vkontakte/vkui";
import { observer } from "mobx-react";
import type { FC } from "react";

import { InputField } from "components/inputField/InputField";
import { rootStore } from "store/rootStore";

import { panelsIdsMap } from "../constants";

import { useWebLinksPanelState } from "./hooks";
import { StyledOrgSettingsModalContainer, StyledPanelHeader } from "./styles";

export const WebLinksPanel = observer<FC<PanelProps>>(({ id }) => {
  const { webLinks, setWebLinks, saveState } = useWebLinksPanelState();
  const { goBack, navHistory } = rootStore.panelsStore;

  const isOpen = navHistory.length > 0 && navHistory.slice(-1)[0] === panelsIdsMap.WebLinks;

  const handlePanelClose = () => {
    if (isOpen) {
      saveState();
      goBack();
    }
  };

  return (
    <Panel id={id}>
      <StyledPanelHeader>
        <PanelHeaderBack hideLabelOnVKCom hideLabelOnIOS onClick={handlePanelClose} />
        <Text>Ссылки в соцсетях и месенджерах</Text>
      </StyledPanelHeader>

      <StyledOrgSettingsModalContainer>
        <InputField
          key={webLinks.vkLinks[0].id}
          topLabel="Ссылка на сообщество в VK"
          minWidth={310}
          type="text"
          id="vk"
          value={webLinks.vkLinks[0].value}
          onChange={(newValue) => {
            setWebLinks({
              ...webLinks,
              vkLinks: [{ value: newValue, id: webLinks.vkLinks[0].id }],
            });
          }}
          placeholder={"https://vk.ru/"}
        />

        <InputField
          key={webLinks.tgLinks[0].id}
          topLabel="Ссылка на канал в Telegram"
          minWidth={310}
          type="text"
          id="tg"
          value={webLinks.tgLinks[0].value}
          onChange={(newValue) => {
            setWebLinks({
              ...webLinks,
              tgLinks: [{ value: newValue, id: webLinks.tgLinks[0].id }],
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
          value={webLinks.maxLinks[0].value}
          onChange={(newValue) => {
            setWebLinks({
              ...webLinks,
              maxLinks: [{ value: newValue, id: webLinks.maxLinks[0].id }],
            });
          }}
          placeholder={"https://max.ru/"}
        />

        <InputField
          key={webLinks.websiteLinks[0].id}
          topLabel="Ссылка на сайт"
          minWidth={310}
          type="text"
          id="web"
          value={webLinks.websiteLinks[0].value}
          onChange={(newValue) => {
            setWebLinks({
              ...webLinks,
              websiteLinks: [{ value: newValue, id: webLinks.websiteLinks[0].id }],
            });
          }}
          placeholder={"https://mysite.ru/"}
        />
      </StyledOrgSettingsModalContainer>
    </Panel>
  );
});
