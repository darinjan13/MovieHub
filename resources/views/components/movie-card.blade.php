@props(['details']) <!-- Declare the prop here -->

<img src="{{ env('TMDB_API_IMAGE_URL') . '/w185' . $details['poster_path'] }}" alt="Movie Backdrop">
