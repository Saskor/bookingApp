export interface IInputFieldProps {
  topLabel?: string;
  bottomLabel?: string;
  id: string;
  value: string | number;
  onChange: (newValue: string) => void;
  isValid?: boolean;
  checkIsValid?: (newValue: string) => void;
  required?: boolean;
  placeholder?: string;
  type?: string;
  minWidth?: number;
  maxWidth?: number;
}
