import MovieCard from "@/Components/MovieCard";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { Head, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

const Details = ({ movieDetails, similarMovies, activeProfile, existingFavorite }) => {

    const user = usePage().props

    const [trailerId, setTrailerId] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);


    useEffect(() => {

        setIsFavorite(existingFavorite);
        let foundTrailer = false;

        movieDetails?.videos.results.forEach(video => {
            if (video.name === "Official Trailer") {
                setTrailerId(video.key);
                foundTrailer = true;
            }
        });

        if (!foundTrailer && movieDetails?.videos.results.length > 0) {
            setTrailerId(movieDetails.videos.results[0].key);

        }
    }, [movieDetails])

    const handleWatchNow = (movie_id) => {
        Inertia.get(route('watch.movie', { movie_id: movie_id }))
    }

    const addToFavorites = (movie_id, movie_title, type) => {
        Inertia.post(route('favorites.store', { content_id: movie_id, content_title: movie_title, type: type }));
        window.location.reload
    }

    const removeFromFavorites = (movie_id) => {
        Inertia.post(route('favorites.remove'), { content_id: movie_id });
        window.location.reload();
    };

    return (
        <AuthenticatedLayout subscribed={true} activeProfile={activeProfile}>
            <Head title={movieDetails.original_title} />
            <div className="bg-gray-800 text-white">
                <div className="p-4 sm:p-10 flex flex-col sm:flex-row items-center space-x-6 sm:h-screen">
                    <div className="sm:w-full mb-6 sm:mb-0">
                        <iframe className="w-full h-[300px] sm:h-[800px] rounded-lg shadow-lg"
                            src={`https://www.youtube.com/embed/${trailerId}`} frameBorder="0"
                            allowFullScreen></iframe>
                    </div>

                    <div className="w-full sm:w-2/3">
                        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{movieDetails.title}</h1>
                        <p className="text-lg text-gray-400 mb-4">{movieDetails.tagline}</p>
                        <p className="text-sm text-gray-300 mb-4">{movieDetails.overview}</p>

                        <div className="text-sm text-gray-400 mb-6">
                            <p>
                                <span className="font-semibold">Genres: </span>
                                {movieDetails.genres.map(genre => genre.name).join(', ')}
                            </p>
                            <p>
                                <span className="font-semibold">Status: </span>{movieDetails.status}
                            </p>
                            <p>
                                <span className="font-semibold">Premiered: </span>{movieDetails.release_date}
                            </p>
                            <p>
                                <span className="font-semibold">Duration: </span>{movieDetails.runtime} minutes
                            </p>
                        </div>

                        <div className="flex space-x-4">
                            <button onClick={() => handleWatchNow(movieDetails.imdb_id)} className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-6 rounded-lg">
                                Watch Now
                            </button>
                            <button onClick={() => isFavorite ? removeFromFavorites(movieDetails.id) : addToFavorites(movieDetails.id, movieDetails.original_title, 'movie')} className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-6 rounded-lg">
                                {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-900">
                    <h1 className="font-bold text-2xl sm:px-10 pt-10 px-5">Similar Movies</h1>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 p-1">
                        {similarMovies.map((movie) => (
                            <div key={movie.id} className="flex flex-col justify-center m-1 sm:m-5 hover:scale-110">
                                <MovieCard movie={movie} />
                                <h1 className='mt-1 text-white overflow-hidden text-ellipsis whitespace-nowrap'>{movie.title}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Details;
