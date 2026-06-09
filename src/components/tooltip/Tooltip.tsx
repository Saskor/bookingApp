import { Popover, type PopoverProps } from "@vkontakte/vkui";
import type { FC } from "react";
import type { ITooltipProps } from "./types";

export const Tooltip: FC<ITooltipProps> = ({
  children,
  content,
}: {
  children: PopoverProps["children"];
  content: PopoverProps["content"];
}) => {
  return (
    <Popover
      trigger={["click", "hover"]}
      placement="bottom"
      role="tooltip"
      aria-describedby="tooltip-1"
      content={content}
    >
      {children}
    </Popover>
  );
};
