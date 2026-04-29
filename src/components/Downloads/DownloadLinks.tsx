import Link from 'next/link';
import Button, { ButtonProps } from '../Button/Button';

type Version = {
    link: string
    parts?: number
    theme?: ButtonProps['theme']

}

type DownloadProps = {
    addon: string,
    versions?: Record<string, Version>,

}

const versionButtons = (versions: Record<string, Version>) => (
    <span className="flex gap-x-2.5">
        {Object.entries(versions).map(([name, version]) => (
            <Link key={name} href={version.link}>
                <Button theme={version.theme || 'primary'}>{name}</Button>
            </Link>
        ))}
    </span>
);

const downloadLinks = ({ addon, versions }: DownloadProps) => (
    <span className="flex flex-col gap-y-1.5">
        <h3>{addon}</h3>
        {versions ? (
            versionButtons(versions)
        ) : (
            <p>Use our installer to download.</p>
        )}
    </span>
);

export default downloadLinks;
