import styled from "styled-components";

export const SWrapper = styled.div`
  position: relative;
`;

export const STextField = styled.div`
  position: relative;
`;

export const SIconSvg = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  z-index; -1;

  @media (max-width: 450px) {
    left: 12px;
    width: 16px;
    height: 16px;
  }
`;

export const SPicSvg = styled.div`
  display: flex;
  align-items: center;

  gap: 8px;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  z-index; -1;
  position: absolute;

  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 1092px) {
    gap: 2px;
    right: 12px;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

interface SInputProps {
  "data-icon"?: boolean;
  "data-apply"?: boolean;
}

export const SInput = styled.input<SInputProps>`
  border: 1px solid #d3e2f9;
  border-radius: 4px;
  height: 44px;
  width: 100%;
  padding: 16px 16px 16px ${(props) => (props["data-icon"] ? "52px" : "16px")};
  font-size: 14px;
  font-weight: 400;

  &::placeholder {
    color: #8d969e;
    font-size: 14px;
    font-weight: 400;
  }

  @media (max-width: 450px) {
    padding: 13px 36px;
    padding: 16px 16px 16px ${(props) => (props["data-icon"] ? "36px" : "16px")};
  }
`;

export const SError = styled.p`
  position: absolute;
  right: 0;
  top: 0;
  color: #eb5757;
  font-size: 14px;
  font-weight: 400;
  text-align: right;
`;
