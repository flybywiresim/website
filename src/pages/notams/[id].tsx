import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/legacy/image';
import Head from 'next/head';
import { twMerge } from 'tailwind-merge';
import Section from '../../components/Utils/Section';
import { getAllPostIds, getPostContent, PostContent } from '../../lib/notams/posts';
import Container from '../../components/Utils/Container';
import Tag from '../../components/Utils/Tag';

export type PostProps = { content: PostContent }

const Post = ({
    content: {
        category,
        title,
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
                content={metaImage}
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
                        <span className="flex items-center gap-x-4">
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
            <Container className="grid justify-center grid-cols-[1fr_auto_1fr] gap-x-10">
                <div>
                    <aside className="hidden 2xl:flex sticky top-20 flex-col gap-y-2.5">
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

        return { props: { content } };
    }

    return Promise.reject(new Error('no id parameter'));
};

export default Post;
