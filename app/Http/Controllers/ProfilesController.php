<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ProfilesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(string $user_id)
    {
        $profiles = Auth::user()->profiles;
        $subscribed = Auth::user()->subscription_plan_id;
        return Inertia::render('Profiles/Profiles', ['profiles' => $profiles, 'subscribed' => $subscribed]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(string $user_id)
    {
        return Inertia::render('Profiles/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, string $user_id)
    {
        $user_id = Auth::id();
        $request->validate([
            'profile_name' => 'required|string|max:255',
        ]);

        Auth::user()->profiles()->create([
            'profile_name' => $request->profile_name,
            'is_active' => false
        ]);

        return redirect()->route('profiles.index', ['user_id' => $user_id]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id) {}

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $user_id, string $profileId)
    {
        $profile = Profile::where('profile_id', $profileId)
            ->where('user_id', $user_id)
            ->firstOrFail();

        Profile::where('user_id', $user_id)->update(['is_active' => false]);

        $profile->update(['is_active' => true]);

        session(['active_profile_id' => $profileId]);

        return redirect()->route('dashboard', ['profileId' => $profileId]);
    }



    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $user_id, string $profileId)
    {
        $profile = Profile::where('profile_id', $profileId)
            ->where('user_id', $user_id)
            ->firstOrFail();

        $profile->update(['is_active' => false]);

        if (session('active_profile_id') == $profileId) {
            session()->forget('active_profile_id');
        }

        return redirect()->route('profiles.index', ['user_id' => $user_id]);
    }
}
