import { Container } from "@/ui/components/container/container";
import { Box } from "@/ui/design-syteme/box/box";
import { Typography } from "@/ui/design-syteme/typography/typography";
import Image from "next/image";
import Link from "next/link";
import { RegisterForm } from "./register-form";
import { FormsType } from "@/types/form";

interface Props {
  form: FormsType;
}
export const RegisterView = ({ form }: Props) => {
  return (
    <Container className=" md:grid md:grid-cols-2 md:gap-20 md:mb-32">
      <div className="flex items-center ">
        <div className="max-sm:hidden md:relative md:w-full md:h-[531px]">
          <Image
            fill
            src="/assets/images/character.png"
            alt="illustration bonhome"
            className="object-scale-down   "
          />
        </div>
      </div>
      <div className=" flex items-center">
        <Box padding_y="py-5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" component="h1">
              Inscription
            </Typography>
            <div className="flex items-center gap-2">
              <Typography variant="caption4" component="span" theme="gray">
                Tu as déjà un compte ?
              </Typography>
              <Typography variant="caption4" component="span" theme="primary">
                <Link href="/connexion">Connexion </Link>
              </Typography>
            </div>
          </div>
          <RegisterForm form={form} />
          <Typography
            variant="caption4"
            theme="gray"
            className="max-w-md mx-auto space-y-1 text-center"
          >
            <div>En t’inscrivant, tu acceptes les</div>
            <div>
              <Link href="/#" className="text-gray">
                Conditions d&apos;utilisation
              </Link>{" "}
              et la{" "}
              <Link href="/#" className="text-gray">
                Politique de confidentialité
              </Link>
              .
            </div>
          </Typography>
        </Box>
      </div>
    </Container>
  );
};
