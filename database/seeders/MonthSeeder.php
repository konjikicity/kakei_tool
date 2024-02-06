<?php

namespace Database\Seeders;

use App\Models\Year;
use App\Models\Month;
use Illuminate\Database\Seeder;

class MonthSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $years = Year::pluck('id')->toArray();

        foreach ($years as $year) {
            $this->makeMonth($year);
        }
    }

    public function makeMonth(int $year): void
    {
        for ($i = 1; $i <= 12; $i++) {
            Month::create([
                'year_id' => $year,
                'month' => $i
            ]);
        }
    }
}
