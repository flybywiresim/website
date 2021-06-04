import Head from 'next/head';
import type { AppProps } from 'next/app';
import { NavBar } from '../components/utils/NavBar';
import { ScrollToTopButton } from '../components/utils/ScrollToTopButton';
import { Footer } from '../components/utils/Footer';
import '../styles/main.scss';

const App = ({ Component, pageProps }: AppProps) => (
    <div className="root">
        <Head>
            <meta charSet="utf-8" />

            <meta name="theme-color" content="#00c2cc" />
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
        <ScrollToTopButton />
        <Component {...pageProps} />
        <Footer />
    </div>
);

export default App;
