# LUXOR PHARAOH DAY 🏺👑

**يومك الفرعوني في الأقصر · Your Pharaoh Day in Luxor**

Independent bilingual digital visitor information & local concierge platform.

## Product path

**KNOW → CHECK → GO**

- **KNOW / اعرف:** discover options by time, interest and budget.
- **CHECK / اتأكد:** see source, update state and verification status before choosing.
- **GO / اتحرك:** follow practical next steps, transport guidance and contact paths.

## Production architecture

The repository is designed for:

`GitHub → Node 24 → npm 11+ → package-lock.json → npm ci → Preflight → Build → Vercel → Production QA`

## Important lockfile rule

Do **not** create a fake or hand-written `package-lock.json`.

Run the GitHub Actions workflow **Bootstrap real package-lock.json**. It generates the lockfile with Node 24/npm 11+, validates the root contract, executes `npm ci`, runs preflight, and runs the production build. The resulting `package-lock.json` is uploaded as an artifact and should then be committed to `main`.

Once committed, `Production CI` requires that lockfile and uses `npm ci` only.

## Local commands

```bash
npm ci
npm run preflight
npm run verify
npm run build
npm start
```

## Production status

**Production Candidate / Verification Required**

This source package must not be labeled Production-Verified until GitHub Actions and Vercel Production QA succeed against the real repository deployment.

## Trust rules

The UI must not claim government affiliation, official pricing, provider licensing, verified-provider status, or confirmed payments without current documented evidence.

Commercial booking, transport brokerage, and payment capabilities remain separate activation gates requiring operational, security, and legal review.
