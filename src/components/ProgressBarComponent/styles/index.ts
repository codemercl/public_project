import styled from "styled-components";
import DoneIcon from "assets/icons/system-icons/done";
import { configBarStyles } from "styles/variables.config";

const { container, backgroundBar, backgroundCirlce, sizeCirlceWidth, sizeCirlceHeight, sizeThumbWidth, sizeThumbHeight, height, sizeThumbFont, sizeThumbWeight, colorPrimary, colorSecondary } = configBarStyles;

export const StyledWrapper = styled.nav`
  max-width: ${container};
  width: 100%;;
  margin: 0 auto;
`;

export const StyledProgressBar = styled.ul`
  width: 100%;
  height: ${height};
  background: ${backgroundBar};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledProgressCircle = styled.li`
  width: ${sizeCirlceWidth};
  height: ${sizeCirlceHeight};
  background: ${backgroundCirlce};

  display: flex;
  align-items: center;
  justify-content: center;
`;

interface StyledThumbProps {
  'data-progress'?: boolean; 
}

export const StyledThumb = styled.div<StyledThumbProps>`
  width: ${sizeThumbWidth};
  height: ${sizeThumbHeight};
  border-radius: 100%;
  border: 1px solid #2F80ED;

  background: ${props => (props['data-progress'] ? 'transparent' : '#2F80ED')};
  color: ${props => (props['data-progress'] ? colorPrimary : colorSecondary)};
  
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${sizeThumbFont};
  font-weight: ${sizeThumbWeight};
`;

export const StyledIconSvg = styled(DoneIcon)``;