# Deluxe Tattoo website (React + Vite)

Single-page site for Deluxe Tattoo, 1459 W Irving Park Rd, Chicago, IL 60613.
All business facts live in `src/data/businessInfo.js`. The JSON-LD block in `index.html` must match them.

## Run
```
npm install
npm run dev        # local development
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
```

## Deploy (Vercel or Cloudflare Pages)
- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: none
- No client-side router is used, so no rewrite rules are needed.

## After you have the production URL
1. In `index.html`, add `<link rel="canonical" href="https://YOUR-URL/">` and `<meta property="og:url" content="https://YOUR-URL/">`, and add `"url": "https://YOUR-URL/"` to the JSON-LD.
2. Copy `sitemap.xml.template` to `public/sitemap.xml` with the real URL, and uncomment the `Sitemap:` line in `public/robots.txt`.
3. Redeploy, then confirm: the URL loads over HTTPS without sign-in, `/robots.txt` and `/sitemap.xml` return 200, and no `YOUR-URL` text remains.
4. Optional: add the site in Google Search Console and submit the sitemap. This does not guarantee anything about Google Maps.
5. Only the listing's owner or manager can add the website in Google Business Profile.

## Still needs the owner's confirmation
- Permission to publish this as the shop's official site.
- The "Styles of tattoo work" list (taken from photos, not from the shop).
- Email, Instagram/Facebook, artist names, shop history: none supplied, so none shown.
- How customers should book. The site only says to call or stop by.
- Permission to show each photo, including the clients' tattoos (see IMAGE_MANIFEST.md).

## QA status
The photos come from small screenshots, so higher-resolution originals would look sharper.

Not run (no network in the build environment): `npm install`, `npm run build`, browser console check, mobile layout check, Lighthouse, deployed-URL/HTTPS/redirect checks.
Checked: JSON-LD parses as valid JSON; contact details match the supplied listing; no email, ratings, reviews or prices appear.
