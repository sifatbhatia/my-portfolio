import Document, { Head, Html, Main, NextScript } from 'next/document';
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>




          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#2b5797" />

          <meta property="og:title" content="Portfolio by Sifat Bhatia" />
          <meta property="og:image" content="https://i.ibb.co/PGr4XdV/Screenshot-2022-04-26-211107.png" />
          <meta property="og:image:secure_url" content="https://i.ibb.co/PGr4XdV/Screenshot-2022-04-26-211107.png" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="400" />
          <meta property="og:image:height" content="300" />
          <meta property="og:image:alt" content="Sifat Bhatia" />
          <meta name="theme-color"
            content="#ffffff"
            media="(prefers-color-scheme: light)" />
          <meta name="theme-color"
            content="black"
            media="(prefers-color-scheme: dark)" />




        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}