import { Head } from '@inertiajs/react';
import PageIntro from '@/components/public/page-intro';
export default function About() {
    return (
        <>
            <Head title="About" />
            <PageIntro
                eyebrow="About Eye Shots"
                title="Brisbane perspective. Nepalese heart."
                copy="Eye Shots is a photography and film studio built around attentiveness: to people, to culture, to the small details that make a story particular."
            />
            <section className="mx-auto grid max-w-7xl gap-14 px-5 py-24 md:grid-cols-2 lg:px-10">
                <div className="aspect-[4/5] bg-blue-pale p-8">
                    <div className="flex h-full items-end border border-blue/30 p-7">
                        <p className="max-w-sm font-display text-3xl text-blue">
                            Presence before performance. Connection before
                            convention.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-xs font-semibold tracking-[.2em] text-crimson uppercase">
                        How we work
                    </p>
                    <h2 className="mt-5 font-display text-4xl">
                        Calm direction. Clear craft. Space for real life.
                    </h2>
                    <div className="mt-8 space-y-6 text-lg leading-8 text-ink-muted">
                        <p>
                            Our Nepalese heritage informs a belief in welcome,
                            family and shared celebration. Brisbane gives the
                            work its open light and contemporary rhythm.
                        </p>
                        <p>
                            The result is imagery with polish but never
                            distance—made collaboratively, delivered
                            thoughtfully and designed to outlast trends.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
