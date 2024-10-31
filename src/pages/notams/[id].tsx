import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import { twMerge } from 'tailwind-merge';
import nodeHtmlToImage from 'node-html-to-image';
import fs from 'fs';
import { v4 } from 'uuid';
import Section from '../../components/Utils/Section';
import { getAllPostIds, getPostContent, PostContent } from '../../lib/notams/posts';
import Container from '../../components/Utils/Container';
import Tag from '../../components/Utils/Tag';

const NOTAMS_EMBED_PREVIEWS_DIR = 'public/img/notams-embed-previews';
const NOTAMS_EMBED_PREVIEWS_PUBLIC_DIR = 'img/notams-embed-previews';

export type PostProps = { content: PostContent }

const Post = ({
    content: {
        category,
        title,
        embedPreviewImage,
        metaImage,
        metaAlt,
        readingStats,
        authors,
        date,
        headings,
        contentHtml,
    },
}: PostProps) => (
    <>
        <Head>
            <title>
                {title}
                {' '}
                - FlyByWire Simulations
            </title>
            <meta
                key="description"
                name="description"
                content="A NOTAM on the FlyByWire Simulations website."
            />
            <meta
                key="og:title"
                name="og:title"
                content={`${title} - FlyByWire Simulations`}
            />
            <meta
                key="og:description"
                name="og:description"
                content="A NOTAM on the FlyByWire Simulations website."
            />
            <meta
                key="og:image"
                name="og:image"
                content={embedPreviewImage}
            />
        </Head>

        <Section theme="dark" className="relative">
            <div className="grid">
                <Image
                    src={metaImage}
                    alt={metaAlt}
                    layout="fill"
                    objectFit="cover"
                    className="bg-secondary opacity-20 blur-sm"
                />
                <Container className="grid py-8">
                    <div className="relative top-1/4 my-4">
                        <span className="flex flex-wrap items-center gap-x-4 gap-y-3">
                            <Tag category={category} />
                            <p className="font-semibold">
                                {new Date(date).toLocaleDateString('en-US', { dateStyle: 'full' })}
                            </p>
                            <p>
                                by
                                {' '}
                                {authors?.join(', ')}
                            </p>
                        </span>
                        <h2>{title}</h2>
                        <p className="text-white/50">{readingStats.text}</p>
                    </div>
                </Container>
            </div>
        </Section>

        <Section theme="light">
            <Container className="grid justify-center grid-cols-[1fr_auto_1fr]">
                <div>
                    <aside className="hidden 2xl:flex 2xl:mr-10 sticky top-20 flex-col gap-y-2.5">
                        {headings.map((it, index) => {
                            const bold = it.depth === 2;

                            return (
                                <a
                                    key={index}
                                    className={twMerge('hover:underline hover:font-semibold target:text-red-500', bold && 'font-semibold hover:text-cyan-medium')}
                                    href={`#${it.id}`}
                                    style={{ paddingLeft: `${it.depth * 16}px` }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const y = document.getElementById(it.id)!.getBoundingClientRect().top + window.scrollY - 64;

                                        window.scrollTo({ top: y, behavior: 'smooth' });
                                        window.history.replaceState(null, '', `#${it.id}`);
                                    }}
                                >
                                    {it.value}
                                </a>
                            );
                        })}
                    </aside>
                </div>
                <article
                    className="prose-xl prose prose-slate"
                    /* eslint-disable-next-line react/no-danger */
                    dangerouslySetInnerHTML={{ __html: contentHtml }}
                />
            </Container>
        </Section>
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
                category: content.category.charAt(0).toUpperCase() + content.category.slice(1).toLowerCase(),
                readingStats: content.readingStats.text,
                authors: (content.authors ?? []).join(', '),
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

        return {
            props: {
                content: {
                    ...content,
                    embedPreviewImage: `/${NOTAMS_EMBED_PREVIEWS_PUBLIC_DIR}/${previewFileName}`,
                },
            },
        };
    }

    return Promise.reject(new Error('no id parameter'));
};

export default Post;
