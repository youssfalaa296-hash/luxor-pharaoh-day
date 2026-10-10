# Production Status

Last audited: 2026-10-10

Current state: **Production Candidate — Verification Required**

## Source and release identity

- Audited default-branch commit: `9194aa6c1558b0a47f4d33ec177ba4ef568d01de`.
- Review branch: `audit/separation-readiness-2026-10-10`.
- Package identity: Luxor Pharaoh Day v5.3.1; Node.js 24.x; npm@11.19.0; committed `package-lock.json`.
- Vercel project: `luxor-pharaoh-day`.
- Verified project domain: `https://luxor-pharaoh-day.vercel.app`.

## Findings and corrections in review branch

- The latest inspected Vercel production deployment failed during prerender of `/_not-found`. The build log reported a function-serialization error involving the Analytics `beforeSend` callback.
- `components/VercelTelemetry.tsx` was changed to remove that callback and suppress telemetry on `/admin` routes using pathname handling.
- Canonical-origin defaults were aligned across `.env.example`, `app/layout.tsx`, `app/sitemap.ts`, and `public/robots.txt` with the verified project domain.
- `README.md` and this file no longer claim release readiness without evidence.
- A new Vercel preview deployment could not be created because Vercel returned a daily deployment API limit error (retry after 24 hours).

## Verification status

- GitHub Actions for the telemetry/canonical-fix review branch must finish; do not infer a pass while the run is in progress.
- A successful Vercel build of the corrected source has not yet been obtained.
- Production HTTP/browser QA and route-by-route acceptance checks have not been completed.
- No files were deleted, no production aliases were changed, and no secrets or production environment variables were modified.

## Release decision

Keep the release state at **Production Candidate — Verification Required**. Do not mark `READY_FOR_RELEASE`, `VERIFIED`, or `RELEASED` until GitHub CI passes for the final review-branch commit, Vercel can build the corrected source successfully, and the actual production domain passes mobile/desktop browser and runtime checks. Record deployment IDs and test evidence before changing this status.
