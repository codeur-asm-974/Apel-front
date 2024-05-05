import { Layout } from "@/ui/components/navigation/layout";
import { Seo } from "@/ui/components/seo";
import { UserACcountContainer } from "@/ui/modules/user-profile/user-account/user-account-container";

export default function Login() {
  return (
    <>
      <Seo title=" Mon Compte" description="Mon espace privé" />
      <div>
        <Layout>
          <UserACcountContainer />
        </Layout>
      </div>
    </>
  );
}
