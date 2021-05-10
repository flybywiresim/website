import React from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { getPostListings, PostListing } from '../../lib/notams/posts';

export type BlogProps = { listings: PostListing[] }

const Blog: React.FC<BlogProps> = ({ listings }) => (
    <section className="min-h-screen">
        <div
            className="max-w-4xl lg:max-w-6xl grid grid-cols-1 md:grid-cols-2 auto-rows-auto gap-8 mx-auto px-page py-14 pt-28"
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
                                ${index === 0 ? 'md:col-span-2' : 'filter md:brightness-90 hover:brightness-100'}
                                bg-blue-dark-contrast
                                flex flex-col
                                rounded-lg
                                transition
                                ring
                                ring-teal-300
                                hover:shadow-lg
                                hover:ring-teal
                                overflow-hidden
                                cursor-pointer`}
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
                                <span className="text-gray-300 pl-2">
                                    {readingStats.text}
                                </span>
                            </div>
                            <h1 className="text-5xl text-white font-bold leading-tight">
                                {title}
                            </h1>
                            <div className="flex text-gray-200">
                                <div className="flex flex-col">
                                    <p className="font-semibold">
                                        Written by
                                        {' '}
                                        {authors.join(', ')}
                                    </p>
                                    <p className="text-gray-400">
                                        Posted:
                                        {' '}
                                        {`${date.substring(0, 4)}/${date.substring(5, 7)}/${date.substring(8)}`}
                                    </p>
                                </div>
                                {index === 0
                                    ? (
                                        <p className="text-2xl self-center font-semibold ml-auto">LATEST</p>
                                    ) : <></>}
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </section>
);

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
    const listings = getPostListings();

    return { props: { listings } };
};

export default Blog;
