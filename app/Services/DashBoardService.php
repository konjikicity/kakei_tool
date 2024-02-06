<?php

namespace App\Services;

use App\Repositories\DashBoardRepository;

class DashBoardService
{
    private $dashBoardRepository;

    public function __construct(DashBoardRepository $dashBoardRepository)
    {
        $this->dashBoardRepository = $dashBoardRepository;
    }

    public function index(int $year)
    {
        return $this->dashBoardRepository->index($year);
    }
}
