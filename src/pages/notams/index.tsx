import { GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';
import { getPostListings, PostListing } from '../../lib/notams/posts';

export type BlogProps = { listings: PostListing[] }

const Blog = ({ listings }: BlogProps) => (
    <section className="px-8 min-h-screen bg-gradient-to-r from-navy-dark to-navy">
        <div className="grid grid-cols-1 gap-8 py-14 pt-24 mx-auto max-w-[1470.47px] lg:grid-cols-2 xl:grid-cols-3">
            <h2>NOTAMs</h2>
            {listings.map((listing, index) => {
                if (index === 0) {
                    return <LatestNotam {...listing} />;
                }
                return <OtherNotam {...listing} />;
            })}
        </div>
    </section>
);

const LatestNotam: FC<PostListing> = ({
    id,
    date,
    title,
    summary,
    authors,
    readingStats,
    category,
    metaImage,
    metaAlt,
}) => (
    <Link key={id} href={`/notams/${id}`}>
        <div className={`
                                grid 
                                lg:col-span-2
                                lg:grid-cols-2
                                xl:col-span-3 
                                h-[637.14px]
                                bg-navy-dark
                                rounded-lg
                                transition
                                overflow-hidden
                                hover:ring-2
                                hover:shadow-lg
                                hover:ring-teal
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
            <div className="p-6">
                <div className="flex flex-wrap gap-x-4 justify-end font-manrope md:text-lg">
                    {category === 'Announcements'
                        ? (
                            <p
                                className="self-center py-1 px-4 text-lg font-semibold text-cyan bg-cyan/10 rounded-md"
                            >
                                {category}
                            </p>
                        )
                        : (
                            <p
                                className="self-center py-1 px-4 text-lg font-semibold text-utility-yellow bg-utility-yellow/10 rounded-md"
                            >
                                {category}
                            </p>
                        )}
                    <span className="self-center py-1 px-4 text-lg font-semibold text-utility-green bg-utility-green/10 rounded-md">Latest</span>
                </div>
                <div className="flex flex-col col-span-1 justify-center items-start px-8 pb-6 w-full h-full text-left lg:items-center lg:text-center xl:px-28">
                    <h1>
                        {title}
                    </h1>
                    <div className="flex mt-3 space-x-5">
                        <p className="text-gray-400">
                            Posted:
                            {' '}
                            {`${date.substring(0, 4)}/${date.substring(5, 7)}/${date.substring(8)}`}
                        </p>
                        <p className="self-center text-gray-300">
                            {readingStats.text}
                        </p>
                    </div>
                    <div className="flex flex-col py-6 text-xl">
                        <p className="font-semibold">
                            Written by
                            {' '}
                            {authors.join(', ')}
                        </p>
                    </div>
                    <p className="leading-8 opacity-90">
                        {summary}
                    </p>
                </div>
            </div>
        </div>
    </Link>
);

const OtherNotam: FC<PostListing> = ({
    id,
    date,
    title,
    // authors,
    category,
    metaImage,
    metaAlt,
}) => (
    <Link key={id} href={`/notams/${id}`}>
        <div className={`
                                grid 
                                grid-row 
                                bg-navy-dark
                                rounded-lg
                                transition
                                overflow-hidden
                                hover:ring-2
                                hover:shadow-lg
                                hover:ring-teal
                                cursor-pointer`}
        >
            {metaImage
                ? (
                    <Image
                        width={467.73}
                        height={273.31}
                        objectFit="cover"
                        draggable="false"
                        src={metaImage}
                        alt={metaAlt}
                    />
                )
                : <></>}
            <div className="px-5 pt-5 pb-8 h-[167.38px] md:px-10">
                <div className="flex flex-wrap gap-x-4 justify-between font-manrope text-md">
                    <p className="text-sm text-gray-400">
                        Posted:
                        {' '}
                        {`${date.substring(0, 4)}/${date.substring(5, 7)}/${date.substring(8)}`}
                    </p>
                    {category === 'Announcements'
                        ? (
                            <p
                                className="self-center py-1 px-4 text-xs font-semibold text-cyan bg-cyan/10 rounded-md"
                            >
                                {category}
                            </p>
                        )
                        : (
                            <p
                                className="self-center py-1 px-4 text-xs font-semibold text-utility-yellow bg-utility-yellow/10 rounded-md"
                            >
                                {category}
                            </p>
                        )}
                </div>
                <h1 className="text-3xl xl:text-4xl">
                    {title}
                </h1>
                <div className="flex flex-col">
                    <p className="font-semibold">
                        Authors
                    </p>
                </div>
            </div>
        </div>
    </Link>
);

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
    const listings = getPostListings();

    return { props: { listings } };
};

export default Blog;
