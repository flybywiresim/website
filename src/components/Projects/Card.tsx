import Image from 'next/image';
import Container from '../Utils/Container';
import Tag from '../Utils/Tag';
import Button from '../Button/Button';

type CardProps = {
    title: string,
    description: string,
    category: any,
    metaImage: string,
    metaAlt: string,
    isDownloadable?: boolean
}

const Card = ({
    metaAlt,
    metaImage,
    title,
    description,
    category,
    isDownloadable,
}: CardProps) => (
    <div className="grid cursor-pointer bg-secondary-accent-dark">
        <span className="relative h-40 w-full">
            <Image src={metaImage} alt={metaAlt} layout="fill" objectFit="cover" />
        </span>

        <Container className="grid gap-2 py-4">
            <Tag category={category} />
            <h2>{title}</h2>
            <p>
                {description}
            </p>
            <span className="grid gap-2 py-4">
                <Button label="Learn More" theme="secondary" />
                {isDownloadable
                    && <Button label="Download" theme="primary" />}
            </span>
        </Container>
    </div>
);

export default Card;
