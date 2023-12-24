import { GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getPostListings, PostListing } from '../../lib/notams/posts';
import Container from '../../components/utils/Container';

export type BlogProps = { listings: PostListing[] }

const Blog = ({ listings }: BlogProps) => (
    <section className="min-h-screen bg-midnight">
        <Container
            className="grid max-w-7xl gap-8 py-14 pt-24 md:grid-cols-2"
        >
            {listings.map(({
                id,
                date,
                title,
                authors,
                readingStats,
                category,
                metaImage,
                metaAlt,
            }, index) => (
                <Link key={id} href={`/notams/${id}`}>
                    <div className={`
                                ${index === 0 ? 'md:col-span-2' : 'brightness-90 hover:brightness-100'}
                                flex
                                cursor-pointer flex-col
                                overflow-hidden
                                rounded-lg
                                bg-blue-dark-contrast
                                ring-1
                                ring-gray-700
                                transition
                                hover:shadow-lg
                                hover:ring-2
                                hover:ring-teal`}
                    >
                        {metaImage
                            ? (
                                <Image
                                    width={1000}
                                    height={350}
                                    objectFit="cover"
                                    draggable="false"
                                    src={metaImage}
                                    alt={metaAlt}
                                />
                            )
                            : <></>}
                        <Container className="py-7">
                            <div className="text-md flex flex-wrap gap-x-4 md:text-lg">
                                {category === 'ANNOUNCEMENTS'
                                    ? (
                                        <p
                                            className="font-bold text-teal-light"
                                        >
                                            {category}
                                        </p>
                                    )
                                    : (
                                        <p
                                            className="text-orangutanOrange font-bold"
                                        >
                                            {category}
                                        </p>
                                    )}
                                {index === 0
                                    ? (
                                        <span className="self-center rounded-md bg-gray-700 px-1 text-sm font-semibold ring-2 ring-gray-500">LATEST</span>
                                    ) : <></>}
                                <em className="self-end text-gray-300">
                                    {readingStats.text}
                                </em>
                            </div>
                            <h1>
                                {title}
                            </h1>
                            <div className="flex flex-col">
                                <p className="font-semibold">
                                    Written by
                                    {' '}
                                    {authors.join(', ')}
                                </p>
                                <em className="text-gray-400">
                                    Posted:
                                    {' '}
                                    {`${date.substring(0, 4)}/${date.substring(5, 7)}/${date.substring(8)}`}
                                </em>
                            </div>
                        </Container>
                    </div>
                </Link>
            ))}
        </Container>
    </section>
);

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
    const listings = getPostListings();

    return { props: { listings } };
};

export default Blog;
