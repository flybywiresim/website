import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// Bad Logo Variations
import badGradient from '../../assets/branding-guidelines/FBWGradient.png';
import slanted from '../../assets/branding-guidelines/FBWSlanted.png';
import invisible from '../../assets/branding-guidelines/FBWInvis.png';
import cropped from '../../assets/branding-guidelines/FBWCropped.png';
import stretched from '../../assets/branding-guidelines/FBWStretch.png';
import badQuality from '../../assets/branding-guidelines/FBWBadQuality.png';

type BrandingProps = {
    name: string,
    src: string,
    desc: string
};

type BrandingColourProps = {
    name: string,
    hex: string,
    rgb: string,
    hsv: string
};

const BadBrandingList = [
    {
        name: 'BadColour',
        src: badGradient,
        desc: 'Do not change the colour of our logo.',
    },
    {
        name: 'Slanted',
        src: slanted,
        desc: 'Do not rotate or flip our logo.',
    },
    {
        name: 'Invisible',
        src: invisible,
        desc: 'Do not use our logo on a background that is hard to see.',
    },
    {
        name: 'Cropped',
        src: cropped,
        desc: 'Do not crop parts of our logo that ruin the overall look.',
    },
    {
        name: 'Stretched',
        src: stretched,
        desc: 'Do not stretch the width/height of our logo.',
    },
    {
        name: 'Bad Quality',
        src: badQuality,
        desc: 'Do not use a low quality version of our logo.',
    },
];

/**
 * Copy following format for colour codes:
 *
 * HEX: 00C2CB - Note: WITHOUT # sign
 *
 * RGB: 255 / 255 / 255 - Note: Ensure spacing between each value
 *
 * HSV: 360 / 100 / 100 - Note: Ensure spacing between each value
 * * */

const BrandingColors = [
    {
        name: 'Teal',
        hex: '00C2CB',
        rgb: '0 / 194 / 203',
        hsv: '183 / 100 / 80',
    },
    {
        name: 'Pastel Blue',
        hex: '6399AE',
        rgb: '99 / 153 / 174',
        hsv: '197 / 43 / 68',
    },
    {
        name: 'Grey',
        hex: '545454',
        rgb: '84 / 84 / 84',
        hsv: '0 / 0 / 33',
    },
];

const BrandingItemExample: React.FC<BrandingProps> = (props) => (
    <div className="px-10">
        <div className="lg:h-1/2">
            <img src={props.src} alt={props.name} />
        </div>
        <p className="text-center text-gray-200 text-xl md:text-lg py-6">{props.desc}</p>
    </div>
);

const BrandingPaletteColor: React.FC<BrandingColourProps> = (props) => (
    <div>
        <div style={{ background: `#${props.hex}` }} className="h-8 w-32 mb-2" />
        <h3 className="text-xl font-semibold">{props.name}</h3>
        <p>
            <b>HEX&nbsp;</b>
            {props.hex}
        </p>
        <p>
            <b>RGB&nbsp;</b>
            {props.rgb}
        </p>
        <p>
            <b>HSV&nbsp;</b>
            {props.hsv}
        </p>
    </div>
);

export const BrandingGuidelines: React.FC = () => (
    <section className="w-screen px-4 pb-8 bg-gray-900">
        <div className="mx-auto pt-40 max-w-7xl">
            <div className="max-w-prose space-y-4">
                <h1 className="text-blue-light text-5xl font-extrabold">Branding Guidelines</h1>
                <p className="text-lg tracking-wide">
                    Please use the provided logos on the download part of this page, follow our guidelines wherever possible and we have some examples of refrain from.
                </p>
            </div>

            {/* Bad Branding Examples */}
            <div className="mt-12 bg-blue-dark-contrast">
                <h1 className="text-3xl font-semibold bg-teal-900 p-2">
                    <FontAwesomeIcon icon={faTimes} className="text-teal-dark-contrast mx-2" size="lg" />
                    What not to do
                </h1>
                <div className="py-10 mx-4 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {BadBrandingList.map((x) => <BrandingItemExample key={x.name} name={x.name} src={x.src} desc={x.desc} />)}
                </div>
            </div>

            {/* Approved Logo / Variations & Typography */}
            <div className="justify-between mt-12 flex flex-col md:flex-row">
                <div>
                    <h1 className="text-3xl font-semibold text-teal-400">Approved Logos</h1>
                    <p className="max-w-prose text-lg py-3">
                        All of the officially approved logos and variations can be found&nbsp;
                        <a
                            href="https://github.com/flybywiresim/fbw-branding"
                            rel="noreferrer"
                            target="_blank"
                            className="text-teal-900"
                        >
                            HERE.
                        </a>
                    </p>

                    <div className="py-5">
                        <h1 className="text-3xl font-semibold text-teal-400">Typography</h1>
                        <p className="max-w-prose text-lg py-3 mx-4">
                            <li>
                                Aileron Font -&nbsp;
                                <a
                                    href="https://www.1001fonts.com/aileron-font.html"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-teal-900"
                                >
                                    Download
                                </a>
                            </li>
                        </p>
                    </div>
                </div>

                <div>
                    <h1 className="text-3xl font-semibold text-teal-400">Color Palette</h1>
                    <div className="flex flex-row my-3 space-x-8">
                        {BrandingColors.map((x) => <BrandingPaletteColor key={x.name} name={x.name} hex={x.hex} rgb={x.rgb} hsv={x.hsv} />)}
                    </div>
                </div>
            </div>
        </div>
    </section>
);
