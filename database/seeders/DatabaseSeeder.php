<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\MonthSeeder;
use Database\Seeders\YearSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            YearSeeder::class,
            MonthSeeder::class
        ]);
    }
}
