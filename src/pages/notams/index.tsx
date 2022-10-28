import { GetStaticProps } from 'next';
import Link from 'next/link';
import Section from '../../components/Utils/Section';
import Container from '../../components/Utils/Container';
import Card from '../../components/Notam/Card';
import { getPostListings, PostListing } from '../../lib/notams/posts';

export type BlogProps = { listings: PostListing[] }

const index = ({ listings }: BlogProps) => (
    <Section theme="dark">
        <Container>
            <h2>NOTAMs</h2>
            <div className="my-4 grid grid-cols-1 gap-4">
                {listings.map(({
                    id,
                    category,
                    title,
                    date,
                    description,
                    metaImage,
                    metaAlt,
                    readingStats,
                }) => (
                    <Link key={id} href={`/notams/${id}`}>
                        <Card
                            category={category}
                            title={title}
                            date={date}
                            description={description}
                            metaImage={metaImage}
                            metaAlt={metaAlt}
                            readingStats={readingStats.text}
                        />
                    </Link>
                ))}
            </div>
        </Container>
    </Section>
);

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
    const listings = getPostListings();

    return { props: { listings } };
};

export default index;
