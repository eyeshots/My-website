# Eye Shots Phase 1 Preview Report

Audit date: 11 July 2026  
Environment: Laravel 13, Vite development server, PHP 8.3, SQLite demonstration database  
Viewports: desktop 1440 × 900, tablet 768 × 1024, mobile 390 × 844

## Pages and screenshots reviewed

All screenshots are stored in `artifacts/website-preview/` and contain demonstration content only.

| Area | Desktop | Tablet | Mobile |
|---|---|---|---|
| Home | `home-desktop.png` | `home-tablet.png` | `home-mobile.png` |
| Services | `services-desktop.png` | `services-tablet.png` | `services-mobile.png` |
| Portfolio | `portfolio-desktop.png` | `portfolio-tablet.png` | `portfolio-mobile.png` |
| About | `about-desktop.png` | `about-tablet.png` | `about-mobile.png` |
| Administrator login | `admin-login-desktop.png` | `admin-login-tablet.png` | `admin-login-mobile.png` |
| CMS dashboard | `cms-dashboard-desktop.png` | `cms-dashboard-tablet.png` | `cms-dashboard-mobile.png` |
| Website settings | `website-settings-desktop.png` | `website-settings-tablet.png` | `website-settings-mobile.png` |

`mobile-navigation-open.png` records the expanded mobile public navigation. Desktop navigation is visible in every desktop public-page capture. Login captures use obviously fake demonstration values and contain no credentials.

## Findings and fixes

### Responsive issues

- Public and CMS layouts were reviewed at all three target widths. Text, actions, forms and navigation remain within the viewport without horizontal overflow.
- Public navigation collapses below the desktop breakpoint and exposes a labelled menu button. CMS navigation also collapses to its labelled menu control.
- A screenshot-timing artefact initially produced malformed full-page captures while Vite was replacing styles. The final audit uses exact viewport captures after the page has settled; this was not an application layout defect.

### Accessibility issues

- Confirmed page headings, main/banner/footer landmarks, labelled form inputs, keyboard-native links/buttons and accessible menu button names.
- Confirmed meaningful colour contrast for primary text and calls to action in the reviewed layouts.
- Confirmed reduced-motion handling exists in the global stylesheet.
- The passkey component was making an incorrect unprefixed request from the administrator login. Passkeys are now removed from the Phase 1 login surface; password login, throttling, recovery and optional two-factor authentication remain.
- Full automated WCAG conformance and assistive-technology testing remain a production hardening task; this audit is a focused visual and semantic check.

### Design consistency

- Warm white, crimson, refined blue and charcoal are applied consistently across public and CMS surfaces.
- Display and body typography, square editorial controls, rules and spacing remain consistent across breakpoints.
- No predominantly dark theme, glassmorphism, excessive gradients or generic stock photography is present.

### Incomplete or placeholder areas

- Portfolio imagery uses intentional colour-field compositions until licensed Eye Shots photography is supplied. No generic stock imagery is substituted.
- The four public routes are Phase 1 foundations with curated static content. Fully editable pages, services, portfolio and media belong to Phase 2.
- Dashboard metrics describe foundation readiness only. Booking, CRM, contracts, customer accounts, private albums, email delivery, promotions, SEO and audit tooling remain deferred exactly as documented in `SPEC.md`.
- “Find My Photos” remains disabled and deferred until after the secure private album system and required privacy/legal review.

## Security completion check

- `.env`, environment variants, keys, private storage, dependency folders and local work files are ignored.
- Repository scans found no committed password, API key or personal customer record. Screenshots use demonstration login values.
- Public registration is disabled in Fortify and covered by tests.
- CMS routes require authentication, verified email, active status and explicit server-side permissions.
- Global website-setting updates use Laravel validation and exact permission middleware.
- Administrator provisioning requires `ADMIN_EMAIL` and a unique `ADMIN_PASSWORD` of at least 12 characters from the environment.
- `config/app.php` defaults debugging to false; cPanel instructions require `APP_ENV=production` and `APP_DEBUG=false`.
- Vite assets are compiled before cPanel deployment. No continuously running Node server is required in production.

## Run locally

From the project root, with PHP 8.3+, Composer 2 and Node 22/pnpm installed:

```bash
composer install
pnpm install --frozen-lockfile
cp .env.example .env
php artisan key:generate
touch database/database.sqlite
```

Set the following local-only database values in `.env`:

```dotenv
DB_CONNECTION=sqlite
DB_DATABASE=/absolute/path/to/project/database/database.sqlite
```

Then initialise and run the demonstration application:

```bash
php artisan migrate:fresh --seed
php artisan eyeshots:provision-admin
php artisan serve --host=127.0.0.1 --port=8765
pnpm dev --host 127.0.0.1
```

The last two commands run in separate terminals. Open `http://127.0.0.1:8765`. The Vite server is for local development only.

## Verification commands

```bash
php artisan test
vendor/bin/pint --test
pnpm types:check
pnpm lint:check
pnpm build
```
