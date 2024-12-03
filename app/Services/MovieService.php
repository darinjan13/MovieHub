<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class MovieService
{
    protected $baseUrl = 'https://api.themoviedb.org/3';

    public function searchMovies($query)
    {
        $response = Http::get("{$this->baseUrl}/search/movie", [
            'api_key' => env('TMDB_API_KEY'),
            'query' => $query,
        ]);

        return $response->json();
    }

    public function getTrending()
    {
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . env('TMDB_API_KEY'),
        ])->get("{$this->baseUrl}/trending/all/day");

        if ($response->failed()) {
            throw new \Exception('TMDB API Error: ' . $response->body());
        }

        return $response->json();
    }

    public function getPopularMovies()
    {
        $response = Http::get("{$this->baseUrl}/movie/popular", [
            'api_key' => env('TMDB_API_KEY'),
        ]);

        return $response->json();
    }
}
