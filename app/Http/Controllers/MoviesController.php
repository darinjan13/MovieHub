<?php

namespace App\Http\Controllers;

use App\Services\MovieService;
use Illuminate\Http\Request;
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
        $movieDetails = $movieService->getMovieDetails($movie_id);
        $similarMovies = $movieService->getSimilarMovies($movie_id);
        return inertia('Movies/Details', [
            'movieDetails' => $movieDetails,
            'similarMovies' => $similarMovies,
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
