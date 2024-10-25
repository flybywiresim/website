import { NextPage } from 'next';
import Image from 'next/legacy/image';
import Section from '../../components/Utils/Section';
import Container from '../../components/Utils/Container';
import Faqs from '../../components/Faqs/Faqs';
import { frequentlyAsked } from '../../constants/frequentlyAsked';

const BackgroundImage = () => (
    <div className="absolute left-0 top-0 -z-10 h-144 w-screen opacity-90">
        <Image src="/pages/faq/faq.png" layout="fill" objectFit="cover" />
    </div>
);

const FAQ: NextPage = () => (
    <>
        <Section className="h-144 flex flex-col justify-center bg-black/50 bg-gradient-to-b from-primary/30 to-secondary/100">
            <BackgroundImage />
            <Container className="h-144 flex flex-col justify-center align-middle text-center">
                <div className="">
                    <h2 className="pb-8">Looking for some help?</h2>
                    <p>
                        We have you covered! Below we have a wide coverage of frequently asked questions, along with
                        each of their answers
                    </p>
                </div>
            </Container>
        </Section>
        <Section theme="dark">
            <Container>
                {frequentlyAsked.map((faq, index) => (
                    <Faqs key={index} question={faq.question} />
                ))}
            </Container>
        </Section>
    </>
);

export default FAQ;
