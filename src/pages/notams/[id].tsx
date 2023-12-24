import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import nodeHtmlToImage from 'node-html-to-image';
import { v4 } from 'uuid';
import * as fs from 'fs';
import Head from 'next/head';
import { getAllPostIds, getPostContent, PostContent } from '../../lib/notams/posts';
import Container from '../../components/utils/Container';

const NOTAMS_EMBED_PREVIEWS_DIR = 'public/img/notams-embed-previews';
const NOTAMS_EMBED_PREVIEWS_PUBLIC_DIR = 'img/notams-embed-previews';

export type PostProps = { content: PostContent, embedPreviewPath: string }

const Post = ({ content: { authors, category, contentHtml, date, readingStats, title, metaImage, metaAlt }, embedPreviewPath }: PostProps) => (
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
            <meta key="og:image" name="og:image" content={`https://flybywiresim.com/${embedPreviewPath}`} />
            <meta key="og:image:alt" name="og:image:alt" content={`${title} - FlyByWire Simulations`} />
            <meta key="og:image:width" name="og:image:width" content="1200" />
            <meta key="og:image:height" name="og:image:height" content="600" />
            <meta name="twitter:image" content={embedPreviewPath} />
        </Head>

        <section className="bg-white">
            <div className="relative bg-blue-dark">
                <div className="absolute h-full w-full opacity-20 blur-sm">
                    <Image
                        layout="fill"
                        objectFit="cover"
                        draggable="false"
                        src={metaImage}
                        alt={metaAlt}
                    />
                </div>

                <Container className="relative bottom-16 flex h-160 max-w-7xl flex-col justify-end">
                    <div className="flex text-xl">
                        {category === 'ANNOUNCEMENTS'
                            ? (
                                <p className="font-black text-teal-light">{category}</p>
                            )
                            : (
                                <p className="text-orangutanOrange font-black">{category}</p>
                            )}
                        <span className="pl-2 text-gray-300">
                            {readingStats.text}
                        </span>
                    </div>

                    <h1>{title}</h1>
                    <p className="font-semibold text-gray-200">
                        {'Written by '}
                        {authors.join(', ')}
                    </p>
                    <p className="text-gray-300">
                        {'Posted: '}
                        {`${date.substring(0, 4)}/${date.substring(5, 7)}/${date.substring(8)}`}
                    </p>

                </Container>
            </div>

            <article
                className="px-page prose prose-2xl mx-auto py-16"
                /* eslint-disable-next-line react/no-danger */
                dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
        </section>
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
