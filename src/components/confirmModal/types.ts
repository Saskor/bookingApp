import type { AlertProps, ModalCardProps } from "@vkontakte/vkui";

export interface IConfirmModalProps extends Omit<AlertProps, "onClose"> {
  isOpen: boolean;
  confirmButtonText?: string;
  cancelButtonText?: string;
  onConfirm: VoidFunction;
  onCancel: VoidFunction;
}
