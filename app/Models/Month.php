<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Month extends Model
{
    use HasFactory;

    protected $table = 'months';

    protected $fillable = [
        'year_id',
        'month',
    ];

    public function year(): HasOne
    {
        return $this->hasOne(Month::class);
    }
}
