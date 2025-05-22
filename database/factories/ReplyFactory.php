<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Reply>
 */
class ReplyFactory extends Factory
{
   protected $model = \App\Models\Reply::class;
    public function definition(): array
    {
        return [
            'issue_id' => \App\Models\Issues::factory(),
            'user_id' => \App\Models\User::factory(),
            'content' => $this->faker->paragraph,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
