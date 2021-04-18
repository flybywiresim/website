import React from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getSortedPostsData, getSortedPostsDataType } from '../../lib/notams/posts';

const Blog = ({ allPostsData }: { allPostsData: getSortedPostsDataType[]}) => (
    <>
        <div className="min-h-screen max-w-6xl mx-auto px-page pt-40">
            <h1 className="text-teal text-5xl">NOTAMs</h1>
            <p className="text-lg">Updates and blog posts from the FlyByWire Team</p>

            <ul className="mt-20 text-lg">
                {allPostsData.map(({ id, date, title, authors, readingStats }) => (
                    <li key={id}>
                        <div className="
                                flex flex-col
                                py-16 first:pt-0 last:pb-0 mb-5"
                        >
                            <Link href={`/notams/${id}`}>
                                <h1 className="
                                    text-5xl text-teal-300 font-semibold lg:text-justify leading-tight
                                    hover:text-teal-700
                                    transition-colors duration-100
                                    mb-2.5
                                    cursor-pointer"
                                >
                                    {title}
                                </h1>
                            </Link>
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
                ))}
            </ul>
        </div>
    </>
);

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData();

    return { props: { allPostsData } };
};

export default Blog;
