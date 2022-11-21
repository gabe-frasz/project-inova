import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

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
          rel="shortcut icon"
          type="image/png"
          sizes="16x16"
          href="/favicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/touch-icon-152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/touch-icon-167.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/touch-icon-180.png"
        />

        <meta name="theme-color" content="#EB5E28" />
        <meta name="apple-mobile-web-app-status-bar" content="#EB5E28" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        <meta name="twitter:image" content="/og-image-tw.png" />
        <meta property="og:image" content="/og-image-fb.png" />

        <Script
          crossOrigin="anonymous"
          strategy="beforeInteractive"
          src="https://polyfill.io/v3/polyfill.min.js"
        />

        {/*
            // opengraph meta tags
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:url" content="https://yourdomain.com" />
            <meta name="twitter:title" content="Next.js template with bash scripts" />
            <meta name="twitter:description" content="Best Next.js template with bash scripts in the world" />
            <meta name="twitter:creator" content="@John_Doe" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Next.js template with bash scripts" />
            <meta property="og:description" content="Best Next.js template with bash scripts in the world" />
            <meta property="og:site_name" content="Next.js template with bash scripts" />
            <meta property="og:url" content="https://yourdomain.com" />
          */}
      </Head>

      <body className="w-full min-h-full bg-base-300 text-base-content font-sans font-medium overflow-x-hidden">
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
