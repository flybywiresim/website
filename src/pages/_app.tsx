import type { AppProps } from 'next/app';
import '../styles/global.scss';
import Head from 'next/head';
import NavBar from '../components/Navigation/NavBar';
import Footer from '../components/Navigation/Footer';
import ScrollToTopButton from '../components/Button/ScrollToTopButton';

const App = ({ Component, pageProps }: AppProps) => (
    <>
        <Head>
            <meta charSet="utf-8" />

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
    </>
);

export default App;
