import { firebaseLogOutUser } from "@/api/authentification";
import { Box } from "@/ui/design-syteme/box/box";
import { Button } from "@/ui/design-syteme/button/button";
import { Typography } from "@/ui/design-syteme/typography/typography";
import { toast } from "react-toastify";
import { ActivLink } from "./Active-link";

export const UserAccountNavigation = () => {
  const handleLogOutUser = async () => {
    const { error } = await firebaseLogOutUser();
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("A bientot");
  };
  return (
    <Box classeName="flex flex-col p-8 m-4 gap-7">
      <div className="flex flex-col  gap-3">
        <Typography variant="caption2" weight="medium">
          <ActivLink href="/mon-espace">Mon compte</ActivLink>
        </Typography>
        <Typography variant="caption2" weight="medium">
          <ActivLink href="/mon-compte/mes-projets">Mes projets</ActivLink>
        </Typography>
      </div>

      <Button action={handleLogOutUser} variant="danger">
        Déconexion
      </Button>
    </Box>
  );
};
