<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use App\Services\MovieService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class MoviesController extends Controller
{
    public function index($page, MovieService $movieService)
    {
        $popular = $movieService->getPopularMovies($page);
        return inertia('Populars', [
            'movies' => $popular,
            'currentPage' => $popular['page'],
            'totalPages' => $popular['total_pages'],
        ]);
    }

    public function details($movie_id, MovieService $movieService)
    {
        $activeProfile = Auth::user()->profiles()->where('is_active', true)->first();

        $existingFavorite = $activeProfile->favorites()->where('content_id', $movie_id)->first();

        $movieDetails = $movieService->getMovieDetails($movie_id);
        $similarMovies = $movieService->getSimilarMovies($movie_id);
        return inertia('Movies/Details', [
            'movieDetails' => $movieDetails,
            'similarMovies' => $similarMovies,
            'activeProfile' => $activeProfile,
            'existingFavorite' => $existingFavorite
        ]);
    }

    public function watch($movie_id, MovieService $movieService)
    {
        // $popular = $movieService->getPopularMovies($page);
        return inertia('Movies/Watch', [
            'movie_id' => $movie_id
        ]);
    }
}
