import { ChangeEvent, useState } from 'react';

const useInputMask = () => {
  const [expiry, setExpiry] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardCVV, setCardCVV] = useState('');

  const handleExpiryChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
  
    value = value.replace(/\D/g, '');
  
    if (value.length > 6) {
      value = value.slice(0, 6);
    }
  
    if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2)}`;
    }
  
    setExpiry(value);
  };

  const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value = value.replace(/\D/g, '');
    value = value.slice(0, 16);
    value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    setCardNumber(value);
  };

  const handleCardCVVChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value = value.replace(/\D/g, '');
    if (value.length > 3) {
      value = value.slice(0, 3);
    }
    setCardCVV(value);
  };

  return { expiry, cardNumber, cardCVV, handleExpiryChange, handleCardNumberChange, handleCardCVVChange };
};

export default useInputMask;