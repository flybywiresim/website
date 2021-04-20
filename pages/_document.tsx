import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import React from 'react';

const GitHubPages = () => {
    // Single Page Apps for GitHub Pages
    // MIT License
    // https://github.com/rafgraph/spa-github-pages
    // This script checks to see if a redirect is present in the query string,
    // converts it back into the correct url and adds it to the
    // browser's history using window.history.replaceState(...),
    // which won't cause the browser to attempt to load the new url.
    // When the single page app is loaded further down in this file,
    // the correct url will be waiting in the browser's history for
    // the single page app to route accordingly.
    // eslint-disable-next-line func-names
    (function (l) {
        if (l.search[1] === '/') {
            const decoded = l.search.slice(1)
                .split('&')
                .map((s) => s.replace(/~and~/g, '&'))
                .join('?');
            window.history.replaceState(null, '',
                l.pathname.slice(0, -1) + decoded + l.hash);
        }
    }(window.location));
};

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="theme-color" content="#1D2838" />
                    <meta
                        name="description"
                        content="Official FlyByWire Simulations website, an open-source community providing high quality addons for Microsoft Flight Simulator."
                    />
                    <meta
                        name="og:title"
                        content="FlyByWire Simulations"
                    />
                    <meta
                        name="og:description"
                        content="Official FlyByWire Simulations website, an open-source community providing high quality addons for Microsoft Flight Simulator."
                    />
                    <meta
                        name="og:image"
                        content="/A32NX_Front.jpeg"
                    />
                    <script type="text/javascript">
                        {GitHubPages}
                    </script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
