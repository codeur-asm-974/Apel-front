import { Layout } from "@/ui/components/navigation/layout";
import { Seo } from "@/ui/components/seo";
import { RegisterContaire } from "@/ui/modules/authentification/register/register-contaire";

export default function Register() {
  return (
    <>
      <Seo
        title=" Connexion sur APEL Sainte-Marguerite"
        description="Page d'inscription sur le site de l'APEL Sainte-Marguerite"
      />
      <div>
        <Layout>
          <RegisterContaire />
        </Layout>
      </div>
    </>
  );
}
