import Link from 'next/link';
import Button, { ButtonProps } from '../Button/Button';
import React from 'react';

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
    <span className="inline-grid grid-cols-[auto_auto] gap-x-2.5 gap-y-2 w-fit">
        {Object.entries(versions).map(([name, version]) => {
            if (version.parts) {
                const [expanded, setExpanded] = React.useState(false);
                const handleToggle = () => setExpanded((prev) => !prev);

                const partLinks = Array.from({ length: version.parts }, (_, i) => (
                    <Link key={i} href={`${version.link}.${(i + 1).toString().padStart(3, '0')}`}>
                        <Button className="mb-2" theme={version.theme || 'primary'}>{`Part ${(i + 1)}`}</Button>
                    </Link>
                ));

                return (
                    <div key={name}>
                        <Button onClick={handleToggle} theme={version.theme || 'primary'}>{name}</Button>
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            expanded ? 'mt-4 max-h-96 opacity-100' : 'mt-0 max-h-0 opacity-0'
                        }`}
                        >
                            <div className="mb-4 p-4 border-l-2 border-primary bg-gray-50 transition-transform duration-300 ease-in-out">
                                {partLinks}
                            </div>
                        </div>
                    </div>
                )
            }
            return (
                <Link key={name} href={version.link}>
                    <Button theme={version.theme || 'primary'}>{name}</Button>
                </Link>
            )
        })}
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
