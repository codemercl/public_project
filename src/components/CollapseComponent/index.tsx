import { FC, useState } from "react";
import { SLink, STextField } from "./styles";
import { InputComponent } from "common";
import { useConfirmationLogic } from "./hooks/useConfirmationLogic";

export const CollapseComponent: FC = () => {
  const [state, setState] = useState({
    view: false,
    filed: "",
    error: false,
    showConfirm: false,
  });

  const { view, filed, error, showConfirm } = state;

  const handleReview = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, filed: e.target.value, showConfirm: false });
  };

  const handleSend = async () => {
    if (filed.trim().length > 0) {
      try {
        await fetch("your_URL_for_request");
        setState({ ...state, error: true, showConfirm: true });
      } catch (error) {
        console.error(error);
        setState({ ...state, error: true });
      }
    }
  };

  const handleClearField = () => {
    setState({ ...state, filed: "", showConfirm: false });
  };

  const ConfirmationComponent = useConfirmationLogic(
    filed,
    showConfirm,
    error,
    handleSend,
    handleClearField
  );

  return (
    <div>
      {!view ? (
        <SLink onClick={() => setState({ ...state, view: !view })}>I have a coupon code</SLink>
      ) : (
        <STextField>
          <InputComponent
            value={filed}
            onChange={handleReview}
            placeholder="Enter your promo code"
          />
          {ConfirmationComponent}
        </STextField>
      )}
    </div>
  );
};
