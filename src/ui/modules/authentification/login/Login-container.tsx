import { LoginView } from "./login.view";
import { LoginFormFielsType } from "@/types/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { UseToggle } from "@/hooks/use-toggle";
import { firebaseSingninUser } from "@/api/authentification";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const LoginContainer = () => {
  const router = useRouter();
  const { value: isLoading, setValue: setIsLoading } = UseToggle({});

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<LoginFormFielsType>();

  const handleSignInUser = async ({ email, password }: LoginFormFielsType) => {
    const { error } = await firebaseSingninUser(email, password);
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    toast.success("Bienvenue sur APEL Sainte-Marguerite.");
    setIsLoading(false);
    reset();
    router.push("/mon-espace");
  };

  const onSubmit: SubmitHandler<LoginFormFielsType> = async (formData) => {
    setIsLoading(true);
    const { password } = formData;
    if (password.length < 6) {
      setError("password", {
        type: "manual",
        message: "Ton mot de passe doit contenir au moins 6 caractères.",
      });
      setIsLoading(false);

      return;
    }
    handleSignInUser(formData);
  };

  return (
    <LoginView
      form={{
        onSubmit,
        errors,
        isLoading,
        register,
        handleSubmit,
      }}
    />
  );
};
