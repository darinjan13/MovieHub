<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Favorite extends Model
{
    //
    protected $fillable = [
        'movie_title',
        'movie_id',
        'profile_id',
    ];

    // Define the relationship with the Profile model (inverse of the 'belongsTo' relationship)
    public function profile()
    {
        return $this->belongsTo(Profile::class);
    }
}
