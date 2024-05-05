import { firebaseLogOutUser } from "@/api/authentification";
import { Button } from "@/ui/design-syteme/button/button";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export const UserACcountContainer = () => {
  const router = useRouter();
  const handleLogOutUser = async () => {
    const { error } = await firebaseLogOutUser();
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("A bientot.");
    router.push("/connexion");
  };

  return (
    <div className="flex justify-center py-20">
      <Button action={handleLogOutUser} variant="danger">
        Déconnexion
      </Button>
    </div>
  );
};
