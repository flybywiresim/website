import Button from '../Button/Button';

type DownloadProps = {
    stableLink?: string,
    devLink?: string,
    aircraft: string,

}

const downloadLinks = ({ stableLink, devLink, aircraft }: DownloadProps) => (
    <span className="flex flex-col gap-y-1.5">
        <h3>{aircraft}</h3>
        {stableLink && devLink ? (
            <>
                <span className="flex gap-x-2.5">
                    <Button label="Stable" />
                    <Button theme="secondary" label="Development" />
                </span>
            </>
        ) : (
            <p>Use our installer to download.</p>
        )}
    </span>
);

export default downloadLinks;
