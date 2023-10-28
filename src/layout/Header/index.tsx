import { FC, ReactNode } from "react";
import { SHeader, SLayout } from "./styles";

interface LHeaderProps {
  logo: ReactNode;
  menu: ReactNode;
}

export const LHeader: FC<LHeaderProps> = ({ logo, menu }) => {
  return (
    <SLayout>
      <SHeader>
        {logo}
        {menu}
      </SHeader>
    </SLayout>
  );
};