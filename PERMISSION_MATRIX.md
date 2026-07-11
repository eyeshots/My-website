# Eye Shots Permission Matrix

## Phase 1

| Capability | Super admin | Content manager (planned) | Studio manager (planned) | Customer |
|---|:---:|:---:|:---:|:---:|
| View CMS dashboard | Yes | Yes | Yes | No |
| View global settings | Yes | Yes | No | No |
| Update global settings | Yes | No | No | No |
| Manage roles/permissions | Yes (later UI) | No | No | No |

Only `super-admin` is provisioned in Phase 1. Other columns define the intended least-privilege direction, not seeded access.

## Planned capabilities

| Area | Permissions |
|---|---|
| Content | `pages.*`, `services.*`, `portfolio.*`, `media.*`, `seo.*` |
| CRM | `enquiries.*`, `customers.*`, `customer_notes.*` |
| Operations | `bookings.*`, `contracts.*`, `payments.view` |
| Galleries | `albums.*`, `album_assets.*`, `album_access_logs.view` |
| Marketing | `popups.*`, `email_templates.*`, `email_deliveries.view` |
| Governance | `users.*`, `roles.*`, `settings.*`, `activity_logs.view` |

`*` means separate `view`, `create`, `update`, `delete`, and any domain-specific actions. Every controller action must authorize its exact capability.

