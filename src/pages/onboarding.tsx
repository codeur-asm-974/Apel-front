import { REGISTERED } from "@/lib/session status";
import { Layout } from "@/ui/components/navigation/layout";
import { Seo } from "@/ui/components/seo";

export default function Onboarding() {
  return (
    <>
      <Seo title="OnBoarding" description="Page de onboarding"></Seo>

      <Layout sessionStatus={REGISTERED}>
        <div className="flex items-center justify-center pt-20 py-40">
          welcom sur le Onboarding
        </div>
      </Layout>
    </>
  );
}
