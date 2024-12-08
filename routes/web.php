<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfilesController;
use App\Http\Controllers\ProfileSettingControllers;
use App\Http\Controllers\SubscriptionController;
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

Route::middleware(['auth', 'verified', EnsureSubscription::class])->group(function () {
    Route::get('/dashboard/{profileId}', [DashboardController::class, 'index'])->name('dashboard');

    // Profile routes
    Route::get('/profiles', [ProfilesController::class, 'index'])->name('profiles.index');
    Route::get('/profile', [ProfilesController::class, 'create'])->name('profile.create');
    Route::post('/profiles', [ProfilesController::class, 'store'])->name('profile.store');
    Route::delete('/profiles/{profile}', [ProfilesController::class, 'destroy'])->name('profile.destroy');

    // Subscription routes
    Route::post('/subscribe', [SubscriptionController::class, 'subscribe'])->name('subscribe');
    Route::get('/subscription/plans', [SubscriptionController::class, 'index'])->name('subscription.plans');

    // Settings routes
    Route::middleware(EnsureSubscription::class)->group(function () {
        Route::get('/settings', [ProfileSettingControllers::class, 'edit'])->name('settings.edit');
        Route::patch('/settings', [ProfileSettingControllers::class, 'update'])->name('settings.update');
        Route::delete('/settings', [ProfileSettingControllers::class, 'destroy'])->name('settings.destroy');
    });
});

require __DIR__ . '/auth.php';
