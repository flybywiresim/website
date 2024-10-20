import Button from '../Button/Button';

type DownloadProps = {
    stableLink: string,
    devLink: string,
    aircraft: string,

}

const downloadLinks = ({ aircraft }: DownloadProps) => (
    <span className="flex flex-col gap-y-1.5">
        <h3>{aircraft}</h3>
        <span className="flex gap-x-2.5">
            <Button label="Stable" />
            <Button theme="secondary" label="Development" />
        </span>
    </span>
);

export default downloadLinks;
