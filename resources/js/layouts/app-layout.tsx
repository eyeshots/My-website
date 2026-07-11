import { Link, router, usePage } from '@inertiajs/react';
import { LayoutDashboard, LogOut, Menu, Settings, X } from 'lucide-react';
import { useState } from 'react';
import type { ReactNode } from 'react';

export default function AppLayout({ children }: { children: ReactNode }) {
    const [open, setOpen] = useState(false);
    const { url, props } = usePage<{
        auth: { user: { name: string; email: string } };
    }>();
    const items = [
        { label: 'Overview', href: '/admin', icon: LayoutDashboard },
        { label: 'Website settings', href: '/admin/settings', icon: Settings },
    ];

    return (
        <div className="min-h-screen bg-ivory text-charcoal">
            <header className="flex h-18 items-center justify-between border-b border-border bg-paper px-5 lg:px-8">
                <div className="flex items-center gap-4">
                    <button
                        className="lg:hidden"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle CMS navigation"
                    >
                        {open ? <X /> : <Menu />}
                    </button>
                    <Link href="/admin" className="font-display text-xl">
                        EYE SHOTS <span className="text-crimson">/ CMS</span>
                    </Link>
                </div>
                <Link href="/" className="text-sm font-medium text-blue">
                    View website ↗
                </Link>
            </header>
            <div className="mx-auto flex max-w-[1500px]">
                <aside
                    className={`${open ? 'block' : 'hidden'} fixed inset-x-0 top-18 z-40 min-h-[calc(100vh-4.5rem)] w-full border-r border-border bg-paper p-5 lg:static lg:block lg:w-72`}
                >
                    <p className="mb-5 text-xs font-semibold tracking-[.18em] text-ink-muted uppercase">
                        Workspace
                    </p>
                    <nav className="space-y-2">
                        {items.map(({ label, href, icon: Icon }) => (
                            <Link
                                key={href}
                                href={href}
                                onClick={() => setOpen(false)}
                                className={`flex items-center gap-3 px-4 py-3 text-sm font-medium ${url === href ? 'bg-blue text-white' : 'hover:bg-blue-pale'}`}
                            >
                                <Icon size={17} />
                                {label}
                            </Link>
                        ))}
                    </nav>
                    <div className="mt-12 border-t border-border pt-5">
                        <p className="font-medium">{props.auth.user.name}</p>
                        <p className="mt-1 text-xs text-ink-muted">
                            {props.auth.user.email}
                        </p>
                        <button
                            onClick={() => router.post('/admin/logout')}
                            className="mt-5 flex items-center gap-2 text-sm text-crimson"
                        >
                            <LogOut size={16} /> Sign out
                        </button>
                    </div>
                </aside>
                <main className="min-w-0 flex-1 px-5 py-8 lg:px-10 lg:py-12">
                    {children}
                </main>
            </div>
        </div>
    );
}
