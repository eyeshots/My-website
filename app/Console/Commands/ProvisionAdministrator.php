<?php

namespace App\Console\Commands;

use App\Models\Role;
use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;

class ProvisionAdministrator extends Command
{
    protected $signature = 'eyeshots:provision-admin';

    protected $description = 'Provision the initial Eye Shots administrator from environment variables';

    public function handle(): int
    {
        $email = config('eyeshots.admin_email');
        $password = config('eyeshots.admin_password');
        if (! $email || ! $password || strlen($password) < 12) {
            $this->error('Set ADMIN_EMAIL and a unique ADMIN_PASSWORD of at least 12 characters.');

            return self::FAILURE;
        }
        $user = User::query()->updateOrCreate(['email' => $email], ['name' => config('eyeshots.admin_name', 'Eye Shots Administrator'), 'password' => Hash::make($password), 'email_verified_at' => now(), 'is_active' => true]);
        $role = Role::query()->where('name', 'super-admin')->firstOrFail();
        $user->roles()->syncWithoutDetaching($role);
        $this->info("Administrator {$email} is ready.");

        return self::SUCCESS;
    }
}
