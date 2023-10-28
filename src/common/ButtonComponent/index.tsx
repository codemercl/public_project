import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { SButton } from "./styles";

export enum ButtonType {
  Submit = "submit",
  Link = "link",
  Flat = "flat"
}

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  variant: ButtonType;
  title?: string;
}

export const ButtonComponent: FC<IButton> = ({
  icon,
  variant,
  title,
  ...props
}) => (
  <SButton data-variant={variant} {...props}>
    {icon || title}
  </SButton>
);
