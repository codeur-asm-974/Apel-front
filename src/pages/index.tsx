import { Layout } from "@/ui/components/navigation/layout";
import { Seo } from "@/ui/components/seo";
import { LandingPageContainer } from "@/ui/modules/landing-page/components/landing-page-container";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Seo
        title="APEL Sainte-Marguerite"
        description="Site de l'APEL Sainte-Marguerite"
      />
      <div>
        <Layout>
          <LandingPageContainer />
        </Layout>
      </div>
    </>
  );
}
