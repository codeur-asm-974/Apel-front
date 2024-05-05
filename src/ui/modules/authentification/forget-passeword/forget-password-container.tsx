import { useState } from "react";
import { ForgetPAssewordView } from "./forget-passeword-view";
import { ForgetPasswordFormFielsType } from "@/types/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { UseToggle } from "@/hooks/use-toggle";
import { sendEmailToResetPassword } from "@/api/authentification";
import { toast } from "react-toastify";
import { set } from "firebase/database";
import { useRouter } from "next/router";

export const ForgetPAsswordContainer = () => {
  const router = useRouter();
  const { value: isLoading, setValue: setIsLoading } = UseToggle({});

  const {
    handleSubmit,
    formState: { errors },
    register,

    reset,
  } = useForm<ForgetPasswordFormFielsType>();

  const handleResetpassword = async ({
    email,
  }: ForgetPasswordFormFielsType) => {
    const { error } = await sendEmailToResetPassword(email);
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    toast.success(`Un email de réinitialisation a été envoyé à ${email}`);
    setIsLoading(false);
    reset();
    router.push("/connexion");
  };

  const onSubmit: SubmitHandler<ForgetPasswordFormFielsType> = async (
    formData
  ) => {
    setIsLoading(true);
    handleResetpassword(formData);
  };
  return (
    <ForgetPAssewordView
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
