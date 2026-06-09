import { useState, type ChangeEventHandler, type FC } from "react";
import { Icon24Dismiss } from "@vkontakte/icons";
import { FormItem, IconButton, Input } from "@vkontakte/vkui";
import type { IInputFieldProps } from "./types";

export const InputField: FC<IInputFieldProps> = ({
  id,
  topLabel,
  bottomLabel = "",
  value,
  onChange,
  isValid,
  checkIsValid,
  required = false,
  placeholder,
  type,
  minWidth,
}) => {
  const [isTouched, setIsTouched] = useState(false);

  const handleBlur = () => {
    setIsTouched(true);
    checkIsValid?.(String(value));
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange(event.target.value);

    if (isTouched) {
      checkIsValid?.(event.target.value);
    }
  };

  return (
    <FormItem
      style={{ minWidth: minWidth || 290 }}
      top={topLabel}
      htmlFor={id}
      bottom={bottomLabel}
      bottomId={`${id}Id`}
      status={isValid === false ? "error" : "default"}
      required={required}
    >
      <Input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        value={type !== "number" ? value : Number(value).toString()}
        onChange={handleChange}
        onBlur={handleBlur}
        after={
          // type !== "number" &&
          // typeof value === "string" &&
          String(value).length > 0 && (
            <IconButton aria-label="Удаление значения" onClick={() => onChange("")}>
              <Icon24Dismiss
                style={{ color: "var(--vkui--color_accent_azure--hover)", padding: 0 }}
              />
            </IconButton>
          )
        }
      />
    </FormItem>
  );
};
