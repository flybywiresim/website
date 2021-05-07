import React from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { getPostListings, PostListing } from '../../lib/notams/posts';

export type BlogProps = { listings: PostListing[] }

const Blog: React.FC<BlogProps> = ({ listings }) => (
    <>
        <div className="min-h-screen max-w-4xl lg:max-w-6xl mx-auto px-page pt-28 lg:pt-40">
            <ul className="mt-20 mb-20 text-lg cursor-pointer">
                {listings.map(({ id, date, title, authors, readingStats }) => (
                    <Link href={`/notams/${id}`}>
                        <li key={id}>
                            <div className="
                                w-full
                                flex flex-col
                                box-content
                                bg-white
                                -ml-7 mb-5
                                rounded-lg
                                mt-10
                                shadow-xl
                                overflow-hidden"
                            >
                                {/* TODO add new font weights and create tags for markdown files such as ANNOUNCEMENTS, UPDATES, URGENT etc. */}
                                <img
                                    className="mb-4 max-h-80 object-cover"
                                    src="/img/a32nxwing.png"
                                    alt="bruh"
                                />
                                <div className="px-7 py-4">
                                    <div className="flex flex-col-2 gap-x-4">
                                        <p className="text-teal-light font-black">ANNOUNCEMENTS</p>
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
