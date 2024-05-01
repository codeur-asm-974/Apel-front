import { Seo } from "@/ui/components/seo";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Seo
        title="APEL Sainte-Marguerite"
        description="Site de l'APEL Sainte-Marguerite"
      />
      <div>
        <h1>Hello, world!</h1>
      </div>
    </>
  );
}
