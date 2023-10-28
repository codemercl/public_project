import { FC, useState } from "react";
import { SBTCSvgIcon, SHidden, SPartnerIcons, SPaypalSvgIcon } from "./styles";
import { ButtonComponent } from "common";
import PaypalIconSvg from "assets/icons/partner-icons/paypal";
import BtcIconSvg from "assets/icons/partner-icons/btc";
import { ButtonType } from "common/ButtonComponent";

export const AccordeonComponent: FC = () => {
  const [isAccordionOpen, setAccordionOpen] = useState<boolean>(false);

  const toggleAccordion = () => {
    setAccordionOpen(prev => !prev);
  };

  return (
    <>
      <SPartnerIcons data-isactive={isAccordionOpen.toString()} onClick={toggleAccordion}>
        <SPaypalSvgIcon />
        <SBTCSvgIcon />
      </SPartnerIcons>
      <SHidden open={isAccordionOpen}>
        <ButtonComponent variant={ButtonType.Flat} icon={<PaypalIconSvg />} />
        <ButtonComponent variant={ButtonType.Flat} icon={<BtcIconSvg />} />
      </SHidden>
    </>
  );
};
