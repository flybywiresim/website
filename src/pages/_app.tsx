import Head from 'next/head';
import type { AppProps } from 'next/app';
import { NavBar } from '../components/utils/NavBar';
import { ScrollToTopButton } from '../components/utils/ScrollToTopButton';
import { Footer } from '../components/utils/Footer';
import '../styles/main.scss';

const App = ({ Component, pageProps }: AppProps) => (
    <div className="root">
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>FlyByWire Simulations</title>
        </Head>
        <NavBar />
        <ScrollToTopButton />
        <Component {...pageProps} />
        <Footer />
    </div>
);

export default App;
