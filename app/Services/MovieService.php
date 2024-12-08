<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

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

        $results = collect($response->json()['results'] ?? [])
            ->filter(fn($item) => isset($item['backdrop_path']) && !empty($item['backdrop_path']));

        // Convert the collection to an array
        $resultsArray = $results->toArray();

        // Now, $resultsArray is a plain PHP array
        return $resultsArray;
    }

    public function getPopularMovies()
    {
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . env('TMDB_API_KEY'),
        ])->get("{$this->baseUrl}/movie/popular");

        return $response->json();
    }
}
