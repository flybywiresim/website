import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import readingTime from 'reading-time';

export type getPostDataType = {
    id: string,
    contentHtml: string,
    readingStats: any,
    date: string,
    title: string,
    authors: string[],
}

export type getSortedPostsDataType = {
    id: string,
    readingStats: any,
    date: string,
    title: string,
    authors: string[],
}

const postsDirectory = path.join(process.cwd(), 'posts');

export const getAllPostIds = () => {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map((fileName) => ({ params: { id: fileName.replace(/\.md/, '') } }));
};

export const getPostData = async (id: string): Promise<getPostDataType> => {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    const matterResult = matter(fileContents);

    // @ts-ignore
    const metadata: {date: string, title: string, authors: string[]} = { ...matterResult.data };

    const processedContent = await remark().use(html).process(matterResult.content);

    const contentHtml = processedContent.toString();

    const readingStats = readingTime(fileContents);

    return {
        id,
        contentHtml,
        readingStats,
        ...metadata,
    };
};

export const getSortedPostsData = (): getSortedPostsDataType[] => {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');

        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf-8');

        const matterResult = matter(fileContents);

        const readingStats = readingTime(fileContents);

        // @ts-ignore
        const metadata: {date: string, title: string, authors: string[]} = { ...matterResult.data };

        return {
            id,
            readingStats,
            ...metadata,
        };
    });

    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        }

        return -1;
    });
};
