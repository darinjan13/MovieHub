<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Home</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/alpinejs@3.11.2/dist/cdn.min.js" defer></script>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body class="text-white">
    <div class="bg-cover bg-center" style="background-image: url('{{ asset('assets/images/home-background.jpg') }}');">
        <div class="h-full"
            style="background: linear-gradient(to bottom, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.95));">
            <nav class="flex flex-wrap flex-row justify-between">
                <img class="h-10 xs:h-5 sm:h-10 my-6 mx-16 xs:mx-5 sm:mx-16" src="{{ asset('assets/images/logo.png') }}"
                    alt="Logo" />
                <a class="bg-red-700 rounded-md text-white px-3 sm:h-10 my-6 mx-16 xs:mx-5 sm:mx-16"
                    href="{{ route('login') }}">Sign in</a>
            </nav>

            <div class="grid justify-items-center content-center">
                <div class="text-center lg:w-[60%] pt-32 xs:pt-10 sm:pt-32 px-40 xs:px-14 sm:px-40">
                    <h1 class="text-white text-5xl font-bold my-[1rem] xs:text-3xl sm:text-5xl">Unlimited movies,
                        TV<br>shows, and more.</h1>
                    <h2 class="text-white text-2xl xs:text-lg sm:text-2xl mx-auto">Watch anywhere. Cancel anytime.</h2>
                </div>

                <div class="text-center mt-8 xs:my-3 sm:mt-8 xs:px-10 sm:px-0">
                    <h3 class="text-white text-1xl xs:text-lg sm:text-1xl px-auto">Ready to watch? Enter your email to
                        create or restart your membership.</h3>
                </div>

                <form action="{{ route('login') }}" method="GET"
                    class="flex flex-row flex-wrap justify-center items-center w-full mb-36">
                    @csrf
                    <input type="email" name="email"
                        class="py-4 w-2/5 xs:w-full sm:w-2/5 xs:mx-5 sm:mx-0 px-4 text-black"
                        placeholder="Email Address" required value="{{ old('email') }}" />
                    <button type="submit"
                        class="bg-red-700 text-white px-4 xs:py-2 sm:py-4 xs:my-5 sm:my-0 xs:mx-auto sm:mx-0">
                        Get Started &gt;
                    </button>
                </form>
            </div>

            <div class="mx-20">
                <h1 class="-mb-5">Trending</h1>
                <div class="swiper">
                    <div class="swiper-wrapper py-10">
                        @foreach ($trending['results'] as $movie)
                            <div
                                class="swiper-slide rounded-lg overflow-visible transform transition-transform duration-500 hover:shadow-lg hover:scale-105 cursor-pointer">
                                <x-movie-card :details="$movie" />
                            </div>
                        @endforeach
                    </div>
                    <div
                        class="swiper-button-prev absolute hidden opacity-100 bg-gray-500 rounded-full inset-y-0 left-0 my-auto h-1/4 w-[30px] z-10 lg:flex items-center justify-center cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.8"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                    <div
                        class="swiper-button-next absolute hidden opacity-100 bg-gray-500 rounded-full inset-y-0 right-0 my-auto h-1/4 w-[30px] z-10 lg:flex items-center justify-center cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.8"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>

    <script>
        // Set Alpine data to the window object so it can be accessed globally
        window.alpineData = @entangle('data');
    </script>
</body>


</html>
