import Link from 'next/link';
import { Alert } from '../Alert/Alert';

interface Version {
    name: string;
    links: string[];
}

type DownloadProps = {
    aircraft: string,
    note?: string;
    versions: Version[];
}

const DownloadLinks = ({ versions, note, aircraft }: DownloadProps) => (
    <div
        className="mt-4 pb-4 flex flex-col border-b border-b-navy"
    >
        <h3>{aircraft}</h3>
        <div className="flex flex-col gap-4 mt-4">
            {note && <Alert type="note">{note}</Alert>}

            <div className="grid grid-cols-2 gap-y-4">
                {versions.map((version) => (
                    <ul className="flex flex-col" key={crypto.randomUUID()}>
                        {version.links.map((link, i) => (
                            <li key={crypto.randomUUID()}>
                                <Link className="underline" href={link}>{`${version.name} - Part ${i + 1} of ${version.links.length}`}</Link>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </div>
    </div>
);

export default DownloadLinks;
