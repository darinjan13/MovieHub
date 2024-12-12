<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use App\Services\MovieService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index($profileId, MovieService $movieService)
    {
        $trendings = $movieService->getTrending();
        $popularMovies = $movieService->getPopularMovies(1);
        $popularTVShows = $movieService->getPopularTv(1);
        $profile = Profile::where('profile_id', $profileId)
            ->where('user_id', Auth::id())
            ->first();

        if (!$profile) {
            return redirect()->route('profiles.index');
        }


        return inertia('Dashboard', [
            'subscribed' => Auth::user()->subscription_plan_id,
            'trendings' => $trendings,
            'popularMovies' => $popularMovies,
            'popularTVShows' => $popularTVShows
        ]);
    }
}
