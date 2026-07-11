# Eye Shots Product Specification

## Product

Eye Shots is a premium Brisbane photography and videography website with a custom studio-management platform. Its visual identity combines contemporary Australian editorial restraint with subtle Nepalese heritage.

## Required technology and hosting

One cPanel-compatible Laravel application: Laravel 13, PHP 8.3+, React, Inertia, TypeScript, Tailwind CSS, Vite, and MySQL/MariaDB. Production assets are precompiled; no continuously running Node server is required.

## Phase 1

- Secure administrator authentication with no public registration, login throttling, password recovery, verification and optional 2FA/passkeys.
- Role/permission foundation with server-side CMS authorization.
- Bright, responsive Eye Shots design system: warm white, Nepal-inspired crimson, refined blue, charcoal type, generous editorial spacing, minimal motion.
- Home, Services, Portfolio and About foundations with responsive header/footer.
- CMS dashboard and editable global website settings foundation.
- MySQL-ready environment configuration, secure ignore rules, automated tests and cPanel deployment documentation.

## Complete product roadmap

Later phases add content, portfolio and service management; enquiries and CRM; bookings; contract templates and secure acceptance; customer accounts; private albums with hashed access codes; branded emails; promotional popups; SEO; and activity/access logs.

## Security and quality

Private originals remain outside the public directory and are served only after server authorization. Sensitive configuration uses environment variables. Uploads are validated, access attempts rate-limited and logged, tests contain no real customer data, and features are not described as complete until they work and are tested.

## Explicit exclusions from Phase 1

No portfolio/service CRUD, customer data, booking workflow, contracts, private albums, popup campaigns, email delivery, payments, or full SEO system is implemented in Phase 1.
