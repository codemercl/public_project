import styled from "styled-components";

enum ButtonType {
  Submit = "submit",
  Link = "link",
  Flat = "flat",
}

interface ButtonProps {
  'data-variant'?: ButtonType;
}

const buttonColors = {
  [ButtonType.Submit]: "#2F80ED",
  [ButtonType.Link]: "#081d31",
  [ButtonType.Flat]: "1px solid #D3E2F9",
};

const buttonHoverColors = {
  [ButtonType.Submit]: "#1968D2",
  [ButtonType.Link]: "#17324D",
  [ButtonType.Flat]: "1px solid #139AD6",
};

const buttonActiveColors = {
  [ButtonType.Submit]: "#1658B1",
  [ButtonType.Link]: "#041524",
  [ButtonType.Flat]: "#F8FAFD",
};

export const SButton = styled.button<ButtonProps>`
  background: ${(props) => (props['data-variant'] && buttonColors[props['data-variant']]) || ""};
  border: ${(props) => (props['data-variant'] && buttonColors[props['data-variant']]) || ""};

  color: #fff;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  max-width: 405px;
  width: 100%;
  height: 48px;

  &:hover {
    background: ${(props) => (props['data-variant'] && buttonHoverColors[props['data-variant']]) || ""};
    border: ${(props) => (props['data-variant'] && buttonHoverColors[props['data-variant']]) || ""};
  }

  &:disabled {
    background: #b2cbf4;
    cursor: not-allowed;
  }

  &:not(:disabled):active {
    background: ${(props) => (props['data-variant'] && buttonActiveColors[props['data-variant']]) || ""};
  }
`;
