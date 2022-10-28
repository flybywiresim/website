import Image from 'next/image';
import Container from '../Utils/Container';
import Tag from './Tag';
import { PostListing } from '../../lib/notams/posts';

const Card = (props: PostListing) => (
    <div className="grid rounded-lg bg-secondary-accent-dark">
        <span>
            <Image src={props.metaImage} alt={props.metaAlt} objectFit="cover" width={800} height={600} className="rounded-t-lg" />
        </span>
        <Container className="grid py-4">
            <span className="flex items-center gap-4">
                <Tag category={props.category} />
                <h5>{props.readingStats}</h5>
            </span>
            <h3>{props.title}</h3>
            <small className="text-gray-400">
                Posted:
                {`${props.date.substring(8)}/${props.date.substring(5, 7)}/${props.date.substring(0, 4)}`}
            </small>
            <p className="py-4">{props.description}</p>
        </Container>
    </div>
);

export default Card;
