import { FC } from "react";

import { Partner, Payment, Preview } from "./ui";
import { SWrapper } from "./styles";

export const MainContainer: FC = () => {
  return (
    <SWrapper>
      <Preview />
      <Payment />
      <Partner />
    </SWrapper>
  );
};
