import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { getAllPostIds, getPostContent, PostContent } from '../../lib/notams/posts';

export type PostProps = { content: PostContent }

const Post: React.FC<PostProps> = ({ content: { authors, category, contentHtml, date, readingStats, title, metaImage, metaAlt } }) => (
    <>
        <div className="min-h-screen w-screen mx-auto bg-cool pb-6">
            <div className="h-160 bg-blue-dark overflow-hidden shadow-md">
                <img
                    draggable="false"
                    className="absolute filter blur-sm opacity-20 w-screen h-160 object-cover"
                    src={metaImage}
                    alt={metaAlt}
                />
                <div className="flex flex-col relative h-160 max-w-6xl 2xl:inset-x-80 justify-end pb-8 lg:pb-14 px-page">
                    <div className="flex flex-row items-center text-xl">
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
                        <span className="text-gray-300 pl-4 font-medium">
                            {readingStats.text}
                        </span>
                    </div>
                    <h1 className="text-6xl font-semibold">
                        {title}
                    </h1>
                    <div className="text-gray-300 pt-1">
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

            <article
                className="flex flex-col mx-auto px-page mt-12 max-w-6xl space-y-4 text-xl text-black prose-2xl prose text-justify"
                /* eslint-disable-next-line react/no-danger */
                dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
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
