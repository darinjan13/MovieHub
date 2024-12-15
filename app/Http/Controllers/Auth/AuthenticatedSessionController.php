<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(Request $request): Response
    {
        $email = $request->input('email');

        if ($email) {
            $userExists = User::where('email', $email)->first();

            if ($userExists) {
                return Inertia::render('Auth/Login', [
                    'email' => $email,
                ]);
            } else {
                return Inertia::render('Auth/Register', [
                    'email' => $email,
                ]);
            }
        }

        return Inertia::render('Auth/Login');
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();

        $user = Auth::user();

        if (!$user->subscription_plan_id) {
            return redirect()->route('subscription.plans');
        }

        return redirect()->intended(route('profiles.index', ['user_id' => Auth::id()]));
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
