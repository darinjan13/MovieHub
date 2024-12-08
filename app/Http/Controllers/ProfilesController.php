<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ProfilesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $profiles = Auth::user()->profiles;
        $subscribed = Auth::user()->subscription_plan_id;
        return Inertia::render('Profiles/Profiles', ['profiles' => $profiles, 'subscribed' => $subscribed]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Profiles/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'profile_name' => 'required|string|max:255',
        ]);

        Auth::user()->profiles()->create([
            'profile_name' => $request->profile_name,
        ]);

        return redirect()->route('profiles.index')->with('success', 'Profile created successfully!');
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
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
