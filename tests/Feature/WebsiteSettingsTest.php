<?php

namespace Tests\Feature;

use App\Models\Permission;
use App\Models\Role;
use App\Models\User;
use App\Models\WebsiteSetting;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class WebsiteSettingsTest extends TestCase
{
    use RefreshDatabase;

    public function test_authorized_administrator_can_update_global_settings(): void
    {
        $user = User::factory()->create(['email_verified_at' => now(), 'is_active' => true]);
        $role = Role::create(['name' => 'super-admin', 'label' => 'Super administrator']);
        $permissions = collect(['settings.view', 'settings.update'])->map(fn ($name) => Permission::create(['name' => $name, 'label' => $name]));
        $role->permissions()->attach($permissions->pluck('id'));
        $user->roles()->attach($role->id);

        $this->actingAs($user)->put('/admin/settings', [
            'studio_name' => 'Eye Shots', 'studio_email' => 'studio@eyeshots.com.au',
            'studio_phone' => '+61 400 000 000', 'studio_location' => 'Brisbane, Australia',
            'instagram_url' => 'https://instagram.com/eyeshots',
        ])->assertRedirect()->assertSessionHasNoErrors();

        $this->assertDatabaseHas('website_settings', ['key' => 'studio_email']);
        $this->assertSame('studio@eyeshots.com.au', WebsiteSetting::publicValues()['studio_email']);
    }

    public function test_settings_are_validated(): void
    {
        $user = User::factory()->create(['email_verified_at' => now(), 'is_active' => true]);
        $role = Role::create(['name' => 'super-admin', 'label' => 'Super administrator']);
        $permission = Permission::create(['name' => 'settings.update', 'label' => 'Update settings']);
        $role->permissions()->attach($permission->id);
        $user->roles()->attach($role->id);
        $this->actingAs($user)->put('/admin/settings', ['studio_email' => 'not-an-email'])->assertSessionHasErrors(['studio_name', 'studio_email', 'studio_location']);
    }
}
