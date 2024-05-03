import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-syteme/typography/typography";

import Image from "next/image";

export const HeroTopView = () => {
  return (
    <>
      <Container className=" flex max-lg:place-content-center  relative top-4  bg-primary-200 p-6 rounded">
        <div className="  w-full   sm:max-w-xl max-sm:space-y-1  max-w-xl space-y-7  ">
          <Typography
            variant="h1"
            component="h1"
            className="  max-sm:text-lg  sm:font-bold max-sm:font-bold max-sm:text-center text-center mx-w-xl"
          >
            Votre école Sainte-Marguerite
          </Typography>
          <Image
            priority
            src="/assets/images/ecole.jpg"
            alt="illustration ecole Sainte-Marguerite"
            width={650}
            height={434}
            className="max-sm:relative  max-sm:top-2 lg:absolute  right-0 p-6 -top-4 z-0  "
          />

          <Typography
            variant="body-lg"
            component="p"
            theme="gray"
            className="m-w-xl text-justify "
          >
            L’enseignement privé catholique de la ville de Saint-Benoît, compte
            parmi ses établissements l’École Primaire Privée Sainte-Marguerite.
            Pour prendre en charge de manière efficace ses 444 élèves et leur
            dispenser son enseignement de niveau primaire Sous-contrat
            d’association. L’association des parents d’élèves de l&apos;école
            Sainte Marguerite est heureuse de vous accueillir et vous souhaite
            la bienvenue ! N&apos;hésitez pas à consulter cette section
            régulièrement pour connaître les événements organisés par
            l&apos;APEL au sein de l&apos;école.
          </Typography>
        </div>
      </Container>
      <Container className="  flex lg:flex-row-reverse mt-10 max-lg:place-content-center relative top-4 p-6 bg-primary-200  rounded">
        <div className="    w-full  sm:max-w-xl lg:max-w-xl space-y-7   ">
          <Typography
            variant="h1"
            component="h1"
            className=" max-sm:text-lg  sm:font-bold max-sm:font-bold max-sm:text-center text-center mx-w-xl "
          >
            Votre APEL
          </Typography>

          <Image
            src="/assets/images/apel.jpeg"
            alt="illustration logo APEL"
            width={550}
            height={334}
            priority
            className="max-sm:relative max-sm:left-0 lg:absolute left-6 top-3  z-0   "
          />

          <Typography
            variant="body-lg"
            component="p"
            theme="gray"
            className="m-w-xl text-justify "
          >
            L’A.P.E.L. (Association de Parents d’élèves de l’Enseignement Libre)
            est une association “type Loi de 1901”, composée de parents d’élèves
            élus. Le groupe a des temps de réunions en commun avec l’O.G.E.C.
            Les deux associations travaillent ensemble, œuvrent pour le bien
            commun de l’établissement. Tous les parents sont membres de
            l’association. Les parents volontaires peuvent se présenter au
            conseil pour être élus lors de l’assemblée générale annuelle et
            participer à l’organisation des événements dans l’école.
          </Typography>
        </div>
      </Container>
    </>
  );
};
