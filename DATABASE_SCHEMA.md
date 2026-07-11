# Eye Shots Database Schema

## Conventions

- MySQL 8+ or MariaDB 10.6+, `utf8mb4`, InnoDB, UTC timestamps.
- Numeric primary keys internally; future externally exposed resources also receive UUID/ULID public identifiers.
- Foreign keys are indexed. Destructive cascades are limited to join/child records.
- Personal and security-sensitive fields are never included in demo seed data.

## Phase 1 tables

| Table | Purpose | Important columns |
|---|---|---|
| `users` | Staff identities | `name`, unique `email`, hashed `password`, `is_active`, verification, 2FA, remember token |
| `roles` | Named staff roles | unique `name`, `label`, nullable `description` |
| `permissions` | Atomic capabilities | unique `name`, `label`, nullable `description` |
| `role_user` | User-role assignment | unique (`role_id`, `user_id`) |
| `permission_role` | Role capability assignment | unique (`permission_id`, `role_id`) |
| `website_settings` | Singleton global website configuration | unique `key`, JSON `value`, `type`, `group`, public flag |
| `passkeys` | Fortify WebAuthn credentials | Fortify-managed credential fields |
| `password_reset_tokens` | Password resets | email, token, created timestamp |
| `sessions` | Database sessions | session payload, user/IP metadata |
| `cache`, `cache_locks` | Shared cache | Laravel-managed fields |
| `jobs`, `job_batches`, `failed_jobs` | Queue foundation | Laravel-managed fields |

Initial permissions are `dashboard.view`, `settings.view`, and `settings.update`. The initial `super-admin` role receives every permission.

## Planned tables (later phases)

| Domain | Tables |
|---|---|
| CMS | `pages`, `page_sections`, `media`, `seo_metadata`, `navigation_items` |
| Portfolio/services | `services`, `portfolio_projects`, `portfolio_media`, `categories`, pivot tables |
| CRM/enquiries | `customers`, `enquiries`, `customer_notes`, `tags` |
| Bookings | `bookings`, `booking_services`, `booking_status_history`, `payments` |
| Contracts | `contract_templates`, `contracts`, `contract_acceptances` |
| Galleries | `albums`, `album_assets`, `album_access_credentials`, `album_access_logs` |
| Marketing | `popup_campaigns`, `email_templates`, `email_deliveries` |
| Audit | `activity_logs`, `authentication_logs`, `file_access_logs` |

Detailed later-phase columns must be reviewed immediately before each feature is implemented.

