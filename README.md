# Amir Kania — NanoEngineering portfolio

A static Next.js App Router portfolio with TypeScript, Tailwind CSS, Lucide icons and a locally bundled Geist font. All pages are generated at build time. The project includes the source artwork, content, dependency lockfile and a production build command.

## Run locally

From the directory containing `package.json`, with Node.js 22 or 24 and npm installed:

```sh
npm ci
npm run dev
```

Open the localhost address printed by Next.js, normally port 3000. The application requires no API keys.

```sh
npm run typecheck
npm run lint
npm run build
npm start
```

The last command serves the production export from `out/`. Use the printed URL. Run the build again after changing content, assets or deployment settings.

## Routes

| Route | Page |
| --- | --- |
| `/` | Introduction, filterable project index, publication, technical skills and motivation |
| `/lab/` | UCSD lab index |
| `/lab/chrono-lithos/` | NETS photolithography work and process sequence |
| `/lab/graphene-photodetector/` | Graphene–PbS device fabrication and qualitative comparison |
| `/lab/nano20l/` | Four course experiments |
| `/hardware/` | UAV project and Ferrari Work Experience Program |
| `/hardware/pyraasypis-uav/` | Current design work and engineering timeline |
| `/publications/` | Full citation, methodology, finding and research experience |
| `/resume/` | Accessible résumé summary |

## Editing

- `app/` contains route entry points, the site layout, global design styles, the sitemap and robots directives.
- `components/` contains navigation, project cards, the case-study template, process controls, publication cards and the shared footer.
- `content/projects.ts` holds typed case studies, their stages and media. Add a record with a unique slug and a `lab` or `hardware` collection. The homepage, corresponding index, detail route, résumé list and configured sitemap pick it up at build time.
- `content/profile.ts` holds the personal links, reviewed résumé path, skill groups, certification statuses and publication records. Publication cards on the publications page follow the order of the array. The first record is featured on the homepage.
- `lib/seo.ts` handles titles, descriptions and the configured production origin.
- `public/art/` contains the original wafer rendering, schematic illustrations and sharing image. The monogram is in `public/icon.svg`.
- `public/assets/` is for reviewed media ready to publish. Keep a new résumé outside `public/` until its contents have been reviewed. A workspace attachment is a suitable place for originals.

See [the asset inventory](docs/ASSETS.md) for upload destinations, expected source material and copy to check against the documents.

### Add media

Place the reviewed file in the project’s folder under `public/assets/`. Add it to that project’s `assets` array. Use `/assets/...` in the URL. The filename can be chosen when the file arrives. This example illustrates the record format:

```ts
{
  kind: "image",
  src: "/assets/chrono-lithos/mask-alignment.webp",
  alt: "Describe the equipment and what the photograph shows",
  caption: "Identify the setup, project team and image credit",
  width: 1600,
  height: 1000,
}
```

Use the actual image dimensions and caption. A project’s optional `cover` accepts the same image object, updates its card and detail page, and replaces the schematic caption. Gallery images open at full resolution. For a supporting PDF, use `{ kind: "document", src, title, description }`. Add the Ferrari CAD image to `ferrari.media`. Use a web-sized WebP for photographs, and preserve readable axes, scales, units and legends in scientific figures.

### Update the résumé

Review the PDF for the personal number, home address, GPA and outdated credential or project claims. Place the reviewed file at `public/assets/resume/amir-kania.pdf`, then set `profile.resumePdf` to `"/assets/resume/amir-kania.pdf"` in `content/profile.ts`. Keeping it `null` routes résumé links to the HTML summary. The PDF does not need to exist for the current site to work.

## Deploy to Vercel

1. Push the source directory, including `package.json` and `package-lock.json`, to your GitHub repository. The generated `out/`, `.next/` and `node_modules/` directories are ignored.
2. In Vercel, choose **Add New → Project**, import the repository and set **Root Directory** to the folder containing `package.json`. Use the **Next.js** framework preset and Node.js 22 or 24.
3. Use `npm ci` as the install command and `npm run build` as the build command. Leave the output directory on the framework default. The Next.js configuration enables static export.
4. If you already have a production domain, add `SITE_URL` to the Production environment with its full HTTPS origin. Otherwise Vercel’s `VERCEL_PROJECT_PRODUCTION_URL` supplies the production origin when system environment variables are available.
5. Select **Deploy**. Open a nested project route directly, check the résumé destination, and inspect `/sitemap.xml` and `/robots.txt`.

### Connect a purchased domain

In the Vercel project, open **Settings → Domains**, add the hostname you own and follow the DNS instructions Vercel displays for that hostname. Apply the specified records at your DNS provider. After Vercel verifies the domain and issues its certificate, set Production `SITE_URL` to the preferred HTTPS origin, configure your preferred hostname redirect in Vercel if applicable, and redeploy.

Without a configured origin, local builds have relative sharing-image paths, omit canonical links and return an empty sitemap. A production origin activates absolute social metadata, self-canonicals and all nine sitemap entries. No custom domain has been assumed.
