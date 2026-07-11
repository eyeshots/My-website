<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WebsiteSetting extends Model
{
    protected $fillable = ['key', 'value', 'type', 'group', 'is_public'];

    protected function casts(): array
    {
        return ['value' => 'json', 'is_public' => 'boolean'];
    }

    public static function publicValues(): array
    {
        return static::query()->where('is_public', true)->pluck('value', 'key')->map(fn ($value) => is_array($value) ? ($value['value'] ?? $value) : $value)->all();
    }
}
