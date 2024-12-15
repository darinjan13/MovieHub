<?php

namespace App\Http\Middleware;

use App\Models\Profile;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class EnsureSubscription
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (!Auth::check()) {
            return $next($request);
        }

        $user = Auth::user();
        $isSubscribed = $user->subscription_plan_id;
        $hasProfiles = $user->profiles()->count() > 0;
        $activeProfile = $user->profiles()->where('is_active', true)->first();

        if (in_array($request->route()->getName(), ['welcome', 'subscription.plans']) && $isSubscribed) {
            return redirect()->route('dashboard', [$activeProfile->profile_id]);
        }

        if ($request->routeIs('dashboard') && !$isSubscribed) {
            return redirect()->route('subscription.plans');
        }

        if (!$hasProfiles && $isSubscribed && $request->routeIs('dashboard')) {
            return redirect()->route('profiles.index', ['user_id' => $user->id]);
        }

        if ($request->routeIs('profiles.index') && $activeProfile) {
            return redirect()->route('dashboard', [$activeProfile->profile_id]);
        }

        if ($request->routeIs('dashboard') && !$activeProfile) {
            return redirect()->route('profiles.index', ['user_id' => $user->id]);
        }

        if (in_array($request->route()->getName(), ['dashboard', 'subscription.subscribe', 'profiles.index', 'settings.edit']) && !$isSubscribed) {
            return redirect()->route('subscription.plans');
        }

        if ($request->routeIs('welcome') && !$isSubscribed) {
            return redirect()->route('subscription.plans');
        }


        return $next($request);
    }
}
