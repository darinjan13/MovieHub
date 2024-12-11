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

    public function getPopularMovies($page)
    {
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . env('TMDB_API_KEY'),
        ])->get("{$this->baseUrl}/discover/movie", [
            'page' => $page,
            'include_null_first_air_dates' => false,
            'sort_by' => 'popularity.desc',
            'with_original_language' => 'en'
        ]);

        return $response->json();
    }

    public function getMovieDetails($movie_id)
    {
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . env('TMDB_API_KEY'),
        ])->get("{$this->baseUrl}/movie/{$movie_id}");

        return $response->json();
    }

    public function getTVShows($page)
    {
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . env('TMDB_API_KEY'),
        ])->get("{$this->baseUrl}/discover/tv", [
            'include_adult' => 'false',
            'include_null_first_air_dates' => 'false',
            'language' => 'en-US',
            'page' => $page,
            'sort_by' => 'popularity.desc',
            'with_original_language' => 'en',
            'with_origin_country' => 'US',
            'vote_count.gte' => 1000
        ]);

        return $response->json();
    }
}
