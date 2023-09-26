import { useRef } from 'react';
import { StyledGhostButton, StyledPrimaryButton, StyledSecondaryButton } from './styled';

interface ButtonProps {
  children: string | React.ReactNode;
  color: string;
  as?: any;
  hoverColor?: string;
  disabled?: boolean;
  variant?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: React.CSSProperties;
  to?: string;
  type?: string;
}

const Button = ({
  as,
  children,
  color,
  hoverColor,
  disabled,
  variant = "primary",
  onClick,
  style,
  to,
  type = 'button'
}: ButtonProps) => {
  const buttonVariants = {
    "primary": StyledPrimaryButton,
    "secondary": StyledSecondaryButton,
    "ghost": StyledGhostButton
  }
  const ButtonVariant = buttonVariants[variant as keyof (typeof buttonVariants)] ;
  return (
    <ButtonVariant
      as={as}
      color={color}
      disabled={disabled}
      $hoverColor={hoverColor} // transient prop which is consumed only by styled components
      onClick={onClick}
      style={style}
      to={to}
      type={type}
    >
      {children}
    </ButtonVariant>
  );
};

export default Button;

interface UploadButtonProps {
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  accept?: string;
  multiple?: boolean;
  variant?: string;
  color: string;
  hoverColor?: string;
  children: string | React.ReactNode;
  style?: React.CSSProperties;
  disabled?: boolean;
  type?: string
}

export const UploadButton = ({
  onChange,
  accept,
  multiple,
  ...props
}:UploadButtonProps) => {
  const inputRef = useRef<null | HTMLInputElement>(null);

  const handleFileUpload = () => {
    inputRef.current?.click();
  };

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={onChange}
        style={{ display: "none" }}
      />
      <Button
        onClick={handleFileUpload}
        {...props}
      />
    </>
  );
}
