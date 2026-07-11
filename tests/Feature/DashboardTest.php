<?php

namespace Tests\Feature;

use App\Models\Permission;
use App\Models\Role;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class DashboardTest extends TestCase
{
    use RefreshDatabase;

    public function test_guests_are_redirected_to_administrator_login(): void
    {
        $this->get('/admin')->assertRedirect('/admin/login');
    }

    public function test_authorized_active_administrator_can_view_dashboard(): void
    {
        $user = User::factory()->create(['is_active' => true, 'email_verified_at' => now()]);
        $permission = Permission::create(['name' => 'dashboard.view', 'label' => 'View dashboard']);
        $role = Role::create(['name' => 'super-admin', 'label' => 'Super administrator']);
        $role->permissions()->attach($permission);
        $user->roles()->attach($role);

        $this->actingAs($user)->get('/admin')->assertOk()->assertInertia(fn ($page) => $page->component('admin/dashboard'));
    }

    public function test_inactive_administrator_is_denied(): void
    {
        $user = User::factory()->create(['is_active' => false, 'email_verified_at' => now()]);
        $this->actingAs($user)->get('/admin')->assertForbidden();
    }
}
