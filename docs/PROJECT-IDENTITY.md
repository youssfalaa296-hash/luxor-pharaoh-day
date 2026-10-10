# LUXOR PHARAOH DAY — Project Identity & Data Boundary Charter

**Record date:** 2026-10-10  
**Document owner:** LUXOR PHARAOH DAY  
**Record type:** Project governance / isolation control  
**Release state:** BLOCKED — NOT VERIFIED

## 1. Official product identity
- **Product:** LUXOR PHARAOH DAY 🏺👑
- **Purpose:** Independent bilingual Luxor tourism information, visitor planning, price-checking, transport guidance, and local concierge experience.
- **Canonical source candidate:** `youssfalaa296-hash/luxor-pharaoh-day-9831bee9`
- **Application package:** `luxor-pharaoh-day`
- **Source version observed:** `5.3.1`
- **Expected production branch:** `main`
- **Runtime for release validation:** Node.js `24.21.0`, npm `11.19.0`

## 2. Resources owned exclusively by this project
LUXOR must have its own independently verified:
- GitHub source, issues, pull requests, CI workflow, release history, and rollback record.
- Vercel project, linked repository/branch, production deployment, and domain mapping.
- Environment variables and credentials, scoped only to the environments that need them.
- If a backend is enabled: database, authentication, storage buckets, service roles, policies, and backups.
- Analytics, logs, error monitoring, privacy notice, retention policy, and support/reporting workflow.
- Tourism content and its source, verification state, last-reviewed date, and expiry/review lifecycle.

**Unverified does not mean configured.** The currently observed Vercel project names include multiple similar LUXOR projects. The canonical production project and domain remain unconfirmed. Do not select, delete, transfer, or promote a project based on its name alone.

## 3. Data boundary
Allowed LUXOR domain data includes tourism information, official-site references, visitor preferences and plans, price/source checks, transport guidance, and issue reports. Collect personal data only when required and disclosed.

LUXOR must not collect, store, query, or process RefAI football videos, video uploads, inference jobs, match analysis, model outputs, or RefAI account records.

## 4. Credentials and service isolation
- Never reuse RefAI Supabase project IDs, URLs, API keys, storage, auth settings, model/provider keys, or deployment secrets.
- Keep Development, Preview, and Production variables separately scoped.
- Record variable **names and owning service only** in audit records; never record values.
- If Supabase is adopted, identify the dedicated LUXOR project and verify least privilege, RLS, private storage, and ownership checks before enabling user data.
- Add configuration validation that rejects known RefAI endpoints/project identifiers in LUXOR deployments.
- Cross-project access denial must be tested; documentation alone is not proof of isolation.

## 5. Release and change control
1. Work on a named feature/release branch; do not edit `main` directly for release work.
2. Review the exact PR diff and require successful CI for the exact head commit.
3. Confirm the canonical Vercel project, linked repository, production branch, domain, environment configuration, and rollback target.
4. Confirm deployment commit SHA, `target=production`, and `READY` state.
5. Run real-browser checks on the actual production domain.
6. Mark `RELEASE_STATUS: VERIFIED` only after evidence above is recorded.

A successful build or a Vercel Preview marked Ready is not production verification. Current observed deployment activity includes Vercel free-plan deployment-rate-limit errors; do not repeatedly trigger builds or treat failed deployments as successful.

## 6. Prohibited shortcuts
- No fabricated prices, opening hours, contact details, bookings, payment confirmations, or official-source claims.
- No production secrets in Git, issues, PRs, screenshots, or this document.
- No production domain changes or deletion of similarly named Vercel projects until ownership, traffic, domain assignment, and rollback are verified.
- No merging or production approval based only on this charter.

## 7. Acceptance evidence register
Before closure, record:
- [ ] Canonical repository and branch
- [ ] Canonical Vercel project ID and linked repository
- [ ] Verified production domain and DNS/assignment
- [ ] Backend/data resource identity (or documented reason none is enabled)
- [ ] Environment variable **names** and environment scopes, with values kept secret
- [ ] CI result for exact commit
- [ ] Cross-project denial test results
- [ ] Production deployment ID, commit SHA, and target
- [ ] Real-browser QA and rollback reference

## 8. Current official status
`PROJECT_ISOLATION: DOCUMENTED_NOT_VERIFIED`  
`RELEASE_STATUS: BLOCKED`

This charter establishes ownership boundaries and required evidence. It does not claim that a production backend, canonical deployment, cross-project security test, or production release has been completed.
