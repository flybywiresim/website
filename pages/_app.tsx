import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { NavBar } from '../components/utils/NavBar';
import { Footer } from '../components/utils/Footer';
import '../styles/main.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
    <div className="root">
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>FlyByWire Simulations</title>
        </Head>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
    </div>
);

export default MyApp;
