/* eslint-disable */
import Image from 'next/image';
import Tag from '../Utils/Tag';
import { PostListing } from '../../lib/notams/posts';

const Card = (props: PostListing) => (
    <div className="border-2 border-transparent hover:border-primary rounded-md overflow-hidden">
        <div className={`
        ${props.index === 0
        ? 'grid-rows-2 xl:grid-rows-none xl:grid-cols-2 text-left'
        : 'grid-rows-2 text-left'
    } 
        grid bg-secondary-accent-dark min-h-[441px]
        `}
        >
            <span className="relative">
                <Image src={props.metaImage} alt={props.metaAlt} layout="fill" objectFit="cover" />
            </span>
            <div className="px-8 py-6">
                <div className="flex justify-between">
                    <p className="text-gray-400">
                        Posted:
                        {' '}
                        {new Date(props.date).toLocaleDateString('en-US', { dateStyle: 'long' })}
                    </p>
                    <span className="grid">
                        <div className="flex gap-x-3">
                            {props.index === 0 && <Tag category="Latest" />}
                            <Tag category={props.category} />
                        </div>
                    </span>
                </div>
                <div className="flex-col items-center">
                    <h3 className={props.index === 0 ? 'xl:text-7xl' : 'text-2xl'}>{props.title}</h3>
                    By
                    {' '}
                    {props.authors?.join(', ')}
                </div>
            </div>
        </div>
    </div>
);

export default Card;
