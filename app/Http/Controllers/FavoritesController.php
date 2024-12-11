<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FavoritesController extends Controller
{
    public function index($profile_id)
    {
        return inertia('Favorites', [
            'profile_id' => $profile_id,
        ]);
    }
}
