import Image from 'next/image';
import Container from '../Utils/Container';
import Tag from '../Utils/Tag';
import { PostListing } from '../../lib/notams/posts';

const Card = (props: PostListing) => (
    <div className="grid cursor-pointer bg-secondary-accent-dark">
        <span className="relative h-40 w-full">
            <Image src={props.metaImage} alt={props.metaAlt} layout="fill" objectFit="cover" />
        </span>
        <Container className="grid py-4">
            <span className="grid gap-4 justify-between">
                <div className="grid grid-cols-2">
                    {props.index === 0 && <Tag category="Latest" />}
                    <Tag category={props.category} />
                </div>
                <p className="text-gray-400">
                    {new Date(props.date).toLocaleDateString('en-US', { dateStyle: 'long' })}
                </p>
            </span>
            <h3>{props.title}</h3>
            <p className="max-w-prose py-4">{props.description}</p>
        </Container>
    </div>
);

export default Card;
