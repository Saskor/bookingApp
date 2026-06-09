import type { FC } from "react";
import { Alert, type AlertActionInterface, Text } from "@vkontakte/vkui";
import type { IConfirmModalProps } from "./types";

export const ConfirmModal: FC<IConfirmModalProps> = ({
  isOpen,
  confirmButtonText = "Подтвердить",
  cancelButtonText = "Отмена",
  onConfirm,
  onCancel,
  ...restProps
}) => {
  const actions: AlertActionInterface[] = [
    { title: cancelButtonText, mode: "cancel" },
    {
      title: confirmButtonText,
      mode: "destructive",
      action: onConfirm,
    },
  ];

  return (
    isOpen && (
      <Alert
        usePortal
        actions={actions}
        dismissLabel={cancelButtonText}
        onClose={onCancel}
        title={restProps.title ? <Text>{restProps.title}</Text> : undefined}
        description={restProps.description ? <Text>{restProps.description}</Text> : undefined}
      />
    )
  );
};
