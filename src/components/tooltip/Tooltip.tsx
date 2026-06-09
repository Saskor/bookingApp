import { Popover, type PopoverProps } from "@vkontakte/vkui";
import type { FC } from "react";

export const Tooltip: FC<PopoverProps> = ({
  children,
  content,
  trigger = ["click", "hover"],
  placement = "bottom",
}) => {
  return (
    <Popover trigger={trigger} placement={placement} content={content}>
      {children}
    </Popover>
  );
};
