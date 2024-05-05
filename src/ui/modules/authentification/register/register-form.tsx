import { FormsType } from "@/types/form";
import { Button } from "@/ui/design-syteme/button/button";
import { Input } from "@/ui/design-syteme/forms/input";

interface Props {
  form: FormsType;
}

export const RegisterForm = ({ form }: Props) => {
  const { control, onSubmit, errors, isLoading, register, handleSubmit } = form;

  console.log("form", form);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-4">
      <Input
        isLoading={isLoading}
        placeholder="johndo@gmail.com"
        register={register}
        errors={errors}
        errorMsg="Tu dois renseigner ce champ"
        id="email"
        type="email"
      />
      <Input
        isLoading={isLoading}
        placeholder="Mot de passe"
        register={register}
        errors={errors}
        errorMsg="tu dois renseigner ce champ"
        id="password"
        type="password"
      />
      <Input
        isLoading={isLoading}
        placeholder="Comment avez-vous entendu parler de nous ?"
        register={register}
        errors={errors}
        errorMsg="tu dois renseigner ce champ"
        id="how_did_hear"
      />
      <Button isLoading={isLoading} type="submit" fullWith>
        S&apos;inscrire
      </Button>
    </form>
  );
};
