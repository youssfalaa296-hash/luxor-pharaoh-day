# Project Boundary & Data-Isolation Charter — LUXOR PHARAOH DAY

**Status:** Governance baseline proposed through pull request; not a claim that every infrastructure control has been audited or enforced.
**Project owner scope:** LUXOR PHARAOH DAY only.
**Repository:** https://github.com/youssfalaa296-hash/luxor-pharaoh-day-9831bee9
**Vercel project:** `luxor-pharaoh-day` (project ID recorded in deployment administration; verify current team/project mapping before changes).

## 1. Purpose and permitted scope

LUXOR PHARAOH DAY is an independent bilingual visitor-information and trip-planning platform for Luxor. Its scope includes tourism discovery, source-backed site information and prices, transport guidance, visitor plans, issue reporting, and any future booking/payment features only when separately implemented and tested.

Legacy LUXOR QUEST requirements may be retained as project history and specification continuity. They do not authorize sharing RefAI code, customer records, credentials, infrastructure, or operational data.

## 2. Mandatory separation from RefAI

- Do not import, copy, or share RefAI source code, environment files, access tokens, API keys, OAuth credentials, database schemas, user records, uploaded videos, analysis results, storage objects, logs, or monitoring payloads.
- Do not connect LUXOR PHARAOH DAY to RefAI's Supabase project, authentication tenant, storage buckets, or analysis services.
- Keep this project's GitHub repository, branches, pull requests, CI runs, Vercel project, deployment domains, environment variables, analytics, alerts, and access permissions scoped to this project.
- Shared general-purpose libraries may only be introduced through a documented review and must contain no project secrets, user data, or implicit cross-project access.
- Do not put secrets, personal data, production exports, access tokens, or raw customer information in Git, issues, pull requests, logs, or public documentation.

## 3. Data classification and handling

- **Public:** approved tourism descriptions and links to official sources.
- **Operational:** verification records, content-review timestamps, error reports, and analytics; minimize and restrict access.
- **Personal/confidential:** visitor contact details, account data, saved plans associated with a person, booking/payment records if introduced; collect only when necessary and document retention and deletion.
- **Secrets:** deployment tokens, provider keys, signing keys, and credentials; store only in the project's approved secret manager and scope by environment.

Do not invent or present unverified tourism prices, opening hours, booking confirmations, payment outcomes, or provider integrations as real.

## 4. Environment and deployment rules

- Keep development, preview, and production configuration separate.
- Use only LUXOR PHARAOH DAY-owned variables and services. Do not copy values from RefAI.
- Any database, authentication, booking, or payment integration must have a documented project-specific owner, least-privilege credentials, access controls, retention rules, and acceptance tests.
- Never promote to production solely because source checks pass. Require successful CI, dependency/security review, hosted browser acceptance tests, preview smoke tests, and verification that the deployed commit matches the reviewed commit.
- Do not claim booking, payment, authentication, or production readiness without end-to-end evidence.

## 5. Change control and incident response

Before adding a provider or external integration, record its purpose, data fields sent, destination, retention, access permissions, and failure behavior. Review suspected cross-project exposure immediately; revoke/rotate affected credentials, disable the integration if needed, preserve minimal audit evidence, and document remediation without exposing secrets.

## 6. Current verification limits

This charter documents required boundaries. It does **not** by itself prove that Vercel settings, environment variables, analytics, database connections, access permissions, DNS, or production traffic have been inspected. Those controls must be audited in the actual provider dashboards before marking isolation as verified.

## 7. Acceptance checklist

- [ ] Confirm repository and Vercel project ownership/mapping.
- [ ] Inventory all environment variable **names** (never publish values) and verify none are borrowed from RefAI.
- [ ] Verify no RefAI Supabase URL/key, auth tenant, storage bucket, webhook, or service endpoint is configured here.
- [ ] Verify CI, preview, production, analytics, and monitoring are project-scoped.
- [ ] Review tracked files and history for accidentally committed secrets; rotate any exposed credentials.
- [ ] Record evidence and date for each completed control.
- [ ] Obtain passing hosted browser QA and deployment smoke tests before release.

**Release/isolation state: NOT VERIFIED until the checklist is evidenced.**
