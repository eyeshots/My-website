# Eye Shots Architecture

## Scope and source of truth

This document describes the complete target architecture and identifies the Phase 1 slice. Requirements are drawn from `AGENTS.md`, `README.md`, and the approved task brief. `SPEC.md` currently contains only a repository tree, so it adds no functional requirements.

## Application shape

Eye Shots is one Laravel 13 application using server-side routing and controllers, Eloquent, Fortify authentication, Inertia, React 19, TypeScript, Tailwind CSS 4, and Vite. MySQL or MariaDB is the production database. Vite assets are compiled before deployment; production does not run Node.js.

```text
Browser -> Laravel routes/middleware -> controllers/services -> Eloquent -> MySQL
              |                         |
              +-> Inertia responses ----+-> React pages + shared settings
              +-> authorised download controller -> private storage
```

## Boundaries

- **Public website:** editorial pages and future enquiry/booking entry points. Public pages read only published content.
- **CMS:** `/admin/*`, authenticated, verified, active administrators only. Permissions are checked server-side.
- **Customer portal:** a later authenticated boundary, separate from CMS authorization.
- **Domain layer:** services will own workflows such as booking state transitions, contract acceptance, album access, and email dispatch.
- **Storage:** public editorial media may use `storage/app/public`; original client files use a private disk and are streamed only after authorization.

## Phase 1

Phase 1 supplies the framework, public page foundations, secure administrator login, role/permission schema, CMS shell, editable global settings, shared design tokens, database configuration, and automated tests. It intentionally excludes portfolio CRUD, enquiries, bookings, contracts, customers, albums, emails, popup campaigns, and detailed SEO tooling.

## Security decisions

- Public registration is disabled. Administrators are provisioned by an idempotent CLI command using environment-provided credentials.
- Fortify supplies password reset, email verification, two-factor authentication, passkeys, session regeneration, CSRF protection, and login throttling.
- CMS routes require `auth`, `verified`, `active`, and an explicit permission.
- Authorization is enforced in middleware/policies, never solely in React.
- Secrets remain in environment variables. Production cookies are secure and HTTP-only.
- Future private files use non-public storage, opaque identifiers, validated MIME/size limits, and authorized streaming.

## Operational model

The cPanel document root points to Laravel's `public/` directory. Deployment uploads application code and pre-built assets, installs Composer dependencies without dev packages, runs migrations, caches configuration/routes/views, and schedules Laravel's scheduler with cron.

