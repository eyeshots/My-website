<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use App\Models\WebsiteSetting;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $permissions = collect([
            'dashboard.view' => 'View dashboard',
            'settings.view' => 'View settings',
            'settings.update' => 'Update settings',
        ])->map(fn ($label, $name) => Permission::query()->firstOrCreate(['name' => $name], ['label' => $label]));
        $role = Role::query()->firstOrCreate(['name' => 'super-admin'], ['label' => 'Super administrator']);
        $role->permissions()->sync($permissions->pluck('id'));

        foreach ([
            'studio_name' => 'Eye Shots', 'studio_email' => 'studio@eyeshots.com.au',
            'studio_phone' => '', 'studio_location' => 'Brisbane, Australia', 'instagram_url' => '',
        ] as $key => $value) {
            WebsiteSetting::query()->firstOrCreate(['key' => $key], ['value' => ['value' => $value], 'type' => 'string', 'group' => 'identity', 'is_public' => true]);
        }
    }
}
