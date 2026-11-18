import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#07182F" />
        <link rel="icon" href="/Universal.github.io/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/Universal.github.io/images/logo/ufi-logo.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
