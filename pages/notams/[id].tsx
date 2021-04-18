import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import { getAllPostIds, getPostData } from '../../lib/notams/posts';

// Shamelessly stolen from tabler until the icons are updated
const BackIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-narrow-left text-gray-400"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="5" y1="12" x2="19" y2="12" />
        <line x1="5" y1="12" x2="9" y2="16" />
        <line x1="5" y1="12" x2="9" y2="8" />
    </svg>
);

const Post = ({ postData }) => (
    <div className="min-h-screen max-w-6xl mx-auto px-page pt-40 pb-10">
        <Link href="/notams">
            <div className="flex flex-row items-center">
                <BackIcon />
                <span className="text-gray-400 hover:text-gray-500 transition-colors duration-100 cursor-pointer">Back</span>
            </div>
        </Link>
        <h1 className="text-5xl font-semibold lg:text-justify leading-tight text-teal-300 mt-5">{postData.title}</h1>
        <div
            className="w-full flex flex-row flex-wrap justify-between gap-x-12 text-gray-400 font-mono mb-3.5"
        >
            <span className="text-xl text-gray-300 font-medium">
                {postData.readingStats.text}
            </span>
            <div className="flex flex-row gap-x-8">
                <p className="text-xl font-medium">
                    {postData.date}
                </p>
            </div>
        </div>
        <p className="ml-5 text-xl text-gray-400 font-mono">
            {`Written by: ${postData.authors.join(', ')}`}
        </p>
        <div className="mt-5 p-5 text-xl bg-navy-light rounded-sm">
            <div
                className="flex flex-col space-y-4"
                /* eslint-disable-next-line react/no-danger */
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
        </div>
    </div>
);

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params.id);

    return { props: { postData } };
};

export default Post;
