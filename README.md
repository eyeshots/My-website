# Eye Shots Website

Premium photography and videography website, custom CMS, booking management, contracts, customer portal and private client galleries for Eye Shots Brisbane.

## Business

- Business: Eye Shots
- Website: eyeshots.com.au
- Email: studio@eyeshots.com.au
- Location: Brisbane, Australia
- Heritage: Nepal

## Technology

- Laravel
- React
- Inertia
- TypeScript
- Tailwind CSS
- MySQL
- cPanel deployment

## Phase 1 setup

Requirements: PHP 8.3+, Composer 2 and Node 20+ (or pnpm). Copy `.env.example` to `.env`, configure a local MySQL/MariaDB database, then run:

```bash
composer install
php artisan key:generate
php artisan migrate --seed
pnpm install
pnpm build
php artisan test
```

Set `ADMIN_NAME`, `ADMIN_EMAIL` and a unique `ADMIN_PASSWORD` (12+ characters), then run `php artisan eyeshots:provision-admin`. Sign in at `/admin/login`. Public self-registration is intentionally disabled.

Architecture, schema, routes, access rules, assumptions and deployment are documented in the root Markdown files. Phase 1 does not include the later booking, contract, CRM or private-gallery workflows.
