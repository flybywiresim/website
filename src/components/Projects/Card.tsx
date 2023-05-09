import Image from 'next/image';
import Link from 'next/link';
import { DownloadOutlined } from '@ant-design/icons';
import Container from '../Utils/Container';
import Tag from '../Utils/Tag';
import Button from '../Button/Button';

type CardProps = {
    title: string,
    description: string,
    category: any,
    metaImage?: string,
    metaAlt?: string,
    href: string,
    downloadURL?: string
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
    <div className="grid bg-secondary-accent-dark xl:grid-cols-3">
        {metaImage && <Image src={metaImage} alt={metaAlt} width={800} height={300} objectFit="cover" /> }
        <div className="grid xl:col-span-2">
            <Container className="grid gap-2 py-4">
                <div>
                    <Tag category={category} />
                </div>
                <h2>{title}</h2>
                <p>
                    {description}
                </p>
                <span className="flex flex-wrap gap-2 py-4">
                    <Link href={href}>
                        <Button label="Learn More" theme="secondary" />
                    </Link>
                    {downloadURL
                        && (
                            <>
                                <a href={downloadURL}>
                                    <Button label={<DownloadOutlined />} theme="primary" className="max-w-min flex justify-center items-center" />
                                </a>
                            </>
                        )}
                </span>
            </Container>
        </div>
    </div>
);

export default Card;
