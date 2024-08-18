import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import '../styles/global.scss';
import Head from 'next/head';
import NavBar from '../components/Navigation/NavBar';
import Footer from '../components/Navigation/Footer';
import ScrollToTopButton from '../components/Button/ScrollToTopButton';

const myFont = localFont({ src: './InterVariable.woff2', variable: '--font-inter' });

const App = ({ Component, pageProps }: AppProps) => (
    <div className={myFont.variable}>
        <Head>
            <meta charSet="utf-8" />

            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/meta/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/meta/favicon-16x16.png" />
            <link rel="manifest" href="/meta/site.webmanifest" />
            <link rel="mask-icon" href="/meta/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#2b5797" />
            <meta name="theme-color" content="#00E0FE" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <title>FlyByWire Simulations</title>

            <meta
                key="description"
                name="description"
                content="Official FlyByWire Simulations website, an open-source community providing high quality addons for Microsoft Flight Simulator."
            />
            <meta
                key="og:title"
                name="og:title"
                content="FlyByWire Simulations"
            />
            <meta
                key="og:description"
                name="og:description"
                content="Official FlyByWire Simulations website, an open-source community providing high quality addons for Microsoft Flight Simulator."
            />
            <meta
                key="og:image"
                name="og:image"
                content="/A32NX_Front.jpeg"
            />
        </Head>

        <NavBar />
        <Component {...pageProps} />
        <Footer />
        <ScrollToTopButton />
    </div>
);

export default App;
