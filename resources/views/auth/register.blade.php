{{-- <x-guest-layout>
    <form method="POST" action="{{ route('register') }}">
        @csrf

        <!-- Name -->
        <div>
            <x-input-label for="name" :value="__('Name')" />
            <x-text-input id="name" class="block mt-1 w-full" type="text" name="name" :value="old('name')" required autofocus autocomplete="name" />
            <x-input-error :messages="$errors->get('name')" class="mt-2" />
        </div>

        <!-- Email Address -->
        <div class="mt-4">
            <x-input-label for="email" :value="__('Email')" />
            <x-text-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')" required autocomplete="username" />
            <x-input-error :messages="$errors->get('email')" class="mt-2" />
        </div>

        <!-- Password -->
        <div class="mt-4">
            <x-input-label for="password" :value="__('Password')" />

            <x-text-input id="password" class="block mt-1 w-full"
                            type="password"
                            name="password"
                            required autocomplete="new-password" />

            <x-input-error :messages="$errors->get('password')" class="mt-2" />
        </div>

        <!-- Confirm Password -->
        <div class="mt-4">
            <x-input-label for="password_confirmation" :value="__('Confirm Password')" />

            <x-text-input id="password_confirmation" class="block mt-1 w-full"
                            type="password"
                            name="password_confirmation" required autocomplete="new-password" />

            <x-input-error :messages="$errors->get('password_confirmation')" class="mt-2" />
        </div>

        <div class="flex items-center justify-end mt-4">
            <a class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" href="{{ route('login') }}">
                {{ __('Already registered?') }}
            </a>

            <x-primary-button class="ms-4">
                {{ __('Register') }}
            </x-primary-button>
        </div>
    </form>
</x-guest-layout> --}}

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up</title>
    @vite('resources/css/app.css')
    <style>
        body {
            background-image: url('{{ asset('assets/images/home-background.jpg') }}');
            background-size: cover;
            background-position: center;
        }
    </style>
</head>

<body>
    <div class="flex items-center justify-center h-screen bg-gray-900/60">
        <div
            class="flex flex-wrap items-center justify-center rounded-lg xs:h-full lg:h-max xs:w-full lg:w-[450px] bg-black xs:p-3 md:p-20 md:mx-auto">

            <form method="POST" action="{{ route('register') }}">
                <h1 class="text-white text-4xl font-bold mb-5">Sign Up</h1>
                @csrf

                <div class="mb-4">
                    <input type="text" name="name"
                        class="w-full p-2 mb-4 text-white bg-gray-800 border border-gray-700 rounded" placeholder="Name"
                        required value="{{ old('name') }}">
                    @error('name')
                        <div class="mt-2 text-red-500">{{ $message }}</div>
                    @enderror
                </div>

                <div class="mb-4">
                    <input value="{{ old('email', $email ?? '') }}" type="email" name="email"
                        class="w-full p-2 mb-4 text-white bg-gray-800 border border-gray-700 rounded"
                        placeholder="Email" required value="{{ old('email') }}">
                    @error('email')
                        <div class="mt-2 text-red-500">{{ $message }}</div>
                    @enderror
                </div>

                <div class="mb-4">
                    <input type="password" name="password"
                        class="w-full p-2 mb-4 text-white bg-gray-800 border border-gray-700 rounded"
                        placeholder="Password" required>
                    @error('password')
                        <div class="mt-2 text-red-500">{{ $message }}</div>
                    @enderror
                </div>

                <div class="mb-4">
                    <input type="password" name="password_confirmation"
                        class="w-full p-2 mb-4 text-white bg-gray-800 border border-gray-700 rounded"
                        placeholder="Confirm Password" required>
                    @error('password_confirmation')
                        <div class="mt-2 text-red-500">{{ $message }}</div>
                    @enderror
                </div>

                <button type="submit"
                    class="w-full bg-red-600 text-white font-bold py-2 rounded hover:bg-red-700 transition duration-300">
                    Sign Up
                </button>
                <p class="mt-4 text-white text-center">Already have an account? <a href="/login" class="underline">Log
                        in
                        here.</a></p>
            </form>


        </div>
    </div>
</body>

</html>
