# Eye Shots Development Instructions

## Project

Build a production-ready website and studio-management platform for Eye Shots, a premium photography and videography business based in Brisbane, Australia, with Nepalese heritage.

## Required stack

* Laravel
* PHP 8.3 or later
* React
* Inertia
* TypeScript
* Tailwind CSS
* Vite
* MySQL or MariaDB

The project must be one Laravel application. Do not create separate frontend and backend repositories.

The production application must work on standard cPanel hosting without requiring a continuously running Node.js server.

## Design direction

Create a premium, editorial and bright website.

Use:

* Warm white backgrounds
* Nepal-inspired crimson accents
* Refined blue accents
* Charcoal typography
* Generous spacing
* Elegant image-focused layouts
* Minimal animations
* Modern responsive navigation

Do not use:

* A predominantly dark theme
* Generic AI-looking layouts
* Excessive gradients
* Excessive rounded cards
* Generic stock photographs
* Heavy glassmorphism
* Cheap-looking camera graphics
* Nepalese cultural clichés

The design should subtly connect Nepalese heritage with contemporary Brisbane photography.

## Public pages

Create four main frontend pages:

1. Home
2. Services
3. Portfolio
4. About

Additional functional pages may include:

* Contact
* Booking enquiry
* Client portal
* Album access
* Contract acceptance
* Privacy policy
* Terms and conditions
* Administrator login

## Major systems

The application must eventually include:

* Custom content-management system
* Portfolio management
* Service management
* Customer enquiries
* Customer database
* Booking management
* Contract templates
* Secure contract acceptance
* Customer accounts
* Private client albums
* Unique album-access codes
* Branded emails
* Promotional homepage popup
* SEO management
* Activity and access logs
* cPanel deployment documentation

## Security

* Store client-album originals outside the public web directory.
* Never expose private files through predictable URLs.
* Use server-side authorisation for all customer resources.
* Hash album access codes where practical.
* Apply login and album-code rate limits.
* Validate all uploaded files.
* Never commit passwords, API keys, SMTP passwords or production secrets.
* Use environment variables for sensitive configuration.
* Add `.env` to `.gitignore`.
* Never include real customer information in seed data or tests.

## Development workflow

Before implementing a major feature:

1. Inspect the existing code.
2. Review the project specification.
3. Prepare a short implementation plan.
4. Identify database and permission changes.
5. Implement the feature.
6. Run tests.
7. Review security and responsive behaviour.
8. Update documentation.

Do not overwrite completed custom functionality with a generic template.

Do not leave non-functional buttons or placeholder dashboard sections.

Do not claim a feature is complete unless it works and has been tested.

## Initial task

Before building the complete application, create:

* `ARCHITECTURE.md`
* `DATABASE_SCHEMA.md`
* `ROUTE_MAP.md`
* `PERMISSION_MATRIX.md`
* `IMPLEMENTATION_PLAN.md`
* `.env.example`
* `.gitignore`

Then implement only Phase 1:

* Laravel foundation
* React, Inertia and TypeScript
* Authentication
* Administrator roles and permissions
* Global design system
* Four public-page foundations
* CMS dashboard foundation
* Global website settings
* Automated tests
* Initial cPanel deployment notes

Commit work in logical, reviewable stages.
