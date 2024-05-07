import { SessionStatusTypes } from "@/types/sessiosn-status-types";
import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";
import { Session } from "../session/session";
import { Footer } from "./footer";
import { Navigations } from "./navigation";
import { UserAccountNavigation } from "./user-acount-navigation";
import { Container } from "../container/container";

interface Props {
  children: React.ReactNode;
  isDisplayBreadcrumbs?: boolean;
  sessionStatus?: SessionStatusTypes;
  withSidebar?: boolean;
}

export const Layout = ({
  children,
  isDisplayBreadcrumbs = true,
  withSidebar,
  sessionStatus,
}: Props) => {
  let view: React.ReactElement = <></>;
  if (withSidebar) {
    view = (
      <Container className="mb-14">
        <div className="grid grid-cols-12  gap-7">
          <div className="col-span-3  ">
            <UserAccountNavigation />
          </div>
          <div className="col-span-9">{children}</div>
        </div>
      </Container>
    );
  } else {
    view = <>{children}</>;
  }
  return (
    <Session sessionStatus={sessionStatus}>
      <Navigations />
      {isDisplayBreadcrumbs && <Breadcrumbs />}
      {view}
      <Footer />
    </Session>
  );
};
