<?php

namespace App\Http\Controllers;

use App\Mail\SubscriptionSuccessMail;
use App\Models\SubscriptionPlan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class SubscriptionController extends Controller
{
    public function index()
    {
        $plans = SubscriptionPlan::all();
        return Inertia::render('SubscriptionPage', ['plans' => $plans]);
    }

    public function plans()
    {
        $plans = SubscriptionPlan::all();
        return $plans;
    }

    public function subscribe(Request $request)
    {
        $request->validate([
            'planId' => 'required|exists:subscription_plans,id',
        ]);

        $plan = SubscriptionPlan::findOrFail($request->input('planId'));

        $user = $request->user();
        $user->update(['subscription_plan_id' => $plan->id]);

        // Mail::to($user->email)->send(new SubscriptionSuccessMail($user->name, $plan->name));

        return redirect()->route('profiles.index', ['user_id' => Auth::id()]);
    }
}
