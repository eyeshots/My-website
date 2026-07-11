export default function PageIntro({
    eyebrow,
    title,
    copy,
}: {
    eyebrow: string;
    title: string;
    copy: string;
}) {
    return (
        <section className="bg-ivory">
            <div className="mx-auto max-w-7xl px-5 py-20 sm:py-28 lg:px-10">
                <p className="text-xs font-semibold tracking-[.24em] text-crimson uppercase">
                    {eyebrow}
                </p>
                <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[1.04] sm:text-7xl">
                    {title}
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-8 text-ink-muted">
                    {copy}
                </p>
            </div>
        </section>
    );
}
