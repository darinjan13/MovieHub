<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Home</title>
    @vite('resources/css/app.css')
</head>

<body class="text-white">
    <div class="bg-cover bg-center" style="background-image: url('{{ asset('assets/images/home-background.jpg') }}');">
        <div class="min-h-screen"
            style="background: linear-gradient(to bottom, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.95));">
            <nav class="flex flex-wrap justify-between py-6">
                <img class="h-10 ml-16" src="{{ asset('assets/images/logo.png') }}" alt="Logo" />
                <a class="bg-red-700 rounded-md text-white px-3 h-10 mr-16 p-1 xl:p-2" href="{{ route('login') }}">Sign
                    in</a>
            </nav>

            <div class="grid justify-items-center content-center text-center">
                <div class="lg:w-[60%] pt-32 px-40">
                    <h1 class="text-white text-5xl font-bold my-4">Unlimited movies, TV<br>shows, and more.</h1>
                    <h2 class="text-white text-2xl">Watch anywhere. Cancel anytime.</h2>
                </div>

                <div class="mt-8 px-10">
                    <h3 class="text-white text-lg">Ready to watch? Enter your email to create or restart your
                        membership.</h3>
                </div>

                <form action="{{ route('login') }}" method="GET"
                    class="flex flex-row flex-wrap justify-center items-center w-full mb-36 mt-10">
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
        </div>
    </div>
</body>

</html>
