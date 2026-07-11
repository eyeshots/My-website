import { Link, usePage } from '@inertiajs/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import type { ReactNode } from 'react';

const links = [
    ['Home', '/'],
    ['Services', '/services'],
    ['Portfolio', '/portfolio'],
    ['About', '/about'],
];

export default function PublicLayout({ children }: { children: ReactNode }) {
    const [open, setOpen] = useState(false);
    const { url, props } = usePage<{ website?: Record<string, string> }>();
    const website = props.website ?? {};

    return (
        <div className="min-h-screen bg-paper text-charcoal">
            <header className="sticky top-0 z-50 border-b border-border/80 bg-paper/95 backdrop-blur-sm">
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-10">
                    <Link
                        href="/"
                        className="group flex items-baseline gap-2"
                        aria-label="Eye Shots home"
                    >
                        <span className="font-display text-2xl font-semibold tracking-tight">
                            EYE SHOTS
                        </span>
                        <span className="h-2 w-2 bg-crimson transition-transform group-hover:rotate-45" />
                    </Link>
                    <nav
                        className="hidden items-center gap-9 md:flex"
                        aria-label="Main navigation"
                    >
                        {links.map(([label, href]) => (
                            <Link
                                key={href}
                                href={href}
                                className={`text-sm font-medium tracking-wide transition-colors hover:text-crimson ${url === href ? 'text-crimson' : ''}`}
                            >
                                {label}
                            </Link>
                        ))}
                        <a
                            href={`mailto:${website.studio_email ?? 'studio@eyeshots.com.au'}`}
                            className="border border-crimson px-5 py-2.5 text-sm font-semibold text-crimson transition-colors hover:bg-crimson hover:text-white"
                        >
                            Start a conversation
                        </a>
                    </nav>
                    <button
                        className="p-2 md:hidden"
                        onClick={() => setOpen(!open)}
                        aria-expanded={open}
                        aria-label="Toggle menu"
                    >
                        {open ? <X /> : <Menu />}
                    </button>
                </div>
                {open && (
                    <nav className="border-t border-border bg-ivory px-5 py-5 md:hidden">
                        {links.map(([label, href]) => (
                            <Link
                                key={href}
                                href={href}
                                onClick={() => setOpen(false)}
                                className="block border-b border-border py-4 text-lg"
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>
                )}
            </header>
            <main>{children}</main>
            <footer className="bg-blue text-white">
                <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-3 lg:px-10">
                    <div>
                        <p className="font-display text-3xl">
                            Stories, held with care.
                        </p>
                        <p className="mt-4 max-w-sm text-sm leading-7 text-blue-pale">
                            Photography and films with clarity, warmth and
                            lasting emotional weight.
                        </p>
                    </div>
                    <div>
                        <p className="text-xs font-semibold tracking-[.2em] text-blue-pale uppercase">
                            Explore
                        </p>
                        <div className="mt-5 grid gap-3">
                            {links.slice(1).map(([l, h]) => (
                                <Link
                                    key={h}
                                    href={h}
                                    className="w-fit hover:text-blue-pale"
                                >
                                    {l}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="text-xs font-semibold tracking-[.2em] text-blue-pale uppercase">
                            Studio
                        </p>
                        <p className="mt-5">
                            {website.studio_location ?? 'Brisbane, Australia'}
                        </p>
                        <a
                            className="mt-3 block hover:text-blue-pale"
                            href={`mailto:${website.studio_email ?? 'studio@eyeshots.com.au'}`}
                        >
                            {website.studio_email ?? 'studio@eyeshots.com.au'}
                        </a>
                    </div>
                </div>
                <div className="border-t border-white/20 px-5 py-5 text-center text-xs text-blue-pale">
                    © {new Date().getFullYear()} Eye Shots. Brisbane, with roots
                    in Nepal.
                </div>
            </footer>
        </div>
    );
}
