import styled from "styled-components";
import { configContentStyles, configTemplateStyles } from "styles/variables.config";

const { progress, tempCont, barMarginTop, contentMarginTop } = configTemplateStyles;

export const StyledTemplate = styled.div`
  display: grid;

  ${progress} {
    margin-top: ${barMarginTop};
  }

  ${tempCont} {
    margin-top: ${contentMarginTop};
  }
`;

const { gridSettings, gap, container, columns, aside, content, utils } = configContentStyles;

export const StyledGrid = styled.main`
  display: grid;
  grid-template-columns: ${gridSettings};
  gap: ${gap};
  max-width: ${container};
  margin: 0 auto;

  @media (max-width: 1092px) {
    grid-template-columns: ${columns};
    grid-auto-flow: row;
    gap: 0;
  }

  @media (max-width: 1092px) {
    ${aside} {
      grid-column: span 2;
      order: 2;
    }

    ${content} {
      grid-column: 1 / 3;
      order: 1;
    }

    ${utils} {
      grid-column: 1 / 3;
      order: 3;
    }
  }
`;
