import { configMenuStyles } from "styles/variables.config";
import styled from "styled-components";

const { fill, width, height, cursor } = configMenuStyles;

const StyledSVG = styled.svg`
  display: none;
  @media (max-width: 1092px) {
    display: block;
  }
`;

function MenuIcon() {
  return (
    <StyledSVG
      width={width}
      height={height}
      cursor={cursor}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
    >
      <path d="M23 7.33333H1V6H23V7.33333ZM23 18H1V16.6667H23V18ZM23 12.656H1V11.3333H23V12.656Z" />
    </StyledSVG>
  );
}

export default MenuIcon;
