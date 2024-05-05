import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterView } from "./register-View";
import { RegisterFormFielsType } from "@/types/form";
import { toast } from "react-toastify";

import { set } from "firebase/database";
import { firebaseCreateUser } from "@/api/authentification";
import { UseToggle } from "@/hooks/use-toggle";

export const RegisterContaire = () => {
  const { value: isLoading, setValue: setIsLoading } = UseToggle({});

  const {
    handleSubmit,

    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<RegisterFormFielsType>();

  const handleCreateUserAuthentification = async ({
    email,
    password,
    how_did_hear,
  }: RegisterFormFielsType) => {
    const { data, error } = await firebaseCreateUser(email, password);
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    //@ todo: save user document

    toast.success("Votre compte a été créé avec succès.");
    setIsLoading(false);
    reset;
  };

  const onSubmit: SubmitHandler<RegisterFormFielsType> = async (formData) => {
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
    handleCreateUserAuthentification(formData);
  };
  return (
    <RegisterView
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
