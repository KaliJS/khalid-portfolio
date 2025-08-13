import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" data-theme="dark">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#14b789" />
          <link rel="manifest" href="/manifest.json" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var theme = stored || (prefersDark ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
            }}
          />
        </Head>
        <body>
          <a href="#hero" className="skip-link">Skip to content</a>
          <div id="theme-status" role="status" aria-live="polite" style={{position:'absolute',left:'-9999px',height:0,width:0,overflow:'hidden'}}></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;


