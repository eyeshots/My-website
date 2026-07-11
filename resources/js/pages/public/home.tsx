import { Head, Link } from '@inertiajs/react';

export default function Home() {
    return (
        <>
            <Head title="Brisbane Photography & Film">
                <meta
                    name="description"
                    content="Eye Shots creates premium photography and films in Brisbane, shaped by warmth, precision and story."
                />
            </Head>
            <section className="overflow-hidden bg-ivory">
                <div className="mx-auto grid min-h-[78vh] max-w-7xl items-center gap-14 px-5 py-16 md:grid-cols-[1.05fr_.95fr] lg:px-10">
                    <div>
                        <p className="text-xs font-semibold tracking-[.24em] text-crimson uppercase">
                            Brisbane photography + film
                        </p>
                        <h1 className="mt-6 font-display text-6xl leading-[.98] sm:text-7xl lg:text-8xl">
                            Honest frames.
                            <br />
                            <em className="font-normal text-blue">
                                Enduring stories.
                            </em>
                        </h1>
                        <p className="mt-8 max-w-xl text-lg leading-8 text-ink-muted">
                            Eye Shots creates considered imagery for people,
                            celebrations and brands—rooted in Nepalese warmth
                            and shaped by contemporary Brisbane.
                        </p>
                        <div className="mt-10 flex flex-wrap gap-4">
                            <Link
                                href="/portfolio"
                                className="bg-crimson px-7 py-3.5 font-semibold text-white hover:bg-crimson-deep"
                            >
                                View selected work
                            </Link>
                            <Link
                                href="/services"
                                className="border border-charcoal px-7 py-3.5 font-semibold hover:border-blue hover:text-blue"
                            >
                                Explore services
                            </Link>
                        </div>
                    </div>
                    <div className="relative mx-auto aspect-[4/5] w-full max-w-lg bg-blue-pale">
                        <div className="absolute inset-5 border border-blue/30" />
                        <div className="absolute bottom-0 left-0 h-2/3 w-2/3 bg-blue" />
                        <div className="absolute top-0 right-0 h-3/5 w-3/5 bg-crimson" />
                        <div className="absolute inset-0 flex items-end p-9 text-white">
                            <p className="max-w-xs font-display text-3xl">
                                Light, movement and the feeling between moments.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mx-auto max-w-7xl px-5 py-24 lg:px-10">
                <div className="editorial-rule" />
                <div className="mt-14 grid gap-12 md:grid-cols-3">
                    {[
                        [
                            '01',
                            'Weddings',
                            'Unscripted emotion, artfully observed.',
                        ],
                        [
                            '02',
                            'Portraits',
                            'Portraits that feel unmistakably like you.',
                        ],
                        [
                            '03',
                            'Brand stories',
                            'Clear visual language for thoughtful businesses.',
                        ],
                    ].map(([n, t, c]) => (
                        <div key={n}>
                            <span className="text-sm text-crimson">{n}</span>
                            <h2 className="mt-6 font-display text-3xl">{t}</h2>
                            <p className="mt-4 leading-7 text-ink-muted">{c}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="bg-crimson px-5 py-20 text-white">
                <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 md:flex-row md:items-end">
                    <h2 className="max-w-2xl font-display text-4xl sm:text-5xl">
                        Let’s make something that still matters years from now.
                    </h2>
                    <a
                        href="mailto:studio@eyeshots.com.au"
                        className="border-b border-white pb-1 font-semibold"
                    >
                        Tell us your story →
                    </a>
                </div>
            </section>
        </>
    );
}
