<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use App\Models\Issues;
use App\Models\User;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;


class IssuesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
    //    Issues::factory()->count(50)->for(User::factory())->create(); // Creates 50 issues, // If issues belong to users
            \App\Models\Issues::factory()->count(50)->create();
            // 'description' => $this->faker->paragraph,
            // 'status' => $this->faker->randomElement(['open', 'closed', 'in progress']),
            // 'user_id' => User::factory(),
            // ]), // Creates 50 issues, // If issues belong to users
            

    }

}

    