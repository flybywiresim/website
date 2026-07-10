import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

/**
 * Generate a Low Quality Image Placeholder (LQIP) as a base64 data URL.
 *
 * Downscales the source image to 8px wide (maintaining aspect ratio),
 * encodes as JPEG quality 20, then base64-encodes the result.
 *
 * Works with raster formats (webp, png, jpg) and SVG (rasterised by sharp).
 */
export async function generateLQIP(filePath: string): Promise<string> {
    const buffer = await sharp(filePath)
        .resize(8)
        .jpeg({ quality: 20 })
        .toBuffer();

    return `data:image/jpeg;base64,${buffer.toString('base64')}`;
}

/**
 * Generate LQIPs for a list of public image paths (e.g. "/img/a380x/feature-1.webp").
 *
 * Returns a map of public path → base64 blur data URL.
 * Files that don't exist or can't be processed are silently skipped.
 */
export async function generateLQIPMap(
    publicPaths: string[],
): Promise<Record<string, string>> {
    const entries = await Promise.all(
        publicPaths.map(async (publicPath) => {
            const filePath = path.join(process.cwd(), 'public', publicPath);
            try {
                if (!fs.existsSync(filePath)) {
                    return null;
                }
                const blurDataURL = await generateLQIP(filePath);
                return [publicPath, blurDataURL] as const;
            } catch {
                return null;
            }
        }),
    );

    return Object.fromEntries(
        entries.filter((entry): entry is readonly [string, string] => entry !== null),
    );
}
