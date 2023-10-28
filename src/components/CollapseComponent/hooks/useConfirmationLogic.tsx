import { MouseEventHandler } from "react";
import Done from "assets/icons/system-icons/success.svg";
import Trash from "assets/icons/system-icons/trash.svg";
import { SAwait, SConfirm, SIcon } from "../styles";

export const useConfirmationLogic = (filed: string, showConfirm: any, error: any, handleSend: MouseEventHandler<HTMLButtonElement> | undefined, handleClearField: MouseEventHandler<HTMLImageElement> | undefined) => {
    if (!showConfirm) {
      return filed.trim().length > 0 ? (
        <SConfirm onClick={handleSend}>Apply</SConfirm>
      ) : (
        <SAwait>Apply</SAwait>
      );
    } else {
      return error ? (
        <SIcon onClick={handleClearField} src={Trash} alt="Trash" />
      ) : (
        <SIcon src={Done} alt="Done" />
      );
    }
  };