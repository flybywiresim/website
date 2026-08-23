'use strict';

module.exports = {
    trailingSlash: true,
    // `next export` (static build for Cloudflare Pages) cannot use next/image's
    // default optimization loader, which needs a running server. Disabling it
    // emits plain <img> tags; Cloudflare serves the images as static assets.
    images: { unoptimized: true },
};
