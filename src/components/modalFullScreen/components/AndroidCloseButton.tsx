import { PanelHeaderClose } from "@vkontakte/vkui";

export const AndroidCloseButton = ({ className, onClick }: React.ComponentProps<"div">) => {
  return <PanelHeaderClose className={className} onClick={onClick} />;
};
