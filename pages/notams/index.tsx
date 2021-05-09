import React from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { getPostListings, PostListing } from '../../lib/notams/posts';

export type BlogProps = { listings: PostListing[] }

const Blog: React.FC<BlogProps> = ({ listings }) => (
    <>
        <div className="min-h-screen max-w-4xl lg:max-w-6xl mx-auto mb-20 px-page pt-28 lg:pt-20">
            <ul className="mt-20 text-lg cursor-pointer">
                {listings.map(({
                    id,
                    date,
                    title,
                    authors,
                    readingStats,
                    category,
                    metaImage,
                    metaAlt,
                }) => (
                    <Link href={`/notams/${id}`}>
                        <li key={id}>
                            <div className="
                                w-full
                                flex flex-col
                                box-content
                                bg-white
                                mb-5
                                rounded-lg
                                mt-10
                                transform
                                hover:scale-105
                                duration-300
                                shadow-xl
                                overflow-hidden"
                            >
                                {metaImage
                                    ? (
                                        <img
                                            className="mb-4 max-h-80 object-cover"
                                            src={metaImage}
                                            alt={metaAlt}
                                        />
                                    )
                                    : <></>}
                                <div className="px-7 py-4">
                                    <div className="xs:flex flex-row gap-x-4">
                                        {category === 'ANNOUNCEMENTS'
                                            ? (
                                                <p
                                                    className="text-teal-light font-black"
                                                >
                                                    {category}
                                                </p>
                                            )
                                            : (
                                                <p
                                                    className="text-orangutanOrange font-black"
                                                >
                                                    {category}
                                                </p>
                                            )}
                                        <span className="text-black font-medium">
                                            {readingStats.text}
                                        </span>
                                        <p className="text-black font-medium ml-auto">
                                            {`${date.substring(5, 7)}/${date.substring(8)}/${date.substring(0, 4)}`}
                                        </p>
                                    </div>
                                    <h1 className="text-5xl text-black font-bold leading-tight">
                                        {title}
                                    </h1>
                                    <p className="text-xl text-black font-medium mb-3.5">
                                        by
                                        {' '}
                                        {authors.join(', ')}
                                    </p>
                                </div>
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    </>
);

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
    const listings = getPostListings();

    return { props: { listings } };
};

export default Blog;
