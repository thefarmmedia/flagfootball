# Missouri EPIC Flag Football

Southwest Missouri's premier flag football organization website — NFL FLAG · Girls Flag · 7v7.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (styling)
- **Framer Motion** (animations)
- **Lucide React** (icons)
- **React Router v6** (routing)
- **react-helmet-async** (SEO meta tags)
- **Netlify Forms** (contact forms)

---

## Local Development

```bash
npm install
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173)

## Production Build

```bash
npm run build
```

Output goes to `/dist`. Verify with:

```bash
npm run preview
```

---

## Deploying to Netlify

1. Push this repository to GitHub
2. Connect the repo to Netlify
3. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy

All client-side routing is handled via `netlify.toml` (SPA redirect).

---

## Configuration Files

Everything that changes frequently is centralized:

| File | What to edit |
|------|-------------|
| `src/config/site.ts` | Registration URLs, contact info, social links, analytics IDs, domain |
| `src/data/programs.ts` | Program descriptions, features, age groups |
| `src/data/coaches.ts` | Coaching staff names, bios, photos |
| `src/data/sponsors.ts` | Sponsor names, logos, tier levels |
| `src/data/faqs.ts` | FAQ questions and answers |
| `src/data/events.ts` | Upcoming events and dates |
| `src/data/awards.ts` | Championship wins and achievements |

---

## Setting Up the Domain

1. Update `siteUrl` in `src/config/site.ts` to your production domain
2. Update `Sitemap:` URL in `public/robots.txt`
3. Connect your custom domain in Netlify DNS settings

---

## Adding Analytics

In `src/config/site.ts`, fill in:

```ts
analytics: {
  ga4Id: 'G-XXXXXXXXXX',
  metaPixelId: '0000000000',
}
```

Conversion events are already wired up in `src/utils/analytics.ts`.

---

## Adding a Sponsor

Edit `src/data/sponsors.ts`:

```ts
{
  id: 'sponsor-acme',
  name: 'Acme Sports',
  tier: 'gold',
  website: 'https://acme.com',
  logo: '/images/sponsors/acme-sports.png',
  description: 'Local equipment provider',
}
```

Add the logo to `/public/images/sponsors/`.

---

## Adding a Coach

Edit `src/data/coaches.ts`:

```ts
{
  id: 'coach-john-smith',
  name: 'John Smith',
  title: 'NFL FLAG Head Coach',
  program: 'NFL FLAG',
  bio: 'Coach bio here.',
  image: '/images/coaches/john-smith.jpg',
  certifications: ['NFL FLAG Certified'],
}
```

Add the photo to `/public/images/coaches/`.

---

## Routes

| URL | Page |
|-----|------|
| `/` | Home |
| `/nfl-flag` | NFL FLAG Program |
| `/girls-flag-football` | Girls Flag Football |
| `/7v7` | 7v7 Competitive |
| `/about` | About Missouri EPIC |
| `/coaches` | Coaching Staff |
| `/sponsors` | Sponsors & Partners |
| `/faq` | FAQ |
| `/contact` | Contact |
