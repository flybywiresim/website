import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import html from 'remark-html';
import remarkParse from 'remark-parse';
import readingTime from 'reading-time';
import remarkHeadings, { Heading } from '@vcarl/remark-headings';
import rehypeSlug from 'rehype-slug-custom-id';
import { remark } from 'remark';
import { rehype } from 'rehype';
import { slug } from 'github-slugger';
import { TagType } from '../../components/Utils/Tag';

export interface PostListing {
    index: number;
    id?: string,
    readingStats: any,
    date: string,
    title: string,
    description: string,
    authors?: string[],
    category: TagType | Uppercase<TagType> | Lowercase<TagType>,
    embedPreviewImage: string,
    metaImage: string,
    metaAlt: string,
}

export type PostContent = PostListing & { contentHtml: string, headings: (Heading & { id: string })[] }

const postsDirectory = path.join(process.cwd(), 'src/posts');

export type AllPostIds = { params: { id: string } }[]

export const getAllPostIds = (): AllPostIds => {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map((fileName) => ({ params: { id: fileName.replace(/\.md/, '') } }));
};

export const getPostContent = async (id: string): Promise<PostContent> => {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    const matterResult = matter(fileContents);

    const metadata = { ...matterResult.data };

    const processedContent = await remark()
        .use(remarkParse)
        .use(remarkHeadings)
        .use(html, { sanitize: false })
        .process(matterResult.content);

    const processedHtml = await rehype()
        .use(rehypeSlug)
        .process(processedContent.toString());

    const contentHtml = processedHtml.toString();

    const readingStats = readingTime(fileContents);

    return {
        id,
        contentHtml,
        readingStats,
        headings: (processedContent.data.headings as Heading[]).map((it) => ({ ...it, id: slug(it.value) })),
        ...metadata,
    } as PostContent;
};

export const getPostListings = (): PostListing[] => {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');

        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf-8');

        const matterResult = matter(fileContents);

        const readingStats = readingTime(fileContents);

        return {
            id,
            readingStats,
            ...matterResult.data,
        } as PostListing;
    });

    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        }

        return -1;
    });
};
