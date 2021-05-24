import { FC } from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getPostListings, PostListing } from '../../lib/notams/posts';

export type BlogProps = { listings: PostListing[] }

const Blog: FC<BlogProps> = ({ listings }) => (
    <section className="min-h-screen bg-midnight">
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
                                ring-1
                                hover:ring-2
                                ring-gray-700
                                hover:shadow-lg
                                hover:ring-teal
                                overflow-hidden
                                cursor-pointer`}
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
                        <div className="px-page py-7">
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
                                {index === 0
                                    ? (
                                        <span className="ml-2 mr-1 px-1 sm:px-2 bg-gray-700 ring-2 ring-gray-500 rounded-md text-sm self-center font-semibold">LATEST</span>
                                    ) : <></>}
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
