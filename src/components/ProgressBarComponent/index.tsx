import { FC } from "react";
import { StyledProgressBar, StyledProgressCircle, StyledIconSvg, StyledThumb, StyledWrapper } from "./styles";

export interface ProgressBarProps {
  progress: number;
}

export const ProgressBarComponent: FC<ProgressBarProps> = ({ progress }) => {
  return (
    <StyledWrapper>
      <StyledProgressBar>
        {Array.from({ length: 4 }, (_, index) => (
          <StyledProgressCircle key={index}>
            <StyledThumb key={index} data-progress={progress > index}>
              {progress > index ? <StyledIconSvg /> : index + 1}
            </StyledThumb>
          </StyledProgressCircle>
        ))}
      </StyledProgressBar>
    </StyledWrapper>
  );
};
