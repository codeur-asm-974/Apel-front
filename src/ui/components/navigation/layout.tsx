import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";
import { Footer } from "./footer";
import { Navigations } from "./navigation";

interface Props {
  children: React.ReactNode;
  isDisplayBreadcrumbs?: boolean;
}

export const Layout = ({ children, isDisplayBreadcrumbs = true }: Props) => {
  return (
    <div>
      <Navigations />
      {isDisplayBreadcrumbs && <Breadcrumbs />}
      {children}
      <Footer />
    </div>
  );
};
