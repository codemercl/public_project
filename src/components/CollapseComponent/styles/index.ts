import styled from "styled-components";
import { configCollapseStyles } from "styles/variables.config";

const {colorLink, fontSizeLink, fontWeightLink, hoverColorLink, colorConf, fontWeightConf, fontWeightAwait, colorAwait, iconSize} = configCollapseStyles;

export const SLink = styled.div`
  display: inline-block;
  color: ${colorLink};
  font-size: ${fontSizeLink};
  font-weight: ${fontWeightLink};
  text-decoration: underline;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: ${hoverColorLink};
  }
`;

export const STextField = styled.div`
  position: relative;
  z-index: 1;
`;

export const SConfirm = styled.button`
  position: absolute;
  top: 13px;
  right: 16px;
  font-weight: ${fontWeightConf};
  cursor: pointer;
  color: ${colorConf};
`;

export const SAwait = styled.button`
  position: absolute;
  top: 13px;
  right: 16px;
  font-weight: ${fontWeightAwait};
  cursor: not-allowed;
  color: ${colorAwait};
`;

export const SIcon = styled.img`
  position: absolute;
  display: block;
  top: 13px;
  right: 16px;
  width: ${iconSize};
  height: ${iconSize};
  z-index: 2;
  cursor: pointer;
`;