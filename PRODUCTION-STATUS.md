# Production Status

Last audited: 2026-10-10

Current state: **Production Candidate — Verification Required**

## Evidence recorded

- Source branch: `main`.
- Audited commit: `9194aa6c1558b0a47f4d33ec177ba4ef568d01de`.
- `package.json` declares Luxor Pharaoh Day v5.3.1, Node.js 24.x, npm >=11 <12, and npm@11.19.0.
- A committed `package-lock.json` exists.
- `vercel.json` uses `npm ci` and `npm run build`.
- The latest combined commit status contains both successful and failed Vercel checks, plus a pending deployment status. This is mixed evidence, not a clean release gate.
- Real-browser acceptance testing is not established by this source audit.

## Release decision

Do not label the current source `READY_FOR_RELEASE` or `VERIFIED` solely from repository metadata. First identify the authoritative Vercel production project and deployment, obtain green CI/build results for the audited commit, run route/runtime checks, and complete Android Chrome and desktop Chrome interaction QA. Record evidence and deployment identifiers before upgrading the release status.

No production data, secrets, deployment settings, or source files were changed by the read-only audit.