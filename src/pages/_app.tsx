import "@/styles/global.css";
import "@/styles/tailwind.css";

import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { DefaultSeo } from "next-seo";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <DefaultSeo
      title={"Husqvarna Catálogo 2025"}
      description={"Husqvarna Catálogo 2025"}
      // canonical={'https://husqvarna.com'}
      // openGraph={{
      //   title: 'Husqvarna',
      //   description:
      //     'Husqvarna Otoño 2024',
      //   url: 'https://www.husqvarna.com',
      //   locale: 'es',
      //   site_name: 'www.husqvarna.com',
      //   type: 'website',
      //   images: [
      //     {
      //       url: `https://www.husqvarna.com/images/og.jpg`,
      //       width: 1000,
      //       height: 500,
      //       alt: 'Husqvarna Otoño 2024',
      //     },
      //   ],
      // }}
      // twitter={{
      //   handle: '@husqvarna',
      //   site: '@husqvarna',
      //   cardType: 'summary_large_image',
      // }}
    />
    <Component {...pageProps} />
  </>
);

export default appWithTranslation(MyApp);
