# Alves Jatobá Creative Studio

Public website for [Alves Jatobá Creative Studio](https://alvesjatoba.com) — photography and graphic design in Porto.

The site is a conversion landing page: a short promise, visible services and prices, and WhatsApp as the way to book. Portuguese is the default language; English is available. Work lives on Instagram and Behance until a gallery is added here.

Live: [alvesjatoba.com](https://alvesjatoba.com)

## Stack

| Piece | Choice |
| --- | --- |
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Language | TypeScript, React 19 |
| Styling | Global CSS (`app/globals.css`) |
| i18n | `/pt` and `/en` routes, cookie + `Accept-Language` |
| Content | Typed data in `lib/`; markdown blog reader in `lib/blog.ts` |
| Deploy | Docker (`output: "standalone"`) behind Traefik on the VPS |

No CMS, database, or auth yet. Copy and prices are edited in the repo.

## What is done

The old static HTML site was replaced with this Next.js app.

- **Landing home** (`/[locale]`) — headline, promise, WhatsApp CTA, photo and design packages with prices, second CTA, Porto note.
- **Portuguese and English** — dictionaries in `lib/dictionaries.ts`, language switch in the header, `hreflang` alternates.
- **WhatsApp booking** — pre-filled messages from `lib/site.ts` (no contact form).
- **Services data** — packages in `lib/servicos.ts`, labels in the dictionaries.
- **Blog routes** — `/[locale]/blog` and `/[locale]/blog/[slug]` read markdown from `content/blog/`. There are no posts yet, so the list shows a “coming soon” line. The blog is not in the nav.
- **Legacy URLs** — `/home.html`, `/servicos`, `/contato`, and similar paths redirect to `/`.
- **Production image** — `Dockerfile` + `docker-compose.yml` for `alvesjatoba.com` / `www.alvesjatoba.com`.

### Layout

```
app/[locale]/     home, blog list, blog post
components/       header, footer, logo, language switch, services, WhatsApp
lib/              site constants, i18n, dictionaries, prices, blog parser
content/blog/     markdown posts (empty for now)
public/           logo, photos, Requila font
```

## What comes next

These are the intended next steps, not a commitment to order.

1. **Publish blog posts** — drop `.md` files in `content/blog/` (front matter: `title`, `date`, `excerpt`) and link the blog in the header. Goal: search in Portugal and clearer answers for people (and AI tools) looking up the studio.
2. **Richer posts** — MDX if articles need images, galleries, or custom layout.
3. **On-site portfolio** — selected work on the site instead of only Instagram and Behance.
4. **Admin panel** — edit packages, prices, and posts without a deploy. That needs auth and a store; it is later, not the next commit.

WhatsApp stays the booking channel unless that changes on purpose.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The middleware sends `/` to `/pt` or `/en`.

```bash
npm run build
npm start
```

## Production

Copy the project to `/srv/apps/alves-jatoba` on the VPS (see comments in `docker-compose.yml`), then:

```bash
docker compose up -d --build
```
