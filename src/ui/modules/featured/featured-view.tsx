import { Container } from "@/ui/components/container/container";
import { ActivLink } from "@/ui/components/navigation/Active-link";
import { Button } from "@/ui/design-syteme/button/button";
import { Typography } from "@/ui/design-syteme/typography/typography";

import Image from "next/image";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";

interface FeaturedListInterface {
  imagePath: string;
  imageAlt: string;
  title: string;
  Description: string;
}

const featuresData: FeaturedListInterface[] = [
  {
    imagePath: "/assets/images/enfant.jpg",
    imageAlt: "Ilustration enfant",
    title: "Accueil",
    Description:
      "Nous acceuillons les nouvelles familles a travers de reunion d'échange afin de mieux les informer ",
  },
  {
    imagePath: "/assets/images/reunion3.png",
    imageAlt: "Ilustration reunion",
    title: "Representant",
    Description:
      "Nous représentons les familles au conseil d’établissement et auprès de l’organisme de gestion de l'établissement",
  },
  {
    imagePath: "/assets/images/cirque.png",
    imageAlt: "Ilustration cirque",
    title: "Organisation",
    Description:
      "nous sommes charger de l'organisation d'événements tout au long de l'année et de l'accompagnement des temps forts de la vie de l'école (fête de Noël,distribution chocolats de pâques kermesse de l’école...)",
  },
  {
    imagePath: "/assets/images/bus2.jpg",
    imageAlt: "Ilustration bus",
    title: "Participation ",
    Description:
      "Nous participons de l'organisation des diverses activités et manifestations en collaboration avec l’équipe enseignante ( gouter récréative, carnaval, sorties scolaires/spectacles...)",
  },
];

export const FeaturedView = () => {
  const featuredList = featuresData.map((feature) => (
    <div
      key={uuidv4()}
      className="flex flex-col items-center justify-center bg-white rounded p-7 "
    >
      <div className="relative w-[140px] h-[140px] rounded-full mb-6 p-10 ">
        <Image
          fill
          src={feature.imagePath}
          alt={feature.imageAlt}
          className="rounded-full blur-xl"
        />
        <Image
          fill
          src={feature.imagePath}
          alt={feature.imageAlt}
          className="rounded-full"
        />
      </div>
      <Typography
        variant="lead"
        component="h3"
        weight="medium"
        className="text-center mb-2.5"
      >
        {feature.title}
      </Typography>
      <Typography
        variant="body-base"
        component="p"
        theme="gray"
        className="text-center"
      >
        {feature.Description}
      </Typography>
    </div>
  ));

  return (
    <>
      <div className="relative  bg-secondary-200 top-16 mb-20  max-sm:top-10   ">
        <Container className="grid grid-cols-1  md:grid-cols-12 max-lg:flex max-lg:flex-col md:gap-24 py-20 max-sm:py-20 ">
          <div className=" col-span-12 md:col-span-5 ">
            <div className="max-sm:-mt-8 -mt-12">
              <Typography
                variant="h2"
                component="h2"
                className="mb-4 max-sm:text-lg max-sm:font-bold max-sm:text-center lg:text-center  "
              >
                Rôle et missions de l&apos;APEL
              </Typography>
              <Typography
                variant="lead"
                component="p"
                theme="gray"
                className="mb-14"
              >
                Association au service de l&apos;école et des parents,
                l&apos;APEL représente toutes les familles, dans leurs
                diversités, leurs identités sociales, culturelles, politiques,
                philosophiques ou religieuses et qui ont délibérément choisi de
                confier leurs enfants à un établissement catholique
                d’enseignement.
              </Typography>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2  col-span-12 md:col-span-7 gap-6 md:gap-7 -mt-10 ">
            {featuredList}
          </div>
          <div className="lg:flex lg:flex-col   max-sm:mt-12 lg:absolute   lg:h-full lg:mt-80 lg:top-20 lg:pt-20 text-center  ">
            <Button baseUrl="/#" icon={{ icon: RiArrowDropRightLine }}>
              Votre Espace privé
            </Button>
            <div className="mt-20  bg-gray-400 border border-gray-500  py-8 rounded max-sm:mt-8">
              <Typography
                theme="gray"
                variant="h3"
                component="h2"
                className="max-sm:text-xl space-x-2.5   xl:block flex items-center xl:space-x-8 font-bold  max-sm:font-bold justify-center "
              >
                <ActivLink href="/design">Nous contacter</ActivLink>
              </Typography>
            </div>
          </div>
        </Container>
      </div>
      <Container className="py-14 max-sm:py-10 relative flex flex-col md:flex-row items-center gap-6 md:gap-10">
        <Image
          src="/assets/images/apel2.jpg"
          alt=""
          width={130}
          height={130}
          className="max-sm:-mt-10"
        />
        <div className="absolute w-full flex justify-center -z-10">
          <label>
            <Image
              src="/assets/images/tache.jpg"
              alt=""
              width={130}
              height={130}
              className="w-[600px] opacity-40 items-end max-sm:mt-20 max-sm:w-[300px]
               "
            />
          </label>
        </div>

        <Typography
          variant="h2"
          component="h1"
          theme="gray"
          className=" text-center drop-shadow-lg text-gray-600"
        >
          Rejoignez notre équipe et agissons pour nos enfants
        </Typography>
      </Container>
    </>
  );
};
