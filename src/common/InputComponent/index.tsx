import { FC, InputHTMLAttributes, ReactNode } from "react";
import { SIconSvg, SInput, SPicSvg, STextField, SWrapper } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  icon?: ReactNode;
  pic?: ReactNode[];
}

export const InputComponent: FC<InputProps> = (props) => {
  const { label, icon, pic, ...rest } = props;
  
  return (
    <SWrapper>
      {label && <STextField>{label}</STextField>}
      <STextField>
        {icon && <SIconSvg>{icon}</SIconSvg>}
        {pic && (
          <SPicSvg>
            {pic.map((el, index) => (
              <i key={index}>{el}</i>
            ))}
          </SPicSvg>
        )}
        <SInput data-icon={icon ? true : false} required {...rest} autoComplete="on"/>
      </STextField>
    </SWrapper>
  );
};
