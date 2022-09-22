import { NextPage } from 'next';
import Hero from '../layouts/landing/hero';
import Installer from '../layouts/landing/installer';

const index: NextPage = () => (
    <>
        <Hero />
        <Installer />
    </>
);

export default index;
