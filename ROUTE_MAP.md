# Eye Shots Route Map

## Phase 1 public routes

| Method | Path | Name | Access | Result |
|---|---|---|---|---|
| GET | `/` | `home` | Public | Home foundation |
| GET | `/services` | `services` | Public | Services foundation |
| GET | `/portfolio` | `portfolio` | Public | Portfolio foundation |
| GET | `/about` | `about` | Public | About foundation |
| GET | `/admin/login` | `login` | Guest | Administrator sign-in |
| POST | `/admin/login` | Fortify | Throttled guest | Authenticate administrator |
| POST | `/logout` | Fortify | Authenticated | End session |
| GET | `/forgot-password` | Fortify | Guest | Password reset request |
| GET/POST | `/two-factor-challenge` | Fortify | Guest challenge | Complete 2FA |
| GET | `/up` | framework | Public | Health check |

## Phase 1 CMS routes

All routes below require `auth`, `verified`, active status, and the named permission.

| Method | Path | Name | Permission | Result |
|---|---|---|---|---|
| GET | `/admin` | `admin.dashboard` | `dashboard.view` | CMS dashboard shell |
| GET | `/admin/settings` | `admin.settings.edit` | `settings.view` | Global settings form |
| PUT | `/admin/settings` | `admin.settings.update` | `settings.update` | Validate and save settings |

## Planned route groups

Later phases add `/contact`, `/booking-enquiry`, `/client/*`, opaque `/album/*`, and permission-protected `/admin/{services,portfolio,enquiries,customers,bookings,contracts,albums,seo,logs}` groups. Routes will be named and resource-oriented; sensitive downloads will never map directly to storage paths.

