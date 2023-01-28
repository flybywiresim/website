import type { AppProps } from 'next/app';
import '../styles/global.scss';
import NavBar from '../components/Navigation/NavBar';
import Footer from '../components/Navigation/Footer';
import ScrollToTopButton from '../components/Button/ScrollToTopButton';

const App = ({ Component, pageProps }: AppProps) => (
    <>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
        <ScrollToTopButton />
    </>
);

export default App;
