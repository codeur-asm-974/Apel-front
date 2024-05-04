import { Box } from "@/ui/design-syteme/box/box";
import { Typography } from "@/ui/design-syteme/typography/typography";
import Link from "next/link";

import { Container } from "@/ui/components/container/container";
import Image from "next/image";
import { LoginForm } from "./login-form";

export const LoginView = () => {
  return (
    <Container className=" md:grid md:grid-cols-2 md:gap-20 md:mb-32">
      <div className="flex items-center ">
        <div className="max-sm:hidden md:relative md:w-full md:h-[531px]">
          <Image
            fill
            src="/assets/images/character-2.png"
            alt="illustration bonhome"
            className="object-scale-down   "
          />
        </div>
      </div>
      <div className=" flex items-center">
        <Box padding_y="py-5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" component="h1">
              Connexion
            </Typography>
            <div className="flex items-center gap-2">
              <Typography variant="caption4" component="span" theme="gray">
                Tu n&apos;as pas de compte ?
              </Typography>
              <Typography variant="caption4" component="span" theme="primary">
                <Link href="/connexion/inscription">S&apos;inscrire </Link>
              </Typography>
            </div>
          </div>
          <LoginForm />
        </Box>
      </div>
    </Container>
  );
};
