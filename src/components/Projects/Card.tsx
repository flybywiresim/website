import Image from 'next/image';
import Link from 'next/link';
import Container from '../Utils/Container';
import Tag from '../Utils/Tag';
import Button from '../Button/Button';

type CardProps = {
    title: string,
    description: string,
    category: any,
    metaImage: string,
    metaAlt: string,
    href: string,
    downloadURL: string
}

const Card = ({
    metaAlt,
    metaImage,
    title,
    description,
    category,
    href,
    downloadURL,
}: CardProps) => (
    <div className="grid rounded-lg bg-secondary-accent-dark">
        <span className="relative h-40 w-full">
            <Image src={metaImage} alt={metaAlt} layout="fill" objectFit="cover" className="rounded-t-lg" />
        </span>

        <Container className="grid gap-2 py-4">
            <Tag category={category} />
            <h2>{title}</h2>
            <p>
                {description}
            </p>
            <span className="grid gap-2 py-4">
                <Link href={href}>
                    <Button label="Learn More" theme="secondary" />
                </Link>
                {downloadURL
                    && (
                        <>
                            <a href={downloadURL}>
                                <Button label="Download" theme="primary" />
                            </a>
                        </>
                    )}
            </span>
        </Container>
    </div>
);

export default Card;
