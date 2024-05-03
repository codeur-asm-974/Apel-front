import clsx from "clsx";
import { useRouter } from "next/router";
import { RiHome3Line } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";
import { Container } from "../container/container";
import Link from "next/link";
import { Typography } from "@/ui/design-syteme/typography/typography";

export const Breadcrumbs = () => {
  const router = useRouter();
  const asPath = router.asPath;
  const segments = asPath.split("/");
  const lastSegment = segments[segments.length - 1];
  segments[0] = "acceuil";

  const view = segments.map((path, index) => (
    <div key={uuidv4()} className="flex items-center">
      <Link
        href={index > 0 ? `/${segments.slice(1, index + 1).join("/")}` : "/"}
      >
        <Typography
          variant="caption3"
          component="span"
          className={clsx(
            path !== lastSegment ? "text-gray-600" : "text-gray",
            "capitalize hover:text-gray animate"
          )}
        >
          {path !== "acceuil" ? (
            path.replace(/-/g, " ")
          ) : (
            <RiHome3Line className="inline -mt-1" />
          )}
        </Typography>
        {path !== lastSegment && (
          <Typography
            variant="caption2"
            component="span"
            className="ml-2"
            text-gray-600
          >
            /
          </Typography>
        )}
      </Link>
    </div>
  ));

  return (
    <Container className="flex items-center gap-2 mt-6 mb-6">{view}</Container>
  );
};
