<?php

namespace App\Http\Controllers;

use App\Services\MovieService;
use Illuminate\Http\Request;

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
        $tvDetails = $movieService->getTvDetails($tv_id);
        $similarTv = $movieService->getSimilarTv($tv_id);
        return inertia('Tv/Details', [
            'tvDetails' => $tvDetails,
            'similarTv' => $similarTv,
        ]);
    }

    public function watch($tv_id, $season_number, $episode_number, MovieService $movieService)
    {
        $episodeDetails = $movieService->getTvEpisode($tv_id, $season_number, $episode_number);
        return inertia('Tv/Watch', [
            'tv_id' => $tv_id,
            'season_number' => $season_number,
            'episode_number' => $episode_number,
            'episodeDetails' => $episodeDetails
        ]);
    }
}
