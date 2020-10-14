export const a32nxStableDownloadUrl = "https://github.com/flybywiresim/a32nx/releases/latest/download/flybywiresim-a32nx.zip";
export const a32nxInstaller = "https://github.com/Externoak/A32NX-installer/releases/latest/download/A32NX_Downloader.zip";

export const releases = [
    {
        name: "A32NX",
        logoUrl: require("../logos/logo_wide_transparent.png"),
        release_types: {
            stable: {
                url: a32nxStableDownloadUrl,
            }
        },
        instructionLink: "/a32nx",
    },
    {
        name: "MSFS WebUI DevKit",
        logoUrl: require("../logos/Community_built-2.png"),
        release_types: {
            stable: {
                url: "https://github.com/dga711/msfs-webui-devkit/releases",
            },
        },
        instructionLink: "https://github.com/dga711/msfs-webui-devkit/blob/master/readme.md",
    }
];