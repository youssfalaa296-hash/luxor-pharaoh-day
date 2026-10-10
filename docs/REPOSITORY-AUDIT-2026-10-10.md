# Repository Audit & Cleanup Record — LUXOR PHARAOH DAY

**Audit date:** 2026-10-10  
**Branch reviewed:** `main`  
**Purpose:** Separate the actual LUXOR application from RefAI and record evidence-based cleanup/update work.  
**Status:** Partial static inventory; not a release approval.

## Identity and ownership

- Repository: `youssfalaa296-hash/luxor-pharaoh-day-9831bee9`
- Vercel project name recorded: `luxor-pharaoh-day`
- Product scope: bilingual Luxor visitor information, official-source-backed tourism details, trip planning, transport guidance, and visitor support.
- RefAI is a separate product and must not share its source, secrets, user data, database, storage, auth, analytics, or deployment settings.

## Source and package inventory observed on main

- App source folders: `app/`, `components/`, `lib/`, `data/`, `public/`
- Quality/release tooling: `scripts/`, `tests/`, `playwright.config.ts`, `eslint.config.mjs`
- Lockfile: `package-lock.json` exists; do not delete it because `npm ci` depends on it.
- Node version files: `.node-version` and `.nvmrc`; both may be used by different tooling and are not classified as obsolete without checking their values and deployment usage.
- No old release ZIP was present in the repository root listing.
- No clearly disposable source or configuration file was proven obsolete by the root/workflow inventory.

## Version alignment findings

Observed in `package.json` on main:
- Next.js: `16.4.0`
- React / React DOM: `19.2.0`
- ESLint config: `eslint-config-next@16.4.0`
- npm package manager pin: `npm@11.19.0`
- Node engine: `24.x`

As of this audit, the official React release page lists React `19.3.0`, while the official npm listing reports Next.js `16.4.0` as latest. Sources: https://react.dev/versions and https://www.npmjs.com/package/next.

**Required update work:** evaluate React and React DOM together at `19.3.0`, refresh the real `package-lock.json`, run clean `npm ci`, preflight, lint, typecheck, production build, and browser acceptance tests. Do not update the manifest without its lockfile or call the update complete before the tests pass.

## Cleanup decision

No files were deleted in this audit because no file was demonstrated to be unused or safely disposable. Retain source, official data, lockfiles, test configuration, and deployment/CI workflows. Any future deletion must name the exact path, show references/search evidence, and pass build/tests after removal. Never delete user data or production records as part of repository cleanup.

## Separation and production checks still required

- Audit environment-variable names and project references without exposing values.
- Verify the Supabase project reference, if any, belongs only to its intended application.
- Verify Vercel Git integration, domains, preview/production variables, and deployment commit.
- Run the hosted browser workflow and review artifacts.
- Check dependency advisories, including the previously observed development-toolchain advisory, against current official advisories and installed versions.

**State: AUDIT PARTIAL — ISOLATION AND PRODUCTION NOT VERIFIED.**
