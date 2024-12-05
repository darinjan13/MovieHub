<?php

use App\Http\Controllers\MovieController;
use App\Http\Controllers\ProfileController;
use App\Services\MovieService;
use Illuminate\Support\Facades\Route;


Route::get('/', function (MovieService $movieService) {
    $trending = $movieService->getTrending();
    return view('home', ['trending' => $trending]);
});

Route::get('/movie-details', [MovieController::class, 'showModal'])->name('movie.details');

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
