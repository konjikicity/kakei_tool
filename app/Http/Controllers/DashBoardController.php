<?php

namespace App\Http\Controllers;

use App\Services\DashBoardService;
use Carbon\Carbon;
use Inertia\Inertia;

class DashBoardController extends Controller
{
    private $dashBoardService;

    public function __construct(DashBoardService $dashBoardService)
    {
        $this->dashBoardService = $dashBoardService;
    }

    public function index(int $year = 0)
    {
        $yearMonths = $this->dashBoardService->index(intval(Carbon::now()->format('Y')));

        if ($year) {
            $yearMonths = $this->dashBoardService->index($year);
        }

        return Inertia::render('Dashboard', ['yearMonths' => $yearMonths]);
    }
}
