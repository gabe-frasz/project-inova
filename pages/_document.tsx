import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="Best Next.js template with bash scripts in the world"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@500;600;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="/favicon.ico"
          rel="shortcut icon"
          type="image/ico"
          sizes="16x16"
        />
        <link rel="apple-touch-icon" href="public/images/apple-icon-180.png" />

        <meta name="theme-color" content="#6419e6" />
        <meta name="apple-mobile-web-app-status-bar" content="#6419e6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        <Script
          crossOrigin="anonymous"
          strategy="beforeInteractive"
          src="https://polyfill.io/v3/polyfill.min.js"
        />

        {/*
            <meta name="application-name" content="Next.js template with bash scripts" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="apple-mobile-web-app-title" content="Next.js template with bash scripts" />

            <meta name="format-detection" content="telephone=no" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="msapplication-config" content="/icons/browserconfig.xml" />
            <meta name="msapplication-TileColor" content="#6419e6" />
            <meta name="msapplication-tap-highlight" content="no" />

            // icons
            <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
            <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />

            // apple-touch icons
            <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png" />
            <link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png" />

            // opengraph meta tags
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:url" content="https://yourdomain.com" />
            <meta name="twitter:title" content="Next.js template with bash scripts" />
            <meta name="twitter:description" content="Best Next.js template with bash scripts in the world" />
            <meta name="twitter:image" content="https://yourdomain.com/icons/android-chrome-192x192.png" />
            <meta name="twitter:creator" content="@John_Doe" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Next.js template with bash scripts" />
            <meta property="og:description" content="Best Next.js template with bash scripts in the world" />
            <meta property="og:site_name" content="Next.js template with bash scripts" />
            <meta property="og:url" content="https://yourdomain.com" />
            <meta property="og:image" content="https://yourdomain.com/icons/apple-touch-icon.png" />
          */}
      </Head>

      <body className="w-full min-h-full bg-base-300 text-base-content font-sans font-medium overflow-x-hidden">
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
