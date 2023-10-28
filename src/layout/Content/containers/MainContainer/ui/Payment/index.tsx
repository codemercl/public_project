import { FC } from "react";
import { SColumn, SForm, SWrapper } from "./styles";
import { ButtonComponent, InputComponent, SpoilerComponent } from "common";
import AppleIconSvg from "assets/icons/partner-icons/apple-icon";
import inputPropsList from "utils/inputPropsList";
import { ButtonType } from "common/ButtonComponent";
import { AccordeonComponent, CollapseComponent } from "components";
import useInputMask from "hooks/useInputMask";

export const Payment: FC = () => {
  const { expiry, cardNumber, cardCVV, handleExpiryChange, handleCardNumberChange, handleCardCVVChange } = useInputMask();

  return (
    <SWrapper>
      <ButtonComponent variant={ButtonType.Link} icon={<AppleIconSvg />} />
      <SpoilerComponent title="Or pay with card" />
      <SForm>
        {inputPropsList.slice(0, 1).map((inputProps, index) => (
          <InputComponent key={index} {...inputProps}/>
        ))}
        <SColumn>
          {inputPropsList.slice(1, 2).map((inputProps, index) => (
            <InputComponent key={index} {...inputProps} value={cardNumber} onChange={handleCardNumberChange} />
          ))}
          {inputPropsList.slice(2, 4).map((inputProps, index) => (
            <InputComponent key={index} {...inputProps}
              value={index === 0 ? expiry : cardCVV}
              onChange={index === 0 ? handleExpiryChange : handleCardCVVChange}
            />
          ))}
        </SColumn>
        {inputPropsList.slice(-1).map((inputProps, index) => (
          <InputComponent key={index} {...inputProps}  />
        ))}
        <CollapseComponent />
        <ButtonComponent variant={ButtonType.Submit} title="Submit order" />
      </SForm>
      <SpoilerComponent title="Or alternative methods" />
      <AccordeonComponent />
    </SWrapper>
  );
};
