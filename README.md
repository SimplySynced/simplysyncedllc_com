# simplysyncedllc.com

Production website for **Simply Synced LLC** — an IT consulting and managed service provider serving the Lower Bucks area of Pennsylvania.

**Live site:** https://simplysyncedllc.com

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router, standalone output) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Email | Resend |
| CAPTCHA | Google reCAPTCHA v2 (invisible) |
| Container | Docker (multi-stage Alpine build) |
| Tunnel | Cloudflare Tunnel (`cloudflared`) |
| CI/CD | CircleCI → GitHub Container Registry (GHCR) |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                  # Root layout — global metadata, JSON-LD schema
│   ├── (default)/
│   │   ├── layout.tsx              # Default layout — header, footer, AOS init
│   │   ├── page.tsx                # Home
│   │   ├── about/
│   │   ├── contact-us/
│   │   ├── managed-services/
│   │   ├── home-automation/
│   │   ├── home-networking/
│   │   ├── pc-building-and-repair/
│   │   ├── pc-server-maintenance/
│   │   ├── remote-management/
│   │   └── web-presence/
│   └── api/
│       └── contact/route.ts        # Contact form API — captcha validation + Resend
├── components/
│   ├── ui/                         # Header, footer, logo, mobile menu
│   ├── service-hero.tsx
│   ├── service-content-section.tsx
│   └── ...
public/
Dockerfile
docker-compose.yml
.circleci/config.yaml
```

---

## Local Development

**Prerequisites:** Node.js 20+, Yarn

```bash
# Install dependencies
yarn install

# Create your local environment file
cp .env.example .env
# Fill in values — see Environment Variables below

# Start the dev server
yarn dev
```

The app runs at http://localhost:3000.

---

## Environment Variables

Create a `.env` file in the project root. **Never commit real values to git.**

```env
# Resend — used server-side to send contact form emails
RESEND_API_KEY=re_...

# Google reCAPTCHA — secret used server-side to verify tokens
RECAPTCHA_SECRET_KEY=6L...

# Google reCAPTCHA — site key embedded in the browser bundle (safe to expose)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6L...

# Cloudflare Tunnel — injected at runtime, never hardcode in docker-compose.yml
CLOUDFLARE_TUNNEL_TOKEN=eyJ...
```

| Variable | Where used | Exposed to browser? |
|---|---|---|
| `RESEND_API_KEY` | `src/app/api/contact/route.ts` | No |
| `RECAPTCHA_SECRET_KEY` | `src/app/api/contact/route.ts` | No |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | `src/app/(default)/contact-us/content.js` | Yes (by design) |
| `CLOUDFLARE_TUNNEL_TOKEN` | `docker-compose.yml` (env ref) | No |

---

## Building & Running with Docker

```bash
# Build the image
docker build -t ss_website .

# Run with docker compose (reads CLOUDFLARE_TUNNEL_TOKEN from .env)
docker compose up -d
```

The Next.js app runs on port 3000 and is exposed externally via the Cloudflare tunnel — no port needs to be open on the host firewall.

---

## CI/CD Pipeline

CircleCI automatically builds and pushes a Docker image to GHCR on every push to `main`.

**Pipeline steps (`build-and-deploy` job):**
1. Checks out the repo on an ARM Ubuntu runner
2. Reads the version from `package.json`
3. Logs in to GHCR using `$GH_USER` / `$GH_TOKEN` (stored in the `Github` CircleCI context)
4. Builds a multi-arch image tagged with the version and pushes to `ghcr.io/simplysynced/simplysyncedllc_website:<version>`
5. Posts a success/failure notification to Discord via `$DISCORD_STATUS_WEBHOOK`

**Required CircleCI contexts:**
- `Github` — `GH_USER`, `GH_TOKEN`
- `discord` — `DISCORD_STATUS_WEBHOOK`

To deploy a new version, bump the `version` field in `package.json`, commit, and push to `main`.

---

## Pages & Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About Us |
| `/contact-us` | Contact Us |
| `/managed-services` | Managed Services (MSP) |
| `/home-automation` | Home Automation |
| `/home-networking` | Home Networking |
| `/pc-building-and-repair` | PC Building & Repair |
| `/pc-server-maintenance` | PC & Server Maintenance |
| `/remote-management` | Remote Management |
| `/web-presence` | Web Design & Development |

---

## SEO

- Per-page `metadata` exports (title, description, Open Graph, Twitter card, canonical URL)
- `ProfessionalService` JSON-LD structured data injected in the root layout
- Sitemap at `/sitemap.xml` — auto-generated, includes all routes with `changeFrequency` and `priority`
- Robots at `/robots.txt`
