import { FC, LabelHTMLAttributes } from "react";
import { SLabel } from "./styles";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  title: string;
  name: string;
}

export const LabelComponent: FC<LabelProps> = ({ name, title, ...props }) => {
  return <SLabel htmlFor={name} {...props}>{title}:</SLabel>;
};
