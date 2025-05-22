<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Issues;
use App\Models\User;

class IssuesFactory extends Factory
{
    protected $model = Issues::class;

    public function definition()
    {
        return [
            
            'title' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'status' => $this->faker->randomElement(['open', 'closed', 'in progress']),
            'user_id' => User::factory(),
                       
        ];
    }
}