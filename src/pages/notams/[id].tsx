import { GetStaticPaths, GetStaticProps } from 'next';
import { FC } from 'react';
import Image from 'next/image';
import nodeHtmlToImage from 'node-html-to-image';
import { v4 } from 'uuid';
import * as fs from 'fs';
import Head from 'next/head';
import { getAllPostIds, getPostContent, PostContent } from '../../lib/notams/posts';

const NOTAMS_EMBED_PREVIEWS_DIR = 'public/img/notams-embed-previews';
const NOTAMS_EMBED_PREVIEWS_PUBLIC_DIR = 'img/notams-embed-previews';

export type PostProps = { content: PostContent, embedPreviewPath: string }

const Post: FC<PostProps> = ({ content: { authors, category, contentHtml, date, readingStats, title, metaImage, metaAlt }, embedPreviewPath }) => (
    <>
        <Head>
            <title>
                {title}
                {' '}
                - FlyByWire Simulations
            </title>

            <meta name="twitter:card" content="summary_large_image" />

            <meta key="og:type" name="og:type" content="object" />
            <meta key="og:site_name" name="og:site_name" content="FlyByWire Simulations" />
            <meta key="og:title" name="og:title" content={title} />
            <meta key="og:description" name="og:description" content="A NOTAM on the FlyByWire Simulations website" />
            <meta key="og:image" name="og:image" content={`https://embeds.flybywiresim.com/${embedPreviewPath}`} />
            <meta key="og:image:alt" name="og:image:alt" content={`${title} - FlyByWire Simulations`} />
            <meta key="og:image:width" name="og:image:width" content="1200" />
            <meta key="og:image:height" name="og:image:height" content="600" />
            <meta key="og:url" name="og:url" content="http://github.com/" />

            <meta name="twitter:image" content={embedPreviewPath} />
        </Head>
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
                <div
                    className="flex flex-col relative h-160 max-w-6xl 2xl:inset-x-80 justify-end pb-8 lg:pb-14 px-page"
                >
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

        if (!fs.existsSync(NOTAMS_EMBED_PREVIEWS_DIR)) {
            fs.mkdirSync(NOTAMS_EMBED_PREVIEWS_DIR);
        }

        const metaImageData = fs.readFileSync(`public${content.metaImage}`);
        const base64Image = Buffer.from(metaImageData).toString('base64');
        const dataURI = `data:image/jpeg;base64,${base64Image}`;

        const html = fs.readFileSync('src/lib/notams/preview.html').toString();

        const previewFileName = `${v4()}.png`;

        await nodeHtmlToImage({
            output: `${NOTAMS_EMBED_PREVIEWS_DIR}/${previewFileName}`,
            html,
            content: {
                title: content.title,
                category: content.category,
                readingStats: content.readingStats.text,
                authors: content.authors.join(', '),
                date: content.date,
                metaImage: dataURI,
            },
            puppeteerArgs: {
                headless: true,
                args: [
                    '--no-sandbox',
                ],
            },
        });

        return { props: { content, embedPreviewPath: `${NOTAMS_EMBED_PREVIEWS_PUBLIC_DIR}/${previewFileName}` } };
    }

    return Promise.reject(new Error('no id parameter'));
};

export default Post;
