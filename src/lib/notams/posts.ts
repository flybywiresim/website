import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import readingTime from 'reading-time';

export type PostListing = {
    id: string,
    readingStats: any,
    date: string,
    title: string,
    summary?: string,
    authors: string[],
    category: string,
    metaImage: string,
    metaAlt: string,
}

export type PostContent = PostListing & { contentHtml: string }

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

    const processedContent = await remark().use(html, { sanitize: false }).process(matterResult.content);

    const contentHtml = processedContent.toString();

    const readingStats = readingTime(fileContents);

    return {
        id,
        contentHtml,
        readingStats,
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
