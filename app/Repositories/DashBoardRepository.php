<?php

namespace App\Repositories;

use App\Models\Year;

class DashBoardRepository
{
    public function index(int $year)
    {
        return Year::select([
            'years.id',
            'years.year',
            'months.month'
        ])
            ->join('months', 'years.id', '=', 'months.year_id')
            ->where('year', $year)
            ->get();
    }
}
