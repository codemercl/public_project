import { FC, ReactNode } from "react";
import { StyledGrid, StyledTemplate } from "./styles";

interface TemplateProps {
  header: ReactNode;
  progress: ReactNode;
  content: ReactNode;
}

export const Template: FC<TemplateProps> = (props) => {
  const { header, progress, content } = props;

  return (
    <StyledTemplate>
      {header}
      {progress}
      <StyledGrid>{content}</StyledGrid>
    </StyledTemplate>
  );
};
