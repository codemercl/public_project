import { ProgressBarComponent } from "components";
import { LContent, LHeader, Template } from "layout";
import { SLogoSvg, SMenuSvg } from "./styles/header";
import { AsideContainer, MainContainer, MethodContainer } from "layout/Content/containers";

function App() {
  return (
    <Template
      header={<LHeader logo={<SLogoSvg />} menu={<SMenuSvg />} />}
      progress={<ProgressBarComponent progress={3} />}
      content={
        <LContent>
          <AsideContainer />
          <MainContainer />
          <MethodContainer />
        </LContent>
      }
    />
  );
}

export default App;
