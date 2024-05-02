import { Session } from "inspector";

import { Footer } from "./footer";
import { Navigations } from "./navigation";
import { Container } from "../container/container";

interface Props {
  children: React.ReactNode;
  isDisplayBreadcrumbs?: boolean;
  withSidebar?: boolean;
  //sessionStatus?: SessionStatusTypes;
}

export const Layout = ({
  children,
  isDisplayBreadcrumbs = true,
  withSidebar,
}: //sessionStatus,
Props) => {
  let view: React.ReactElement = <></>;
  if (withSidebar) {
    view = (
      <Container className="mb-14">
        <div className="grid grid-cols-12  gap-7">
          <div className="col-span-3  "></div>
          <div className="col-span-9">{children}</div>
        </div>
      </Container>
    );
  } else {
    view = <>{children}</>;
  }
  return (
    <>
      <Navigations />

      {view}
      <Footer />
    </>
  );
};
