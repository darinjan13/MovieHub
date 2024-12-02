{{-- <x-guest-layout>
    <!-- Session Status -->
    <x-auth-session-status class="mb-4" :status="session('status')" />

    <form method="POST" action="{{ route('login') }}">
        @csrf

        <!-- Email Address -->
        <div>
            <x-input-label for="email" :value="__('Email')" />
            <x-text-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')" required autofocus autocomplete="username" />
            <x-input-error :messages="$errors->get('email')" class="mt-2" />
        </div>

        <!-- Password -->
        <div class="mt-4">
            <x-input-label for="password" :value="__('Password')" />

            <x-text-input id="password" class="block mt-1 w-full"
                            type="password"
                            name="password"
                            required autocomplete="current-password" />

            <x-input-error :messages="$errors->get('password')" class="mt-2" />
        </div>

        <!-- Remember Me -->
        <div class="block mt-4">
            <label for="remember_me" class="inline-flex items-center">
                <input id="remember_me" type="checkbox" class="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500" name="remember">
                <span class="ms-2 text-sm text-gray-600">{{ __('Remember me') }}</span>
            </label>
        </div>

        <div class="flex items-center justify-end mt-4">
            @if (Route::has('password.request'))
                <a class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" href="{{ route('password.request') }}">
                    {{ __('Forgot your password?') }}
                </a>
            @endif

            <x-primary-button class="ms-3">
                {{ __('Log in') }}
            </x-primary-button>
        </div>
    </form>
</x-guest-layout> --}}

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign in</title>
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

            @if (session('status'))
                <div class="mb-4 text-green-500 text-center">{{ session('status') }}</div>
            @endif

            <form class="flex flex-col" method="POST" action="{{ route('login') }}">
                <h1 class="text-white text-4xl font-bold mb-5">Sign In</h1>
                @csrf

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

                <div class="flex items-center justify-between mt-4">
                    @if (Route::has('password.request'))
                        <a href="{{ route('password.request') }}"
                            class="underline text-sm text-gray-300 hover:text-white hidden">
                            Forgot your password?
                        </a>
                    @endif

                    <button type="submit"
                        class="w-full bg-red-600 text-white font-bold py-2 rounded hover:bg-red-700 transition duration-300">
                        Log in
                    </button>
                </div>
                <p class="mt-4 text-white text-center">No account? <a href="/register" class="underline">Register
                        here.</a>
            </form>


            </p>
        </div>
    </div>
</body>

</html>
