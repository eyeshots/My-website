import { Form, Head } from '@inertiajs/react';
const fields = [
    ['studio_name', 'Studio name', 'text'],
    ['studio_email', 'Public email', 'email'],
    ['studio_phone', 'Phone', 'text'],
    ['studio_location', 'Location', 'text'],
    ['instagram_url', 'Instagram URL', 'url'],
];
export default function Settings({
    settings,
}: {
    settings: Record<string, string>;
}) {
    return (
        <>
            <Head title="Website Settings" />
            <div className="max-w-3xl">
                <p className="text-xs font-semibold tracking-[.2em] text-crimson uppercase">
                    Global settings
                </p>
                <h1 className="mt-3 font-display text-4xl">Studio identity</h1>
                <p className="mt-4 text-ink-muted">
                    These details are shared with the public site. Changes are
                    validated and stored centrally.
                </p>
                <Form
                    action="/admin/settings"
                    method="put"
                    className="mt-10 space-y-6 border border-border bg-paper p-6 sm:p-8"
                >
                    {({ processing, errors, wasSuccessful }) => (
                        <>
                            {fields.map(([name, label, type]) => (
                                <label key={name} className="block">
                                    <span className="mb-2 block text-sm font-semibold">
                                        {label}
                                    </span>
                                    <input
                                        name={name}
                                        type={type}
                                        defaultValue={settings[name] ?? ''}
                                        className="w-full border border-border bg-white px-4 py-3 outline-none focus:border-crimson focus:ring-1 focus:ring-crimson"
                                    />
                                    <span className="mt-1 block text-sm text-red-700">
                                        {errors[name]}
                                    </span>
                                </label>
                            ))}
                            <div className="flex items-center gap-4">
                                <button
                                    disabled={processing}
                                    className="bg-crimson px-6 py-3 font-semibold text-white disabled:opacity-50"
                                >
                                    {processing ? 'Saving…' : 'Save settings'}
                                </button>
                                {wasSuccessful && (
                                    <span className="text-sm text-blue">
                                        Saved.
                                    </span>
                                )}
                            </div>
                        </>
                    )}
                </Form>
            </div>
        </>
    );
}
