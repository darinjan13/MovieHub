<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])

    <style>
        body {
            background-image: url('{{ asset('assets/images/home-background.jpg') }}');
            background-size: cover;
            background-position: center;
        }
    </style>
</head>

<body>
    <div class="flex items-center justify-center h-screen bg-black/60">
        <div
            class="flex flex-wrap items-center justify-center rounded-lg xs:h-full sm:h-max xs:w-full sm:w-[450px] bg-black/60 xs:p-3 md:p-20 md:mx-auto">
            {{ $slot }}
        </div>
    </div>
</body>
</body>

</html>
