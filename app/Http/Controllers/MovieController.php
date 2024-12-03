<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class MovieController extends Controller
{
    protected $api_Url = "https://api.themoviedb.org/3/";

    public function trending()
    {
        $response = Http::get($this->api_Url . 'movie/trending', [
            'api_key' => env('TMDB_API_KEY'),
            'language' => 'en-US',
            'page' => 1,
        ]);

        $popularMovies = $response->json();

        return view('movies.index', compact('popularMovies'));
    }
}
