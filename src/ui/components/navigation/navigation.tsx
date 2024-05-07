import clsx from "clsx";
import { useState } from "react";
import Link from "next/link";

import { Button } from "@/ui/design-syteme/button/button";
import { Typography } from "@/ui/design-syteme/typography/typography";
import { ActivLink } from "./Active-link";
import { Logo } from "@/ui/design-syteme/logo/logo";
import { Container } from "../container/container";
import { useAuth } from "@/context/auth-user-context";
import { AccountAvatarNavigationLinks } from "./account-avatar-link";

export const Navigations = () => {
  const { authUser, authUserIsLoading } = useAuth();
  console.log("authUser", authUser);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const authentificationSysteme = (
    <>
      <div className="items-center gap-2 hidden sm:flex">
        <Button baseUrl="/connexion/inscription">Rejoindre</Button>
        <Button baseUrl="/connexion">Connexion</Button>
      </div>

      <div className="  items-center block sm:hidden ">
        <button className="focus:outline-none " onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <div className=" py-2  max-lg:text-caption4 xl:block  flex items-center ">
          {isMenuOpen && (
            <div className=" space-y-2 flex   flex-col">
              {" "}
              <Button baseUrl="/connexion/inscription" size="small">
                Rejoindre
              </Button>
              <Button baseUrl="/connexion" size="small">
                Connexion
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );

  return (
    <div className="border-b-2 bg-secondary-200 border-orange-200">
      <Container className="py-2 flex items-center justify-between gap-7">
        <Link href="/">
          <div className="lg:flex items-end gap-4">
            <div className="hidden md:block">
              <Logo size="large" />
            </div>
            <div className="block md:hidden">
              <Logo size="medium" />
            </div>

            <Typography
              variant="body-sm"
              theme="primary"
              component="span"
              className="max-md:hidden  "
            >
              Association de Parents d’élèves de l’Enseignement Libre
            </Typography>
          </div>
        </Link>
        <div></div>
        <div className="flex items-center gap-4 xl:gap-7 ">
          <Typography
            theme="primary"
            variant="caption2"
            component="div"
            className="max-lg:text-caption4 space-x-2.5  xl:block flex items-center xl:space-x-8 "
          >
            <ActivLink href="/#">Acceuil</ActivLink>
            <ActivLink href="/#">Actualité</ActivLink>
          </Typography>
          {!authUser ? (
            authentificationSysteme
          ) : (
            <AccountAvatarNavigationLinks />
          )}
        </div>
      </Container>
    </div>
  );
};
