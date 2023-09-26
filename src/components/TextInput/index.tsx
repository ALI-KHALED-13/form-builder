
import { icons } from "../../utils/icons";

import {
  StyledError,
  StyledInput,
  StyledInputContainer,
  StyledInputNote,
  StyledLabel,
} from "./styled";
import { IconProps } from "@phosphor-icons/react";

interface InputProps {
  value: string;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  onBlur?: (evt: React.FocusEvent<HTMLInputElement>)=> void;
  onFocus?: (evt: React.FocusEvent<HTMLInputElement>)=> void;
  onKeyUp?: (evt: React.KeyboardEvent)=> void
  readonly?: boolean;
  type?: string;
  id?: string;
  name?: string;
  icon?: {
    name: string;
    props?: IconProps;
  };
  //iconOnClick?: React.MouseEventHandler<HTMLOrSVGElement>;
  placeholder?: string;
  autoFocus?: boolean;
  maxLength?: number;
  required?: boolean;
  style?: React.CSSProperties;
  error?: string;
  note?: string;
  //iconStyle?: React.CSSProperties;
  isTextarea?: boolean;
  rows?: number;
  cols?: number;
  maxlength?: number;
}

export const TextInput =({
  value,
  onChange,
  label,
  onBlur,
  onFocus,
  onKeyUp,
  note,
  placeholder,
  autoFocus,
  style,
  maxLength,
  icon,
  /*iconStyle = {},
  iconOnClick,*/
  type = "text",
  id,
  name,
  readonly,
  required = true,
  error,
  isTextarea = false,
  rows,
  cols,
}: InputProps)=> {
  const DisplayIcon = icon && icons[icon.name as keyof (typeof icons)];

  return (
    <StyledLabel style={style}>
      {label}
      {(note || required === false) && !readonly && (
        <StyledInputNote>{note} {required === false && " (optional)"}</StyledInputNote>
      )}

      <StyledInputContainer error={error} readonly={readonly} >
        {DisplayIcon && (
          <DisplayIcon
            size={26}
            weight="bold"
            {...(icon.props? icon.props : {})}
          />
        )}
        <StyledInput
          type={type}
          value={value}
          onChange={onChange}
          placeholder={readonly? "":placeholder}
          required={required}
          readOnly={readonly}
          autoFocus={autoFocus}
          name={name}
          onKeyUp={onKeyUp}
          id={id}
          maxLength={maxLength}
          onBlur={onBlur}
          onFocus={onFocus}
          {...isTextarea
            ? {as: "textarea", rows: rows, cols: cols}
          : {as: "input"}}
        />
      </StyledInputContainer>
      {error && <StyledError>{error}</StyledError>}
    </StyledLabel>
  );
}




