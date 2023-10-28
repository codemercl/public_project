import { FC } from "react";
import { IWrapper, STableContainer, STitle, TableCell } from "./styles";
import { tableData } from "utils/tableData";

export const Preview: FC = () => {
  return (
    <IWrapper>
      <STitle>Finish your order</STitle>
      <STableContainer>
        {tableData.map((data, index) => (
          <TableCell
            key={index}
            data-align={data.align}
            data-bold={data.bold}
            data-fill={data.fill}
          >
            {data.label ? data.label : data.value}
          </TableCell>
        ))}
      </STableContainer>
    </IWrapper>
  );
};
