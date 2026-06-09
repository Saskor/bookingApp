import { useState, type ChangeEventHandler, type FC } from "react";
import { Icon24Dismiss } from "@vkontakte/icons";
import { FormItem, IconButton, Textarea } from "@vkontakte/vkui";
import type { ITextAreaFieldProps } from "./types";

export const InpuTextAreaField: FC<ITextAreaFieldProps> = ({
  id,
  topLabel,
  bottomLabel = "",
  value,
  onChange,
  isValid,
  checkIsValid,
  required = false,
  placeholder,
  minWidth,
}) => {
  const [isTouched, setIsTouched] = useState(false);

  const handleBlur = () => {
    setIsTouched(true);
    checkIsValid?.(value);
  };

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    onChange(event.target.value);

    if (isTouched && !isValid) {
      checkIsValid?.(event.target.value);
    }
  };

  return (
    <FormItem
      // @ts-expect-error
      css={{ [`.vkuiFormItem__label`]: { whiteSpace: "initial", textOverflow: "initial" } }}
      style={{ minWidth: minWidth || 290 }}
      top={topLabel}
      htmlFor={id}
      bottom={bottomLabel}
      bottomId={`${id}Id`}
      status={isValid === false ? "error" : "default"}
      required={required}
    >
      <Textarea
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        after={
          value.length > 0 && (
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
