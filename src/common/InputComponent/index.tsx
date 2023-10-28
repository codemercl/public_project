import { FC, InputHTMLAttributes, ReactNode } from "react";
import { SError, SIconSvg, SInput, SPicSvg, STextField, SWrapper } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  icon?: ReactNode;
  pic?: ReactNode[];
  isEmpty?: boolean;
}

export const InputComponent: FC<InputProps> = (props) => {
  const { label, icon, pic, isEmpty, ...rest } = props;
  
  return (
    <SWrapper>
      {label && <STextField>{label}</STextField>}
      {isEmpty && <SError>Required</SError>}
      <STextField>
        {icon && <SIconSvg>{icon}</SIconSvg>}
        {pic && (
          <SPicSvg>
            {pic.map((el, index) => (
              <i key={index}>{el}</i>
            ))}
          </SPicSvg>
        )}
        <SInput data-icon={icon ? true : false} {...rest} autoComplete="on"/>
      </STextField>
    </SWrapper>
  );
};
