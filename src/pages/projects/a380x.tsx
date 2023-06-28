import { NextPage } from 'next';
import Section from '../../components/Utils/Section';
import Container from '../../components/Utils/Container';

const A380X: NextPage = () => (
    <Section theme="dark">
        <Container>
            <h4>Our Upcoming</h4>
            <h1>A380X</h1>
            <p>The A380X is the latest project aiming to create the first high fidelity Airbus A380 to Microsoft Flight Simulator.</p>

            <div className="py-8">
                <h3>More to come.</h3>
            </div>
        </Container>
    </Section>
)

export default A380X;