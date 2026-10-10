# Project Isolation and Production Ownership Audit

Audit date: 2026-10-10

## Purpose
LUXOR PHARAOH DAY is a tourism information and day-planning product. RefAI is a football video-analysis product. They must remain independent products with separate source control, runtime configuration, secrets, user data, storage, authentication, observability, and release gates.

## Current evidence (not a readiness claim)
- Candidate LUXOR source repository: `youssfalaa296-hash/luxor-pharaoh-day-9831bee9`, package `luxor-pharaoh-day`, version `5.3.1`.
- Vercel has multiple similarly named LUXOR projects. The project `luxor-pharaoh-day` has a recent deployment in `ERROR` state; `luxor-pharaoh-day-q3rd` has a `READY` preview/non-production-target deployment, while its latest observed production-target deployment is `ERROR`.
- Environment-variable inventory for inspected Vercel project names returned no visible variables. Do not assume Supabase or any other backend is configured.
- Canonical domain and the intended production Vercel project must be confirmed before retiring duplicates or changing domains.

## Isolation requirements
- [ ] Confirm canonical GitHub repository, Vercel project ID, connected repository, production branch, and production domain.
- [ ] Keep all LUXOR secrets scoped only to the LUXOR Vercel project and required environments.
- [ ] Use LUXOR-specific data resources; do not store or query RefAI users, videos, inference jobs, or results.
- [ ] If Supabase is used, use a LUXOR-specific project and enforce least privilege, RLS, private storage, and ownership checks.
- [ ] Separate LUXOR analytics, error monitoring, retention, privacy notice, and operational support.
- [ ] Add configuration checks that reject known RefAI endpoints/keys/project identifiers in LUXOR deployments.
- [ ] Test that LUXOR credentials cannot read or mutate RefAI data and vice versa.
- [ ] Verify production deployment and real browser behavior separately from a successful build.
- [ ] Review duplicate projects only after confirming traffic, domains, rollback targets, and ownership; do not delete as part of this audit.

## Release evidence required
Record the selected production project ID, linked repository/branch, deployment ID, target, domain verification, environment-variable names (never values), backend/data-resource identity, successful isolation tests, and real-browser QA. Keep secrets out of this document and all commits.

## Status
This document records observed evidence and pending work. It does not claim that project isolation or production readiness is complete.
