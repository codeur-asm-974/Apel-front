import { useAuth } from "@/context/auth-user-context";
import { Avatar } from "@/ui/design-syteme/avatar/avatar";
import { Typography } from "@/ui/design-syteme/typography/typography";

import Link from "next/link";

export const AccountAvatarNavigationLinks = () => {
  const { authUser } = useAuth();
  const { photoURL, displayName } = authUser;

  return (
    <Link href="/mon-espace" className="flex items-center gap-2">
      <Avatar
        src={photoURL}
        alt={
          displayName ? `avatar de ${displayName}` : "avatar de l'utilisateur"
        }
        size="large"
      />
      <div className="max-w-[160px]">
        <Typography variant="caption2" weight="medium" className="truncate">
          {displayName ? displayName : "Bienvenue"}
        </Typography>
        <Typography variant="caption4" weight="medium" theme="gray">
          Mon compte
        </Typography>
      </div>
    </Link>
  );
};
