import React from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { getPostListings, PostListing } from '../../lib/notams/posts';

export type BlogProps = { listings: PostListing[] }

const Blog: React.FC<BlogProps> = ({ listings }) => (
    <div className="min-h-screen max-w-4xl lg:max-w-6xl mx-auto mb-8 px-page pt-28 lg:pt-20">
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
            <Link key={id} href={`/notams/${id}`}>
                <div className="
                                w-full
                                my-12
                                bg-white
                                flex flex-col
                                rounded-lg
                                transition
                                hover:ring-4
                                hover:shadow-lg
                                ring-teal
                                overflow-hidden
                                cursor-pointer"
                >
                    {metaImage
                        ? (
                            <img
                                className="mb-2 max-h-80 object-cover"
                                src={metaImage}
                                alt={metaAlt}
                            />
                        )
                        : <></>}
                    <div className="px-7 py-4">
                        <div className="text-lg flex">
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
                            <span className="text-gray-700 font-medium pl-2">
                                {readingStats.text}
                            </span>
                        </div>
                        <h1 className="text-5xl text-black font-bold leading-tight">
                            {title}
                        </h1>
                        <div className="flex flex-col text-gray-700">
                            <p className="font-medium">
                                Written by
                                {' '}
                                {authors.join(', ')}
                            </p>
                            <p className="font-medium">
                                Posted:
                                {' '}
                                {`${date.substring(0, 4)}/${date.substring(5, 7)}/${date.substring(8)}`}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        ))}
    </div>
);

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
    const listings = getPostListings();

    return { props: { listings } };
};

export default Blog;
