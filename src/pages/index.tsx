import { NextPage } from 'next';
import Hero from '../layouts/landing/Hero';
import Installer from '../layouts/landing/Installer';
import Insights from '../layouts/landing/Insights';

const index: NextPage = () => (
    <>
        <Hero />
        <Installer />
        <Insights />
    </>
);

export default index;
