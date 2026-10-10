# LUXOR PHARAOH DAY — Build, Release, and Production Runbook

Status: release is blocked pending the canonical Vercel project/domain decision, successful CI, and real-browser production QA.

## Required runtime
- Node.js 24.21.0
- npm 11.19.0
- Application version in this source: 5.3.1

## Clean local build
Run from the repository root:

```bash
node --version
npm --version
npm ci
npm run preflight
npm run typecheck
npm run lint
npm run build
npm start
```

The production server normally listens at `http://localhost:3000`. Stop it with Ctrl+C. Do not publish local environment files or secret values.

## Automated CI
The `.github/workflows/node.js.yml` workflow is intended to enforce the exact runtime, require the committed `package-lock.json`, install with `npm ci`, run the production dependency audit, preflight, typecheck, lint, and production build. A workflow file existing in GitHub does not prove the latest run passed; inspect the run for the exact commit.

## Production deployment gate
- [ ] Confirm the single canonical Vercel project is linked to `youssfalaa296-hash/luxor-pharaoh-day-9831bee9` and production branch `main`.
- [ ] Confirm the production domain and its verified assignment to that project.
- [ ] Investigate the current production-target deployment in `ERROR` state before replacing it.
- [ ] Confirm production environment variables and external service identities by name/owner without exposing values.
- [ ] Merge only after CI succeeds and the pull request is reviewed.
- [ ] Verify the deployment commit SHA, `target=production`, and `READY` state.
- [ ] Test the actual domain in a real browser: home, Explore, Price Check, transport, plan save/share, mobile layout, error/empty/loading states, and issue reporting.
- [ ] Verify official-site sources and freshness labels; never fabricate prices, opening hours, phone numbers, bookings, or payment completion.
- [ ] Confirm rollback target and monitor runtime errors after release.

## Multiple project caution
Several similarly named LUXOR Vercel projects and deployments exist. Do not delete projects, transfer domains, or promote a preview until the production owner, live traffic, domain mapping, and rollback path are confirmed.

## Release status
Do not mark `RELEASE_STATUS: VERIFIED` until the exact production deployment and real-browser checks pass. Successful compilation alone is not production verification.
