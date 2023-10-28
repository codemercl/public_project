import styled from "styled-components";

export const StyledContainer = styled.b`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #d3e2f9;
    z-index: 1;
  }
`;

export const StyledText = styled.p`
  z-index: 2;
  max-width: 100%;
  position: relative;
  text-align: center;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
  color: #89a6d4;
  font-size: 14px;
  font-weight: 400;

  &:before {
    content: "";
    position: absolute;
    left: -15px;
    width: calc(100% + 30px);
    height: 100%;
    background: white;
    z-index: -1;
  }
`;
