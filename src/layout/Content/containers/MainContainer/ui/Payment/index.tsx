import { FC, FormEvent } from "react";
import { SColumn, SForm, SWrapper } from "./styles";
import { ButtonComponent, InputComponent, SpoilerComponent } from "common";
import AppleIconSvg from "assets/icons/partner-icons/apple-icon";
import inputPropsList from "utils/inputPropsList";
import { ButtonType } from "common/ButtonComponent";
import { AccordeonComponent, CollapseComponent } from "components";
import useInputMask from "hooks/useInputMask";

export const Payment: FC = () => {
  const { expiry, cardNumber, cardCVV, isEmpty, email, handleExpiryChange, handleCardNumberChange, handleCardCVVChange, handleEmail, setIsEmpty } = useInputMask();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const errors = {
      email: email === '',
      expiry: expiry === '',
      cardNumber: cardNumber === '',
      cardCVV: cardCVV === '',
    };

    setIsEmpty(errors);

    // Проверьте, есть ли хотя бы одно поле с ошибкой
    if (Object.values(errors).some(error => error)) {
      // Если есть хотя бы одна ошибка, не выполняйте отправку формы
    } else {
      // Отправка данных формы или другая логика
    }
  }

  return (
    <SWrapper>
      <ButtonComponent variant={ButtonType.Link} icon={<AppleIconSvg />} />
      <SpoilerComponent title="Or pay with card" />
      <SForm onSubmit={handleSubmit}>
        {inputPropsList.slice(0, 1).map((inputProps, index) => (
          <InputComponent key={index} 
            {...inputProps} isEmpty={isEmpty.email}  
            onChange={handleEmail} 
            value={email} 
          />
        ))}
        <SColumn>
          {inputPropsList.slice(1, 2).map((inputProps, index) => (
            <InputComponent key={index} 
              {...inputProps} isEmpty={isEmpty.cardNumber || isEmpty.expiry || isEmpty.cardCVV} 
              onChange={handleCardNumberChange} 
              value={cardNumber}
            />
          ))}
          {inputPropsList.slice(2, 4).map((inputProps, index) => (
            <InputComponent key={index} 
              {...inputProps} 
              onChange={index === 0 ? handleExpiryChange : handleCardCVVChange}
              value={index === 0 ? expiry : cardCVV}
            />
          ))}
        </SColumn>
        {inputPropsList.slice(-1).map((inputProps, index) => (
          <InputComponent key={index} {...inputProps} />
        ))}
        <CollapseComponent />
        <ButtonComponent type="submit" variant={ButtonType.Submit} title="Submit order" />
      </SForm>
      <SpoilerComponent title="Or alternative methods" />
      <AccordeonComponent />
    </SWrapper>
  );
};
