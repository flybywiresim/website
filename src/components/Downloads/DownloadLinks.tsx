import Button from "../Button/Button";

type DownloadProps = {
    stableLink: string,
    devLink: string,
    aircraft: string,

}

const downloadLinks = ({stableLink, devLink, aircraft}: DownloadProps) => (
    <>
        <h3>{aircraft}</h3>
        <Button label="Stable" />
        <Button label="Development" />
    </>
);

export default downloadLinks;
