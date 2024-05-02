import { footerLinks } from "./app-links";

import Image from "next/image";
import { FooterLinks } from "@/types/app-links";
import { v4 as uuidv4 } from "uuid";

import { LinkTypes } from "@/lib/link-type";

import { RiFacebookBoxFill } from "react-icons/ri";
import { Button } from "@/ui/design-syteme/button/button";
import { Typography } from "@/ui/design-syteme/typography/typography";

import { ActivLink } from "./Active-link";
import { Container } from "../container/container";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerNavigationList = footerLinks.map((columnLinks) => (
    <FooterLink key={uuidv4()} data={columnLinks} />
  ));

  return (
    <div className="   bg-gray-700">
      <Container className="max-sm:inline max-sm:space-y-10 flex justify-between pt-16">
        <div className=" flex flex-col items-center gap-1">
          <Image
            src="/assets/svg/apel-academique.svg"
            alt="Logo apel Academique"
            width={229}
            height={216}
          />
        </div>
        <div className="max-sm:place-content-center max-sm:-space-x-6 max-sm:ml-10 flex lg:gap-9">
          {footerNavigationList}
        </div>

        <div className="max-sm:absolute  max-sm:right-0 max-sm:mr-20 ">
          <Button
            key={uuidv4()}
            variant="ico"
            iconTheme="secondary"
            icon={{ icon: RiFacebookBoxFill }}
            baseUrl="https://www.facebook.com/profile.php?id=100064844102158"
            linkType="external"
            size="medium"
          />
        </div>
      </Container>

      <Container className="pt-9 pb-11 space-y-11">
        <hr className="text-orange-600 mt-10 " />
        <div className="    flex items-center  ">
          <div className=" flex gap-8">
            <Typography className="" variant="caption4" theme="white">
              {`Copyright © ${currentYear}  Association de Parents d’élèves de l’Enseignement Libre`}
            </Typography>

            <Typography className="" variant="caption4" theme="white">
              <a href="/#" target="_blank" className="underline ">
                Mention légales
              </a>
            </Typography>
          </div>
        </div>
      </Container>
    </div>
  );
};

interface footerLinkProps {
  data: FooterLinks;
}

const FooterLink = ({ data }: footerLinkProps) => {
  const linkList = data.links.map((link) => (
    <div key={uuidv4()}>
      {link.type === LinkTypes.INTERNAL && (
        <ActivLink href={link.baseUrl}>{link.label}</ActivLink>
      )}
      {link.type === LinkTypes.EXTERNAL && (
        <a href={link.baseUrl} target="_blank">
          {link.label}
        </a>
      )}
    </div>
  ));
  return (
    <div className="min-w-[190px]">
      <Typography
        theme="white"
        variant="caption2"
        weight="medium"
        className="pb-5"
      >
        {data.label}
      </Typography>
      <Typography theme="orange" variant="caption3" className="space-y-4">
        {linkList}
      </Typography>
    </div>
  );
};
