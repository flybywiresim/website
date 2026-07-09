import Image from 'next/image';
import Link from 'next/link';
import Tag from '../Utils/Tag';
import { PostListing } from '../../lib/notams/posts';

interface CardProps extends Omit<PostListing, 'embedPreviewImage' | 'readingStats' | 'description'> {
    href: string;
}

const Card = ({ href, index, metaImage, metaAlt, date, category, authors, title }: CardProps) => {
    const formattedDate = new Date(date).toLocaleDateString('en-US', { dateStyle: 'long' });
    const authorString = authors?.join(', ');

    return (
        <Link
            href={href}
            className="border-2 border-transparent hover:border-primary rounded-md overflow-hidden block"
        >
            <div className={`
            ${index === 0
            ? 'grid-rows-2 xl:grid-rows-none xl:grid-cols-2 text-left'
            : 'grid-rows-2 text-left'
        }
            grid bg-secondary-accent-dark min-h-[441px]
            `}
            >
                <span className="relative">
                    <Image src={metaImage} alt={metaAlt} fill className="object-cover" />
                </span>
                <div className="px-8 py-6">
                    <div className="flex justify-between">
                        <p className="text-gray-400">
                            Posted:
                            {' '}
                            {formattedDate}
                        </p>
                        <div className="flex gap-x-3">
                            {index === 0 && <Tag category="Latest" />}
                            <Tag category={category} />
                        </div>
                    </div>
                    <div className="flex-col items-center">
                        <h3 className={index === 0 ? 'xl:text-7xl' : 'text-2xl'}>{title}</h3>
                        {authorString && (
                            <>
                                By
                                {' '}
                                {authorString}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;
