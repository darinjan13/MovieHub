<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\FavoritesController;
use App\Http\Controllers\MoviesController;
use App\Http\Controllers\ProfilesController;
use App\Http\Controllers\ProfileSettingControllers;
use App\Http\Controllers\SubscriptionController;
use App\Http\Controllers\TvController;
use App\Http\Middleware\EnsureSubscription;
use App\Mail\TestMail;
use App\Services\MovieService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function (MovieService $movieService, SubscriptionController $subscriptionController) {
    $trending = $movieService->getTrending();
    $plans = $subscriptionController->plans();
    return Inertia::render('Welcome', [
        'trending' => $trending,
        'plans' => $plans
    ]);
})->middleware([EnsureSubscription::class])->name('welcome');

Route::get('/asd', function () {
    return Inertia::render('PlayVideo');
});

Route::middleware(['auth', 'verified', EnsureSubscription::class])->group(function () {
    Route::get('/dashboard/{profileId}', [DashboardController::class, 'index'])->name('dashboard');

    // Profile routes
    Route::resource('{user_id}/profiles', ProfilesController::class)->parameters(['profiles' => 'profileId']);

    // Subscription routes
    Route::post('/subscribe', [SubscriptionController::class, 'subscribe'])->name('subscribe');
    Route::get('/subscription/plans', [SubscriptionController::class, 'index'])->name('subscription.plans');

    // Settings routes
    Route::get('/settings', [ProfileSettingControllers::class, 'edit'])->name('settings.edit');
    Route::patch('/settings', [ProfileSettingControllers::class, 'update'])->name('settings.update');
    Route::delete('/settings', [ProfileSettingControllers::class, 'destroy'])->name('settings.destroy');

    //Favorites Routes
    Route::get('/favorites/{user_id}/{profile_name}', [FavoritesController::class, 'index'])->name('favorites.index');
    Route::post('/favorites/store', [FavoritesController::class, 'store'])->name('favorites.store');
    Route::post('/favorites/remove', [FavoritesController::class, 'remove'])->name('favorites.remove');


    //Movies Routes
    Route::get('/movies/popular/{page}', [MoviesController::class, 'index'])->name('popular.movies');
    Route::get('/movies/details/{movie_id}', [MoviesController::class, 'details'])->name('details.movie');
    Route::get('/movies/watch/{movie_id}', [MoviesController::class, 'watch'])->name('watch.movie');

    //Tv Routes
    Route::get('/tv/popular/{page}', [TvController::class, 'index'])->name('popular.tv');
    Route::get('/tv/details/{tv_id}', [TvController::class, 'details'])->name('details.tv');
    Route::get('/tv/watch/{tv_id}/{season_number}/{episode_number}', [TvController::class, 'watch'])->name('watch.tv');
});

require __DIR__ . '/auth.php';
