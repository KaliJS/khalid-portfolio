import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#14b789" />
        </Head>
        <body>
          <a href="#hero" className="skip-link">Skip to content</a>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;


