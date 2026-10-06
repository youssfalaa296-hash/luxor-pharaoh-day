# LUXOR PHARAOH DAY 🏺👑 v5.3.1

**A Day in Luxor with the Pharaohs** — Independent bilingual visitor information and local planning platform.

[![Node.js CI](https://github.com/youssfalaa296-hash/luxor-pharaoh-day-9831bee9/actions/workflows/node.js.yml/badge.svg)](https://github.com/youssfalaa296-hash/luxor-pharaoh-day-9831bee9/actions/workflows/node.js.yml)

## Product path
KNOW → CHECK → GO / اعرف → اتأكد → اتحرك

## Current release gate
**RELEASE_STATUS: BLOCKED**

The application source is on main and the production CI gate passed on the release branch before merge. Production deployment is currently blocked by Vercel's daily deployment quota (api-deployments-free-per-day), so this release is not marked VERIFIED.

## Trust rules
- No invented prices, contacts, operating hours, provider status, licenses, or government affiliation.
- Confirmed data carries a source, review date, and verification status.
- Estimates are explicitly labeled.
- User reports never overwrite production data automatically.
- Booking/payment/commercial claims remain disabled until real operational and legal readiness exists.

## Runtime
Node.js 24.21.0 · npm 11.19.0 · Next.js 16.3.8 · React 19.2.0

## Quality gate
npm ci → npm run preflight → TypeScript → ESLint → production build

## Production
Vercel project: luxor-pharaoh-day-q3rd

Production deployment can be marked VERIFIED only after the merged commit is deployed and these routes are checked: /, /experiences, /price-check, /what-can-i-do-now, /transport, /before-you-buy, /plan, /trust, /help, /report-issue, /faq, /privacy, /terms, /robots.txt, /sitemap.xml, /manifest.webmanifest.

## Compliance boundary
This is an independent digital visitor information and planning platform. It does not claim government affiliation, licensed-provider status, guaranteed pricing, booking, or payment processing without documented operational readiness.
