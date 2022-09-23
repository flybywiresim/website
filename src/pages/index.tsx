import { NextPage } from 'next';
import Hero from '../layouts/landing/Hero';
import Installer from '../layouts/landing/Installer';
import Insights from '../layouts/landing/Insights';
import Donate from '../layouts/landing/Donate';

const index: NextPage = () => (
    <>
        <Hero />
        <Installer />
        <Insights />
        <Donate />
    </>
);

export default index;
