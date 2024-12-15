<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;

    protected $primaryKey = 'profile_id';
    protected $fillable = ['user_id', 'profile_name', 'is_active'];

    public function user()
    {
        return $this->belongsTo(User::class);  // A profile belongs to one user
    }

    public function favorites()
    {
        return $this->hasMany(Favorite::class, 'profile_id');
    }
}
