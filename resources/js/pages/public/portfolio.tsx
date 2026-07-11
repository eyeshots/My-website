import { Head } from '@inertiajs/react';
import PageIntro from '@/components/public/page-intro';
const work = [
    ['Ritual & Revelry', 'Wedding', 'bg-crimson'],
    ['Quietly Becoming', 'Portrait', 'bg-blue'],
    ['Local Hands', 'Brand story', 'bg-[#b79066]'],
    ['After the Rain', 'Couples', 'bg-[#667b65]'],
    ['Gathered Light', 'Editorial', 'bg-[#d3b6aa]'],
];
export default function Portfolio() {
    return (
        <>
            <Head title="Portfolio" />
            <PageIntro
                eyebrow="Selected work"
                title="People, place and the poetry of the in-between."
                copy="A developing collection across celebrations, portraiture and brand storytelling. Final galleries will feature only commissioned Eye Shots work."
            />
            <section className="mx-auto grid max-w-7xl gap-5 px-5 py-24 sm:grid-cols-2 lg:grid-cols-12 lg:px-10">
                {work.map(([t, c, b], i) => (
                    <article
                        key={t}
                        className={`${b} ${i === 0 || i === 4 ? 'lg:col-span-7' : 'lg:col-span-5'} group flex aspect-[4/3] items-end overflow-hidden p-7 text-white`}
                    >
                        <div>
                            <p className="text-xs tracking-[.2em] uppercase opacity-80">
                                {c}
                            </p>
                            <h2 className="mt-2 font-display text-3xl">{t}</h2>
                        </div>
                    </article>
                ))}
            </section>
        </>
    );
}
