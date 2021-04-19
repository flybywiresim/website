import React from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { getPostListings, PostListing } from '../../lib/notams/posts';

export type BlogProps = { listings: PostListing[] }

const Blog: React.FC<BlogProps> = ({ listings }) => (
    <>
        <div className="min-h-screen max-w-6xl mx-auto px-page pt-28 lg:pt-40">
            <h1 className="text-teal text-5xl">
                NOTAMs
            </h1>
            <p className="text-xl mt-2">
                Updates and blog posts from the FlyByWire Team
            </p>

            <ul className="mt-20 text-lg cursor-pointer">
                {listings.map(({ id, date, title, authors, readingStats }) => (
                    <Link href={`/notams/${id}`}>
                        <li key={id}>
                            <div className="
                                w-full
                                flex flex-col
                                box-content
                                hover:bg-navy-lighter
                                transition-colors duration-200
                                px-7 py-4 -ml-7 mb-5
                                rounded-lg"
                            >

                                <h1 className="
                                    text-5xl text-teal-300 font-semibold lg:text-justify leading-tight
                                    hover:text-teal-700
                                    transition-colors duration-100
                                    mb-2.5"
                                >
                                    {title}
                                </h1>
                                <div
                                    className="w-full flex flex-row flex-wrap justify-between gap-x-12 text-gray-400 font-mono mb-3.5"
                                >
                                    <span className="text-xl text-gray-300 font-medium">
                                        {readingStats.text}
                                    </span>
                                    <div className="flex flex-row gap-x-8">
                                        <p className="text-xl font-medium">
                                            {date}
                                        </p>
                                        <p className="text-xl text-gray-300 font-medium">
                                            {authors.join(', ')}
                                        </p>
                                    </div>
                                </div>

                                <img
                                    className="mt-5 mb-4 rounded-lg"
                                    src="https://via.placeholder.com/500x250"
                                    alt="bruh"
                                />
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
