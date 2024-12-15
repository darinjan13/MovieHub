import { Inertia } from "@inertiajs/inertia";

export default function DashboardMovieDisplay({ movie, index }) {

    const handleImageClick = (movieId) => {
        if (movie.media_type == "movie") {
            Inertia.get(route('details.movie', { movie_id: movieId }))
        } else if (movie.media_type == "tv") {
            Inertia.get(route('details.tv', { tv_id: movieId }))
        }
    }
    return (
        <div className="relative text-white h-[400px] sm:h-[600px] overflow-hidden">
            {/* Image */}
            <img
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} // Replace with your image URL
                alt={movie?.name || movie?.original_title || "Movie Image"}
                className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex items-end sm:items-center px-8">
                <div className="text-left">
                    <div className="ml-4 sm:ml-20">
                        <h1 className="mb-5 font-bold text-2xl">#{index + 1} Trending</h1>
                        <h1 className="sm:text-3xl font-bold">
                            {movie?.name ? movie?.name : movie?.original_title}
                        </h1>
                        <div className="hidden sm:flex items-center space-x-3 text-gray-400 text-sm mt-3">
                            <span className="uppercase">📺 {movie.media_type}</span>
                            <span>📅 {movie.release_date || movie.first_air_date}</span>
                        </div>
                        <p className="mt-4 hidden sm:block text-gray-300">{movie?.overview}</p>
                    </div>
                    <div className="flex space-x-4 mt-4 sm:mt-6 sm:ml-20 w-full p-10 sm:p-0">

                        <button onClick={() => handleImageClick(movie.id)} className="bg-pink-500 text-white py-2 text-xs md:text-lg px-10 rounded-full hover:bg-pink-600">
                            Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
