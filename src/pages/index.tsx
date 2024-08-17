import { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../layouts/landing/Hero';
import Installer from '../layouts/landing/Installer';
import Insights from '../layouts/landing/Insights';
import Donate from '../layouts/landing/Donate';

const index: NextPage = () => (
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

        <Hero />
        <Installer />
        <Insights />
        <Donate />
    </>
);

export default index;
