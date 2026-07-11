# Eye Shots cPanel Deployment

## Hosting requirements

PHP 8.3+ with BCMath, Ctype, cURL, DOM, Fileinfo, JSON, Mbstring, OpenSSL, PDO MySQL, Tokenizer and XML; MySQL 8+ or MariaDB 10.6+; Composer 2; cron; SSL; and permission to point the domain document root at `public/`.

## Build before upload

Run `pnpm install --frozen-lockfile`, `pnpm build`, `composer install --no-dev --prefer-dist --optimize-autoloader`, and the full test suite in CI or a development machine. Upload the application including `vendor/` and `public/build/` if Composer is unavailable on the host. Node is not required in production.

## cPanel layout

Place the Laravel application outside `public_html` when possible, for example `~/eyeshots`, and set `eyeshots.com.au`'s document root to `~/eyeshots/public`. Never copy `.env`, `storage`, or private gallery originals into a web-accessible directory.

## First deployment

1. Create a MySQL database/user and grant only that database's privileges.
2. Copy `.env.example` to `.env`; set production URL, generated `APP_KEY`, database, mail, secure session, and administrator provisioning values.
3. Run `php artisan migrate --force`.
4. Run `php artisan eyeshots:provision-admin`, then remove provisioning secrets from the environment when operationally practical.
5. Link only public media with `php artisan storage:link`; private gallery storage remains unlinked.
6. Run `php artisan optimize`.
7. Add cron: `* * * * * cd /home/ACCOUNT/eyeshots && php artisan schedule:run >> /dev/null 2>&1`.

Writable directories are `storage/` and `bootstrap/cache/`. Typical permissions are directories `755` and files `644`, with writable paths owned by the cPanel account. Do not use `777`.

## Each release

Enable maintenance mode, back up database and private storage, deploy reviewed files/build artifacts, install production dependencies, run migrations, run `php artisan optimize`, verify `/up`, public pages, login and CMS, then disable maintenance mode. Retain a rollback artifact and database backup.

## Security checklist

- `APP_ENV=production`, `APP_DEBUG=false`, HTTPS forced, secure cookies enabled.
- `.env` is outside web access and excluded from source control.
- `public/.htaccess` is active and directory listing disabled.
- SMTP credentials and administrator provisioning secrets are unique production values.
- Queue processing should use a cPanel cron-compatible bounded worker when later features introduce queued email; no daemon is assumed.

