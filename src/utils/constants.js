export const releases = [
    {
        name: "A32NX",
        logoUrl: "logos/logo_wide_transparent.png",
        release_types: {
            stable: {
                url: process.env.REACT_APP_STABLE_URL,
            },
            preRelease: {
                url: process.env.REACT_APP_PRE_RELEASE_URL,
            }
        },
        instructionLink: "/a32nx",
    },
    {
        name: "MSFS WebUI DevKit",
        logoUrl: "logos/Community_built-2.png",
        release_types: {
            stable: {
                url: "https://github.com/dga711/msfs-webui-devkit/zipball/master",
            },
        },
        instructionLink: "/msfs-webui-devkit",
    }
];