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

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="INOVA" />
        <meta
          name="twitter:description"
          content="A INOVA é uma empresa de trabalhos em altura, com tecnologias e estratégias que permitem uma inovadora solução."
        />
        <meta name="twitter:image" content="/og-image-tw.png" />
        <meta name="twitter:url" content="https://inovaalpin.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="INOVA" />
        <meta
          property="og:description"
          content="A INOVA é uma empresa de trabalhos em altura, com tecnologias e estratégias que permitem uma inovadora solução."
        />
        <meta property="og:site_name" content="INOVA Alpin" />
        <meta property="og:image" content="/og-image-fb.png" />
        <meta property="og:url" content="https://inovaalpin.com" />

        <Script
          crossOrigin="anonymous"
          strategy="beforeInteractive"
          src="https://polyfill.io/v3/polyfill.min.js"
        />
      </Head>

      <body className="w-full min-h-full bg-base-300 text-base-content font-sans font-medium overflow-x-hidden">
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
