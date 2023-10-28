import styled from "styled-components";
import { configTableStyles } from "styles/variables.config";

const { titleColor, titleSize, titleWeight, countTable, tableColorPrimary, tableColorSecondary, tableColorFargo } = configTableStyles;

export const IWrapper = styled.div``;
export const STitle = styled.h1`
  text-align: center;
  color: ${titleColor};
  font-size: ${titleSize};
  font-weight: ${titleWeight};
`;

export const STableContainer = styled.div`
  display: grid;
  grid-template-columns: ${countTable};
  margin-top: 26px;
`;

export const TableCell = styled.div`
  padding: 7px;
  font-size: 15px;
  color: ${tableColorFargo};

  &[data-align="left"][data-fill="false"] {
    font-weight: 400;
  }

  &[data-align="left"] {
    text-align: left;
  }

  &[data-align="right"] {
    text-align: right;
  }

  &[data-align="right"][data-bold="true"][data-fill="true"] {
    font-weight: 500;
  }

  &[data-bold="true"] {
    font-weight: 600;
  }

  &[data-align="right"][data-fill="false"] {
    color: ${tableColorPrimary};
  }

  &[data-align="right"][data-fill="true"] {
    color: ${tableColorSecondary};
  }
`;