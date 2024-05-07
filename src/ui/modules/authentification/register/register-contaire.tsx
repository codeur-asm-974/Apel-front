import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterView } from "./register-View";
import { RegisterFormFielsType } from "@/types/form";
import { toast } from "react-toastify";

import { set } from "firebase/database";
import {
  firebaseCreateUser,
  sendEmailVerificationProcedure,
} from "@/api/authentification";
import { UseToggle } from "@/hooks/use-toggle";
import { firestoreCreateDocument } from "@/api/firestore";

export const RegisterContaire = () => {
  const { value: isLoading, setValue: setIsLoading } = UseToggle({});

  const {
    handleSubmit,

    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<RegisterFormFielsType>();

  const handelCreateUserDocument = async (
    collectionName: string,
    datadocumentID: string,
    document: object
  ) => {
    const { error } = await firestoreCreateDocument(
      collectionName,
      datadocumentID,
      document
    );
    if (error) {
      toast.error(error.message);
      setIsLoading(false);
      return;
    }

    toast.success("Votre compte a été créé avec succès.");
    setIsLoading(false);
    reset();
    sendEmailVerificationProcedure();
  };

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
    const userDocumentData = {
      email: email,
      how_did_hear: how_did_hear,
      uid: data.uid,
      creation_date: new Date(),
    };

    handelCreateUserDocument("users", data.uid, userDocumentData);
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
