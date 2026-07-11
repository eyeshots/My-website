<?php

use App\Http\Controllers\Admin\WebsiteSettingsController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'public/home')->name('home');
Route::inertia('/services', 'public/services')->name('services');
Route::inertia('/portfolio', 'public/portfolio')->name('portfolio');
Route::inertia('/about', 'public/about')->name('about');
Route::redirect('/dashboard', '/admin')->middleware('auth')->name('dashboard');

Route::prefix('admin')->name('admin.')->middleware(['auth', 'verified', 'active'])->group(function () {
    Route::inertia('/', 'admin/dashboard')->middleware('permission:dashboard.view')->name('dashboard');
    Route::get('/settings', [WebsiteSettingsController::class, 'edit'])->middleware('permission:settings.view')->name('settings.edit');
    Route::put('/settings', [WebsiteSettingsController::class, 'update'])->middleware('permission:settings.update')->name('settings.update');
});

require __DIR__.'/settings.php';
