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

### Phase 2 — Editable website and media

- Make the frontend fully editable through the custom CMS, including page sections, navigation and reusable calls to action.
- Add service and portfolio management with publishing status, ordering, categories and SEO fields.
- Add a central media library with validated uploads, metadata, alt text, image variants and usage references.
- Add homepage promotional offers with date-based popup scheduling, frequency controls and administrator enable/disable controls.
- Add site-wide and per-page SEO management.

### Phase 3 — Enquiries, customers and bookings

- Capture customer enquiries with consent, status, assignment, notes and spam controls.
- Maintain a searchable customer database without including real customer records in seed or test data.
- Add a booking calendar, conflict checks, service selection, confirmation workflow and branded transactional emails from `studio@eyeshots.com.au`.
- Use cPanel-compatible database queues and cron-driven scheduled tasks; no continuously running Node server or queue daemon may be required.

### Phase 4 — Contracts and customer accounts

- Add versioned contract templates, per-booking contracts, secure signing/acceptance evidence and immutable PDF records.
- Add verified customer accounts with server-side ownership checks and a clear account recovery flow.

### Phase 5 — Private client albums

- Add private client albums with originals stored outside the public web directory.
- Use secure, unique album access codes, hashed where practical, with throttling, expiry/revocation and access logs.
- Add customer favourites and administrator-controlled, auditable downloads.
- Serve every private asset through authorization rather than predictable public URLs.
- Add activity, authentication, album access and file-download logs with defined retention.

### Deferred Phase 5+ — Privacy-first “Find My Photos”

This optional feature remains deferred until the secure private album system is complete. It must be feature-flagged and disabled by default.

1. An authorised album visitor chooses either **View All Photos** or **Find My Photos**.
2. Before any biometric processing, the visitor receives a clear explanation and provides express biometric consent.
3. The visitor takes or uploads a selfie. The search is restricted exclusively to the currently authorised album.
4. The selfie is processed temporarily and deleted immediately after the search or on failure; it is not retained as a permanent named biometric profile.
5. Cross-album and global identity searches are prohibited.
6. A guardian confirmation workflow is required for minors.
7. The implementation uses a provider abstraction; Amazon Rekognition is a possible first provider, not a permanent coupling.
8. Feature flags, configurable retention limits, verifiable deletion workflows and an administrator kill switch are mandatory.
9. Production launch requires Australian privacy and legal review, including consent wording, minors, biometric handling, overseas processing and incident response.

### Phase 6 — Communications, governance and hardening

- Complete branded email templates and delivery records for messages sent from `studio@eyeshots.com.au`.
- Complete promotional scheduling, SEO reporting, operational reporting and export controls.
- Review activity/access logs, retention and deletion workflows.
- Harden cPanel deployment, queues, scheduler monitoring, backups, restore procedures and release rollback.

## Security and quality

Private originals remain outside the public directory and are served only after server authorization. Sensitive configuration uses environment variables. Uploads are validated, access attempts rate-limited and logged, tests contain no real customer data, and features are not described as complete until they work and are tested.

## Explicit exclusions from Phase 1

No portfolio/service CRUD, customer data, booking workflow, contracts, private albums, popup campaigns, email delivery, payments, or full SEO system is implemented in Phase 1.
