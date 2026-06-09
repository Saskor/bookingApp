import { Icon24Dismiss } from "@vkontakte/icons";
import { PanelHeaderButton } from "@vkontakte/vkui";

export const IosCloseButton = ({ className, onClick }: React.ComponentProps<"div">) => {
  return (
    <PanelHeaderButton onClick={onClick} className={className}>
      <Icon24Dismiss />
    </PanelHeaderButton>
  );
};
