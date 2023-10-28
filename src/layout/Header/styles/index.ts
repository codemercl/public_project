import styled from "styled-components";
import { configHeaderStyles } from "styles/variables.config";

const { headerColor, height, boxShadow, maxWidth, width } = configHeaderStyles;

export const SLayout = styled.header`
  padding: 0 12px;
  background-color: ${headerColor};
  box-shadow: ${boxShadow};
`;

export const SHeader = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: ${maxWidth};
  height: ${height};
  width: ${width};
  margin: 0 auto;

  display: flex;
  align-items: center;
`;
