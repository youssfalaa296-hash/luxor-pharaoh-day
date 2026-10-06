# Production Runbook

1. GitHub main is the source of truth.
2. CI must pass with Node 24.21.0 and npm 11.19.0.
3. Production install uses the committed lockfile with npm ci.
4. Vercel must deploy the merged main commit.
5. Verify every public route and static asset.
6. Check mobile layout, Arabic RTL, English copy, console errors, links, sitemap, robots, and manifest.
7. Confirm no secrets or unsupported commercial/legal claims.
8. Only then set RELEASE_STATUS: VERIFIED.

## Current blocker
Vercel returned HTTP 402 for the deployment API because the team's Free-plan daily deployment quota was exhausted. Do not create repeated deployments until the quota resets or the team's Vercel plan/limits are changed by the owner.
