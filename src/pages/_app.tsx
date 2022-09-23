import type { AppProps } from 'next/app';
import '../styles/global.scss';
import NavBar from '../components/Navigation/NavBar';
import Footer from '../components/Navigation/Footer';

const App = ({ Component, pageProps }: AppProps) => (
    <>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
    </>
);

export default App;
