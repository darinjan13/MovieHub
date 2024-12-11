<?php

namespace App\Http\Middleware;

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
        if (Auth::check()) {
            $isSubscribed = Auth::user()->subscription_plan_id;
            $hasProfiles = Auth::user()->profiles()->count() > 0;
            $user_id = Auth::id();

            if ($request->routeIs('subscription.plans', 'welcome') && $isSubscribed) {
                return redirect()->route('profiles.index', ['user_id' => $user_id]);
            }

            if (in_array($request->route()->getName(), ['dashboard', 'subscription.subscribe', 'profiles.index', 'settings.edit']) && !$isSubscribed) {
                return redirect()->route('subscription.plans');
            }
            if ($request->routeIs('dashboard') && !$hasProfiles && $isSubscribed) {
                return redirect()->route('profiles.index');
            }
        }

        return $next($request);
    }
}
