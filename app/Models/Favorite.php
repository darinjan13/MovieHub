<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Favorite extends Model
{
    //
    protected $primaryKey = 'favorite_id';

    protected $fillable = [
        'content_id',
        'content_title',
        'type',
        'profile_id',
    ];

    // Define the relationship with the Profile model (inverse of the 'belongsTo' relationship)
    public function profile()
    {
        return $this->belongsTo(Profile::class, 'profile_id');
    }
}
