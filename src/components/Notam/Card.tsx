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
            <Tag category={props.category} />
            <h3>{props.title}</h3>
            <p className="max-w-prose py-4">{props.description}</p>
            <small className="text-gray-400">
                Posted:
                {' '}
                {`${props.date.substring(8)}/${props.date.substring(5, 7)}/${props.date.substring(0, 4)}`}
            </small>
        </Container>
    </div>
);

export default Card;
