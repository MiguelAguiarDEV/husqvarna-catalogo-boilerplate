import { NextSeo } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";

const Meta = () => {
  const router = useRouter();
  const locale = router.query.locale as string;

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="preload"
          href="/font/husqvarnagothic-bold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/font/HusqvarnaGothic-Regular.otf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/favicon/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon/favicon-16x16.png`}
          key="icon16"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon/favicon.ico`}
          key="favicon"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href={`${router.basePath}/favicon/android-chrome-192x192.png`}
          key="icon192"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href={`${router.basePath}/favicon/android-chrome-512x512.png`}
          key="icon512"
        />
        {/* eslint-disable-next-line  */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${
              locale === "pt" ? "GTM-5RF75FJ" : "GTM-P93MLMX"
            }');`,
          }}
        />
      </Head>
      <NextSeo title={"Husqvarna 2025"} />
    </>
  );
};

export { Meta };
