import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import { getAllPostIds, getPostContent, PostContent } from '../../lib/notams/posts';

// Shamelessly stolen from tabler until the icons are updated
const BackIcon: React.FC<{ className: string }> = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`icon icon-tabler icon-tabler-arrow-narrow-left ${className}`}
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

export type PostProps = { content: PostContent }

const Post: React.FC<PostProps> = ({ content: { authors, contentHtml, date, readingStats, title } }) => (
    <>
        {/* This covers the background so it looks like the navbar is solid */}
        <div className="h-20 bg-blue-dark-contrast" />
        <div className="min-h-screen w-screen mx-auto bg-cool pb-6">
            <div className="h-144 bg-blue-dark overflow-hidden">
                <img
                    draggable="false"
                    className="filter opacity-30 blur-sm brightness-90 w-screen -mt-4 h-160 object-cover"
                    src="https://i.imgur.com/TFWckR1.png"
                    alt=""
                />
                <div className="absolute bottom-96 max-w-6xl mx-20">
                    <div className="flex flex-row items-center bottom-0 gap-x-4 text-xl">
                        <p className="text-teal-light font-black">ANNOUNCEMENTS</p>
                        <span className="text-gray-300 font-medium">
                            {readingStats.text}
                        </span>
                    </div>
                    <h1 className="text-6xl font-semibold lg:text-justify leading-tight text-white mt-0.5 mb-20">
                        {title}
                    </h1>
                </div>
            </div>
            <div className="px-page mx-auto mt-10 max-w-6xl">
                <div className="text-center text-xl text-black">
                    <p className="font-medium">
                        {`${date.substring(5, 7)}/${date.substring(8)}/${date.substring(0, 4)}`}
                    </p>
                    <p className="font-medium">
                        by
                        {' '}
                        {authors.join(', ')}
                    </p>
                </div>
                <div className="w-60 h-2 mx-auto mt-10 mb-10 bg-teal-light-contrast rounded-full mb-3" />
                <Link href="/notams">
                    <div className="flex flex-row items-center cursor-pointer justify-center text-gray-400 hover:text-teal-700 transition-colors duration-100">
                        <BackIcon className="-ml-2.5" />
                        <span className="text-2xl ml-1.5">
                            Back
                        </span>
                    </div>
                </Link>
                <div className="mt-7 px-6 py-4 text-xl bg-cool rounded-sm">
                    <div
                        className="flex flex-col space-y-4 text-black  prose-2xl prose text-justify"
                        /* eslint-disable-next-line react/no-danger */
                        dangerouslySetInnerHTML={{ __html: contentHtml }}
                    />
                </div>
            </div>
        </div>
    </>
);

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
    if (params?.id) {
        const content = await getPostContent(params?.id as string);

        return { props: { content } };
    }

    return Promise.reject(new Error('no id parameter'));
};

export default Post;
