import { Head } from '@inertiajs/react';
import PageIntro from '@/components/public/page-intro';
const services = [
    [
        'Wedding stories',
        'Still photography and films that hold the energy, intimacy and generous chaos of a wedding day.',
        'Full-day and intimate coverage',
    ],
    [
        'Portrait sessions',
        'Unhurried portraits for individuals, couples and families, guided with a light hand.',
        'Studio and location',
    ],
    [
        'Brand & editorial',
        'Distinctive campaigns, team stories and content libraries for brands with something real to say.',
        'Photography and short film',
    ],
];
export default function Services() {
    return (
        <>
            <Head title="Services" />
            <PageIntro
                eyebrow="Our services"
                title="Considered coverage for stories of every scale."
                copy="Every commission begins with listening. We shape the pace, team and visual approach around what the story actually needs."
            />
            <section className="mx-auto max-w-7xl px-5 py-24 lg:px-10">
                {services.map(([t, c, d], i) => (
                    <article
                        key={t}
                        className="grid gap-5 border-t border-border py-12 md:grid-cols-[5rem_1fr_1fr]"
                    >
                        <span className="text-sm text-crimson">0{i + 1}</span>
                        <h2 className="font-display text-3xl sm:text-4xl">
                            {t}
                        </h2>
                        <div>
                            <p className="text-lg leading-8 text-ink-muted">
                                {c}
                            </p>
                            <p className="mt-5 text-xs font-semibold tracking-[.18em] text-blue uppercase">
                                {d}
                            </p>
                        </div>
                    </article>
                ))}
            </section>
        </>
    );
}
