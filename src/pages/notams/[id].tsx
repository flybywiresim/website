import { GetStaticPaths, GetStaticProps } from 'next';
import { FC } from 'react';
import Image from 'next/image';
import { getAllPostIds, getPostContent, PostContent } from '../../lib/notams/posts';

export type PostProps = { content: PostContent }

const Post: FC<PostProps> = ({ content: { authors, category, contentHtml, date, readingStats, title, metaImage, metaAlt } }) => (
    <div className="min-h-screen w-full mx-auto bg-gradient-to-b from-white to-gray-100 pb-6">
        <div className="h-160 bg-blue-dark overflow-hidden shadow-md">
            <div className="absolute filter blur-sm opacity-20 w-screen h-160">
                <Image
                    layout="fill"
                    objectFit="cover"
                    draggable="false"
                    src={metaImage}
                    alt={metaAlt}
                />
            </div>
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
                    <span className="text-gray-300 pl-4">
                        {readingStats.text}
                    </span>
                </div>
                <h1 className="text-6xl pt-1 font-semibold">
                    {title}
                </h1>
                <div className="pt-1">
                    <p className="text-gray-200 font-semibold">
                        {'Written by '}
                        {authors.join(', ')}
                    </p>
                    <p className="text-gray-300">
                        {'Posted: '}
                        {`${date.substring(0, 4)}/${date.substring(5, 7)}/${date.substring(8)}`}
                    </p>
                </div>
            </div>
        </div>

        <article
            className="flex flex-col mx-auto px-page py-16 my-8 max-w-6xl space-y-4 text-xl text-black prose-2xl prose lg:text-justify"
            /* eslint-disable-next-line react/no-danger */
            dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
    </div>
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
