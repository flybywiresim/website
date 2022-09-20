import type { AppProps } from 'next/app';
import '../styles/global.scss';
import NavBar from '../components/Navigation/NavBar';

const App = ({ Component, pageProps }: AppProps) => (
    <>
        <NavBar />
        <Component {...pageProps} />
    </>
);

export default App;
