import { Head, Link } from '@inertiajs/react';
export default function Dashboard() {
    return (
        <>
            <Head title="CMS Overview" />
            <div className="max-w-5xl">
                <p className="text-xs font-semibold tracking-[.2em] text-crimson uppercase">
                    Eye Shots CMS
                </p>
                <h1 className="mt-3 font-display text-4xl">
                    Good work starts with a clear view.
                </h1>
                <p className="mt-4 max-w-2xl text-ink-muted">
                    Phase 1 establishes the secure workspace. Content,
                    portfolio, booking and gallery tools will arrive in their
                    planned phases—nothing here pretends to be functional before
                    it is.
                </p>
                <div className="mt-10 grid gap-5 md:grid-cols-3">
                    {[
                        ['Public pages', '4', 'Foundations live'],
                        ['Access control', '3', 'Permissions seeded'],
                        [
                            'Website settings',
                            'Ready',
                            'Identity details editable',
                        ],
                    ].map(([l, v, c]) => (
                        <div
                            key={l}
                            className="border-t-2 border-crimson bg-paper p-6 shadow-[0_12px_35px_rgba(36,37,38,.06)]"
                        >
                            <p className="text-sm text-ink-muted">{l}</p>
                            <p className="mt-4 font-display text-4xl">{v}</p>
                            <p className="mt-3 text-sm text-blue">{c}</p>
                        </div>
                    ))}
                </div>
                <section className="mt-12 border border-border bg-paper p-7">
                    <h2 className="font-display text-2xl">
                        Foundation controls
                    </h2>
                    <p className="mt-3 text-ink-muted">
                        Keep the studio identity shown across the site current.
                    </p>
                    <Link
                        href="/admin/settings"
                        className="mt-6 inline-block bg-crimson px-5 py-3 text-sm font-semibold text-white"
                    >
                        Edit website settings
                    </Link>
                </section>
            </div>
        </>
    );
}
