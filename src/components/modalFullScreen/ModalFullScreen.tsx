import React, { type FC } from "react";
import {
  ModalPage,
  ModalPageHeader,
  useAdaptivityConditionalRender,
  usePlatform,
} from "@vkontakte/vkui";
import { AndroidCloseButton } from "./components/AndroidCloseButton";
import { IosCloseButton } from "./components/IosCloseButton";
import type { IModalFullScreenProps } from "./types";

export const ModalFullScreen: FC<IModalFullScreenProps> = ({
  id,
  isOpen,
  close,
  title,
  children,
}) => {
  const platform = usePlatform();
  const { viewWidth } = useAdaptivityConditionalRender();

  return (
    <ModalPage
      id={id}
      open={isOpen}
      settlingHeight={100}
      hideCloseButton={platform === "ios"}
      header={
        <ModalPageHeader
          before={
            viewWidth.tabletMinus &&
            platform === "android" && (
              <AndroidCloseButton className={viewWidth.tabletMinus.className} onClick={close} />
            )
          }
          after={platform === "ios" && <IosCloseButton onClick={close} />}
        >
          {title}
        </ModalPageHeader>
      }
    >
      {children}
    </ModalPage>
  );
};
