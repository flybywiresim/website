import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import { getAllPostIds, getPostContent, PostContent } from '../../lib/notams/posts';

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
                <div className="absolute max-w-6xl lg:mx-20 px-page inset-x-2 inset-y-1/3 z-30">
                    <div className="flex flex-row items-center bottom-0 gap-x-4 text-xl">
                        <p className="text-teal-light font-black">ANNOUNCEMENTS</p>
                        <span className="text-gray-300 font-medium">
                            {readingStats.text}
                        </span>
                    </div>
                    <h1 className="text-6xl font-semibold leading-tight text-white mt-0.5">
                        {title}
                    </h1>
                    <div className="text-gray-300">
                        <p>
                            {'Written by '}
                            {authors.join(', ')}
                        </p>
                        <p>
                            {'Posted: '}
                            {`${date.substring(0, 4)}/${date.substring(5, 7)}/${date.substring(8)}`}
                        </p>
                    </div>
                </div>
            </div>
            <div className="px-page mx-auto mt-20 max-w-6xl">
                <div
                    className="flex py-12 rounded-sm flex-col mx-auto space-y-4 text-xl text-black prose-2xl prose text-justify"
                    /* eslint-disable-next-line react/no-danger */
                    dangerouslySetInnerHTML={{ __html: contentHtml }}
                />
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
