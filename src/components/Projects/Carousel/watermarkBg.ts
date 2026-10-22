const ARIAL_BOLD_12_WIDTHS: [number, string][] = [
    [3, "'"],
    [3.3, ' ,./Iijl'],
    [4, '!():;-f'],
    [4.7, '*rt'],
    [5.3, 'z'],
    [5.5, '"'],
    [6, 'Jcs'],
    [6.7, '#$0123456789FLaekvxy'],
    [7, '+<=>'],
    [7.3, '?EPSTXZbdghnopqu'],
    [8, 'BCKRVY'],
    [8.7, '&ADGHNOQU'],
    [9.3, 'w'],
    [10, 'M'],
    [10.7, '%m'],
    [11.3, 'W'],
];

const ARIAL_BOLD_12 = new Map(ARIAL_BOLD_12_WIDTHS.flatMap(([width, chars]) => Array.from(chars).map((char) => [char, width] as const)));

function measureText(text: string): number {
    return Array.from(text).reduce((w, ch) => w + (ARIAL_BOLD_12.get(ch) ?? 7), 0);
}

export function buildWatermarkBg(text: string): React.CSSProperties {
    const encoded = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const scale = 12.5 / 12;
    const cellW = Math.ceil(measureText(text) * scale) + 4;
    const halfW = cellW / 2;
    const t = 'fill="none" stroke="white" stroke-width="0.5" font-family="Arial,Helvetica,sans-serif" font-weight="bold" font-size="12.5"';
    const svg = [
        `<svg xmlns="http://www.w3.org/2000/svg" width="${cellW}" height="32">`,
        `<text x="0" y="12" ${t}>${encoded}</text>`,
        `<text x="${halfW}" y="28" ${t}>${encoded}</text>`,
        `<text x="${halfW - cellW}" y="28" ${t}>${encoded}</text>`,
        '</svg>',
    ].join('');
    return {
        backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(svg)}")`,
        backgroundSize: `${cellW}px 32px`,
        backgroundRepeat: 'repeat',
    };
}
