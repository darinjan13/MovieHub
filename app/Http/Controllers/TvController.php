<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use App\Services\MovieService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TvController extends Controller
{
    public function index($page, MovieService $movieService)
    {
        $popular = $movieService->getPopularTv($page);
        return inertia('Tv/Populars', [
            'movies' => $popular,
            'currentPage' => $popular['page'],
            'totalPages' => $popular['total_pages'],
        ]);
    }

    public function details($tv_id, MovieService $movieService)
    {
        $activeProfile = Profile::where('user_id', Auth::id())
            ->where('is_active', true)
            ->first();

        $existingFavorite = $activeProfile->favorites()->where('content_id', $tv_id)->first();

        $tvDetails = $movieService->getTvDetails($tv_id);
        $similarTv = $movieService->getSimilarTv($tv_id);
        return inertia('Tv/Details', [
            'tvDetails' => $tvDetails,
            'similarTv' => $similarTv,
            'activeProfile' => $activeProfile,
            'existingFavorite' => $existingFavorite
        ]);
    }

    public function watch($tv_id, $season_number, $episode_number, MovieService $movieService)
    {
        $activeProfile = Profile::where('user_id', Auth::id())
            ->where('is_active', true)
            ->first();

        $existingFavorite = $activeProfile->favorites()->where('content_id', $tv_id)->first();

        $details = $movieService->getTvDetails($tv_id);
        return inertia('Tv/Watch', [
            'tv_id' => $tv_id,
            'season_number' => $season_number,
            'episode_number' => $episode_number,
            'details' => $details,
            'activeProfile' => $activeProfile,
            'existingFavorite' => $existingFavorite
        ]);
    }
}
