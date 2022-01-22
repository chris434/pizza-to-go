import "../styles/globals.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

import Layout from "../components/Layout";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const router: any = useRouter();
  console.log(router);

  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
