<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use App\Models\User;
use App\Services\MovieService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FavoritesController extends Controller
{
    public function index(MovieService $movieService)
    {

        $activeProfile = Profile::where('user_id', Auth::id())
            ->where('is_active', true)
            ->first();

        if ($activeProfile) {
            $favorites = $activeProfile->favorites;
        } else {
            return redirect()->route('profiles.index', ['user_id' => Auth::id()]);
        }

        $favoritesWithDetails = [];
        if ($favorites->isNotEmpty()) {
            $favoritesWithDetails = $favorites->map(function ($favorite) use ($movieService) {
                $details = $movieService->getDetails($favorite->content_id, $favorite->type);
                return array_merge($favorite->toArray(), $details ?? []);
            });
        }

        return inertia('Favorites', [
            'subscribed' => Auth::user()->subscription_plan_id,
            'favorites' => $favoritesWithDetails,
            'activeProfile' => $activeProfile
        ]);
    }


    public function store(Request $request)
    {
        $activeProfile = Auth::user()->profiles()->where('is_active', true)->first();

        $activeProfile->favorites()->create([
            'content_id' => $request->content_id,
            'content_title' => $request->content_title,
            'type' => $request->type,
        ]);
    }

    public function remove(Request $request)
    {
        $activeProfile = Auth::user()->profiles()->where('is_active', true)->first();

        $favorite = $activeProfile->favorites()->where('content_id', $request->content_id)->first();

        if ($favorite) {
            // dd($favorite);
            $favorite->delete();
        }
    }
}
