<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PublicPagesTest extends TestCase
{
    use RefreshDatabase;

    public function test_public_page_foundations_are_available(): void
    {
        foreach (['/' => 'public/home', '/services' => 'public/services', '/portfolio' => 'public/portfolio', '/about' => 'public/about'] as $path => $component) {
            $this->get($path)->assertOk()->assertInertia(fn ($page) => $page->component($component));
        }
    }

    public function test_public_registration_is_disabled(): void
    {
        $this->get('/admin/register')->assertNotFound();
        $this->post('/admin/register', [])->assertNotFound();
    }
}
