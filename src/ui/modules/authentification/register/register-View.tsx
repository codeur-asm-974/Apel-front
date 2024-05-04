import { Container } from "@/ui/components/container/container";
import { Box } from "@/ui/design-syteme/box/box";
import { Typography } from "@/ui/design-syteme/typography/typography";
import Image from "next/image";
import Link from "next/link";
import { RegisterForm } from "./register-form";

export const RegisterView = () => {
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
          <RegisterForm />
        </Box>
      </div>
    </Container>
  );
};
