<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class YearSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $years = [
            ['year' => 2023, 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['year' => 2024, 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()]
        ];

        DB::table('years')->insert($years);
    }
}
