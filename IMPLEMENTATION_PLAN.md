# Eye Shots Implementation Plan

## Assumptions

- The task brief, `AGENTS.md`, and `README.md` are authoritative because `SPEC.md` currently contains no functional specification.
- Laravel 13 is the latest stable release and requires PHP 8.3; cPanel must expose PHP 8.3 or newer.
- Phase 1 content is curated foundation copy, not a claim that the final CMS content workflows exist.
- Portfolio imagery is represented with art-directed colour fields until Eye Shots supplies licensed originals; no generic stock photography is added.
- One administrator is provisioned from environment variables after deployment; public self-registration stays disabled.

## Reviewable delivery stages

1. **Planning:** architecture, schema, routes, permissions, phased plan, cPanel runbook.
2. **Foundation:** official Laravel 13 React starter, MySQL defaults, secure environment and ignore rules.
3. **Access control:** administrator login, active-user guard, roles/permissions, provisioning command, protected CMS routes.
4. **Experience:** Eye Shots tokens, responsive public shell, Home/Services/Portfolio/About foundations, polished CMS shell.
5. **Settings and quality:** global settings persistence, validation, automated feature tests, type/lint/build checks, visual responsive review.
6. **Delivery:** logical commit, branch push, draft pull request with scope, tests, screenshots/notes, and deferred work.

## Later phases

- Phase 2: service/portfolio/page CMS and media pipeline.
- Phase 3: enquiries, customers, bookings, operational notifications.
- Phase 4: contract templates, acceptance evidence, customer accounts.
- Phase 5: private albums, access codes, delivery controls and audit logs.
- Phase 6: popup campaigns, SEO, branded emails, reporting and production hardening.

## Phase 1 acceptance criteria

- Four responsive public routes share a branded header/footer and metadata.
- No public account registration route exists.
- Inactive or unauthorized users cannot access CMS routes.
- A super administrator can sign in and update validated global settings.
- Laravel feature tests, TypeScript, lint, formatting, and production asset build pass.
- Deployment requires no continuously running Node process.

