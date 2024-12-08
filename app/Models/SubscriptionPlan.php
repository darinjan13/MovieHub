<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubscriptionPlan extends Model
{
    use HasFactory;

    protected $fillable = ['plan_name', 'max_profiles'];

    public function users()
    {
        return $this->hasMany(User::class);
    }
}
