import { FormsType } from "@/types/form";
import { Button } from "@/ui/design-syteme/button/button";
import { Input } from "@/ui/design-syteme/forms/input";

interface Props {
  form: FormsType;
}

export const ForgetPAswordForm = ({ form }: Props) => {
  const { onSubmit, errors, isLoading, register, handleSubmit } = form;
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

      <Button isLoading={isLoading} type="submit" fullWith>
        Connexion
      </Button>
    </form>
  );
};
