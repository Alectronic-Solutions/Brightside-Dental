# Local verification

- `npm run lint` runs ESLint directly.
- `npm run build` exports the GitHub Pages site into `out`.
- `npm start` serves that export at `http://localhost:3100/Brightside-Dental/` (loopback only).
- With Playwright CLI installed, open a browser session, then run `playwright-cli run-code --filename=scripts/verify-site.cjs`. The script checks 17 routes at five widths and exercises the demo form, navigation, gallery, slider, and video pause control. It uses fictional form data and writes screenshots to ignored `.playwright-cli/`.
- `node scripts/optimize-images.cjs` regenerates the two WebP background assets from retained JPEG originals.

Production and development use separate compilation caches so a running preview does not overwrite production build files. The PostCSS override keeps Next's CSS dependency on the same patched major version as the project's direct dependency; revisit this override when upgrading Next.

The site remains a static demonstration. These checks are not a full screen-reader audit or real-user Core Web Vitals measurement.
