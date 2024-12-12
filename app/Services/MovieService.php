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

        $results = collect($response->json()['results'] ?? [])
            ->filter(fn($item) => isset($item['backdrop_path']) && !empty($item['backdrop_path']));

        // $resultsArray = $results->toArray();

        return $results;
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

    public function getSimilarMovies($movie_id)
    {
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . env('TMDB_API_KEY'),
        ])->get("{$this->baseUrl}/movie/{$movie_id}/similar");

        $results = collect($response->json()['results'] ?? [])
            ->filter(fn($item) => isset($item['backdrop_path']) && !empty($item['backdrop_path']) && $item['vote_count'] > 1)
            ->values()
            ->toArray();

        return $results;
    }

    public function getMovieDetails($movie_id)
    {
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . env('TMDB_API_KEY'),
        ])->get("{$this->baseUrl}/movie/{$movie_id}?append_to_response=videos");

        return $response->json();
    }

    public function getPopularTv($page)
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

    public function getSimilarTv($tv_id)
    {
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . env('TMDB_API_KEY'),
        ])->get("{$this->baseUrl}/tv/{$tv_id}/similar");

        $results = collect($response->json()['results'] ?? [])
            ->filter(fn($item) => isset($item['backdrop_path']) && !empty($item['backdrop_path']) && $item['vote_count'] > 1)
            ->values()
            ->toArray();

        return $results;
    }

    public function getTvDetails($tv_id)
    {
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . env('TMDB_API_KEY'),
        ])->get("{$this->baseUrl}/tv/{$tv_id}?append_to_response=videos,external_ids");

        return $response->json();
    }

    public function getTvEpisode($tv_id, $season_number, $episode_number)
    {
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . env('TMDB_API_KEY'),
        ])->get("{$this->baseUrl}/tv/{$tv_id}?append_to_response=external_ids,season/1/episode/1");

        return $response->json();
    }
}
