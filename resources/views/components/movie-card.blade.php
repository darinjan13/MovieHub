@props(['image_path']) <!-- Declare the prop here -->
<img src="{{ env('TMDB_API_IMAGE_URL') . '/original' . $image_path }}" alt="Movie Backdrop">
