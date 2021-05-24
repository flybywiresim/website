import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class AppDocument extends Document {
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
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default AppDocument;
