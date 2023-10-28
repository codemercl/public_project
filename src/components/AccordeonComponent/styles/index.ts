import styled from "styled-components";
import PaypalSVG from "assets/icons/partner-icons/paypal";
import BTCSVG from "assets/icons/partner-icons/btc";
import ArrowSvg from "assets/icons/system-icons/arrow-down.svg";

interface HiddenProps {
  open: boolean;
}

export const SPartnerIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px 24px;
  cursor: pointer;
  position: relative;
  & > svg {
    opacity: 1;
    filter: none;
  }

  &[data-isactive="true"] > svg {
    filter: grayscale(100%);
    opacity: 0.2;
  }

  &::after {
    content: "";
    position: absolute;
    background: url(${ArrowSvg}) no-repeat;
    background-size: 100%;
    right: 0;
    top: -10px;
    width: 40px;
    height: 40px;
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform: rotate(180deg);
  }

  &[data-isactive="true"]::after {
    transform: rotate(0deg);
  }
`;

export const SHidden = styled.div<HiddenProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px 24px;
  max-height: ${({ open }) => open && "500px"}; 
  overflow: hidden;
  transition: max-height 0.3s ease;
  display: ${({ open }) => (open ? "flex" : "none")}; 
  transition: opacity 0.5s ease;
  animation: fade-in-out 0.5s ease; 

  @keyframes fade-in-out {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
`;

export const SPaypalSvgIcon = styled(PaypalSVG)``;
export const SBTCSvgIcon = styled(BTCSVG)``;
