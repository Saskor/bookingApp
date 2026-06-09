export interface ITextAreaFieldProps {
  topLabel?: string;
  bottomLabel?: string;
  id: string;
  value: string;
  onChange: (newValue: string) => void;
  isValid?: boolean;
  checkIsValid?: (newValue: string) => void;
  required?: boolean;
  placeholder: string;
  minWidth?: number;
}
