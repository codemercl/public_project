import { FC } from "react";
import { StyledContainer, StyledText } from "./styles";

interface SpoilerProps {
  title: string;
}

export const SpoilerComponent: FC<SpoilerProps> = ({ title }) => {
  return (
    <StyledContainer>
      <StyledText>{title}</StyledText>
    </StyledContainer>
  );
};
