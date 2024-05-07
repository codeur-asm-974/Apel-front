import { GUEST } from "@/lib/session status";
import { Layout } from "@/ui/components/navigation/layout";
import { Seo } from "@/ui/components/seo";
import { LoginContainer } from "@/ui/modules/authentification/login/Login-container";

export default function Login() {
  return (
    <>
      <Seo
        title=" Connexion sur APEL Sainte-Marguerite"
        description="Page de connexion sur le site de l'APEL Sainte-Marguerite"
      />
      <div>
        <Layout sessionStatus={GUEST}>
          <LoginContainer />
        </Layout>
      </div>
    </>
  );
}
