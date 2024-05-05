import { use, useEffect, useState } from "react";
import { LoginView } from "./login.view";
import { LoginFormFielsType, RegisterFormFielsType } from "@/types/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase-config.js";
import { UseToggle } from "@/hooks/use-toggle";
import { firebaseSingninUser } from "@/api/authentification";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const LoginContainer = () => {
  const router = useRouter();
  const { value: isLoading, setValue: setIsLoading } = UseToggle({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log("user", user);
        // ...
      } else {
        console.log("tu n'es pas connecté");
        // User is signed out
        // ...
      }
    });
  }, []);
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
