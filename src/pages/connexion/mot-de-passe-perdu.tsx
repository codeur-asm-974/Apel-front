import { Layout } from "@/ui/components/navigation/layout";
import { Seo } from "@/ui/components/seo";
import { ForgetPAsswordContainer } from "@/ui/modules/authentification/forget-passeword/forget-password-container";

export default function ForgetPassword() {
  return (
    <>
      <Seo
        title=" Connexion sur APEL Sainte-Marguerite"
        description="Site de l'APEL Sainte-Marguerite"
      />
      <div>
        <Layout>
          <ForgetPAsswordContainer />
        </Layout>
      </div>
    </>
  );
}
