import { Icon16Chevron, Icon16Dropdown, Icon16InfoOutline } from "@vkontakte/icons";
import { ITreeDataItem } from "components/navTree/types";
import { NodeRendererProps } from "react-arborist";
import { StyledNodeContainer } from "./styles";
import { IconButton } from "@vkontakte/vkui";
import { Tooltip } from "components/tooltip/Tooltip";
import { TooltipContent } from "./components/TooltipContent";

export const Node = ({ node, style }: NodeRendererProps<ITreeDataItem>) => {
  const isLeafNode = node.data.children.length === 0;

  return (
    <StyledNodeContainer style={style} onClick={() => node.toggle()}>
      {!isLeafNode && (node.isOpen ? <Icon16Dropdown /> : <Icon16Chevron />)}
      {isLeafNode ? "" : <span>{"🗀"}</span>}
      {isLeafNode ? (
        <Tooltip content={<TooltipContent />}>
          <IconButton style={{ height: 16 }} aria-label="Превью записи">
            <Icon16InfoOutline
              style={{ color: "var(--vkui--color_accent_azure--hover)", padding: 0 }}
            />
          </IconButton>
        </Tooltip>
      ) : null}
      {node.data.data.label}
    </StyledNodeContainer>
  );
};
