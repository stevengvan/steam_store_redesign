import Layout from "@/components/Layout";
import { StateContext } from "@/context/StateContext";
import "@/styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}
