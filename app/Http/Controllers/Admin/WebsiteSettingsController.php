<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\WebsiteSetting;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class WebsiteSettingsController extends Controller
{
    public function edit(): Response
    {
        return Inertia::render('admin/settings', ['settings' => WebsiteSetting::publicValues()]);
    }

    public function update(Request $request): RedirectResponse
    {
        $values = $request->validate([
            'studio_name' => ['required', 'string', 'max:80'],
            'studio_email' => ['required', 'email', 'max:190'],
            'studio_phone' => ['nullable', 'string', 'max:40'],
            'studio_location' => ['required', 'string', 'max:120'],
            'instagram_url' => ['nullable', 'url', 'max:255'],
        ]);

        foreach ($values as $key => $value) {
            WebsiteSetting::query()->updateOrCreate(
                ['key' => $key],
                ['value' => ['value' => $value], 'type' => 'string', 'group' => 'identity', 'is_public' => true],
            );
        }

        return back()->with('success', 'Website settings updated.');
    }
}
