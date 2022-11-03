import { GetStaticPaths, GetStaticProps } from 'next';
import nodeHtmlToImage from 'node-html-to-image';
import { v4 } from 'uuid';
import * as fs from 'fs';
import Image from 'next/image';
import Section from '../../components/Utils/Section';
import { getAllPostIds, getPostContent, PostContent } from '../../lib/notams/posts';
import Container from '../../components/Utils/Container';
import Tag from '../../components/Notam/Tag';

const NOTAMS_EMBED_PREVIEWS_DIR = 'public/img/notams-embed-previews';
const NOTAMS_EMBED_PREVIEWS_PUBLIC_DIR = 'img/notams-embed-previews';

export type PostProps = { content: PostContent, embedPreviewPath: string }

const Post = ({ content: { category, title, metaImage, metaAlt, readingStats, authors, date, contentHtml } }: PostProps) => (
    <>
        <Section theme="dark" className="relative">
            <div className="grid">
                <Image src={metaImage} alt={metaAlt} layout="fill" objectFit="cover" className="bg-secondary opacity-20 blur-sm" />
                <Container className="grid py-8">
                    <div className="relative top-1/4 my-4">
                        <span className="flex items-center gap-x-2">
                            <Tag category={category} />
                            <small className="text-gray-400">{readingStats.text}</small>
                        </span>
                        <h2>{title}</h2>
                        <p className="text-gray-400">
                            by
                            {' '}
                            {authors?.join(', ')}
                        </p>
                        <p className="text-gray-400">
                            Posted:
                            {' '}
                            {`${date.substring(8)}/${date.substring(5, 7)}/${date.substring(0, 4)}`}
                        </p>
                    </div>
                </Container>
            </div>
        </Section>
        <Section theme="light">
            <Container>
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
                category: content.category,
                readingStats: content.readingStats.text,
                authors: content.authors?.join(', '),
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
