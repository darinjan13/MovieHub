import MovieCard from "@/Components/MovieCard";
import TvCard from "@/Components/TvCard";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { Head, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

const Details = ({ tvDetails, similarTv, activeProfile, existingFavorite }) => {
    const [trailerId, setTrailerId] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);


    useEffect(() => {
        setIsFavorite(existingFavorite);
        let foundTrailer = false;

        tvDetails?.videos.results.forEach(video => {
            if (video.name === "Official Trailer") {
                setTrailerId(video.key);
                foundTrailer = true;
            }
        });

        if (!foundTrailer && tvDetails?.videos.results.length > 0) {
            setTrailerId(tvDetails.videos.results[0].key);
        }
    }, [tvDetails])


    const handleWatchNow = (tv_id, season_number, episode_number) => {
        Inertia.get(route('watch.tv', { tv_id: tv_id, season_number: season_number, episode_number: episode_number }))
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
            <Head title={tvDetails.original_name} />
            <div className="bg-gray-800 text-white">
                <div className="p-4 sm:p-10 flex flex-col sm:flex-row items-center space-x-6 sm:h-screen">
                    <div className="sm:w-full mb-6 sm:mb-0">
                        <iframe className="w-full h-[300px] sm:h-[800px] rounded-lg shadow-lg"
                            src={`https://www.youtube.com/embed/${trailerId}`} frameBorder="0"
                            allowFullScreen></iframe>
                    </div>

                    <div className="w-full sm:w-2/3">
                        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{tvDetails.name}</h1>
                        <p className="text-lg text-gray-400 mb-4">{tvDetails.tagline}</p>
                        <p className="text-sm text-gray-300 mb-4">{tvDetails.overview}</p>

                        <div className="text-sm text-gray-400 mb-6">
                            <p>
                                <span className="font-semibold">Genres: </span>
                                {tvDetails.genres.map(genre => genre.name).join(', ')}
                            </p>
                            <p>
                                <span className="font-semibold">Status: </span>{tvDetails.status}
                            </p>
                            <p>
                                <span className="font-semibold">Premiered: </span>{tvDetails.first_air_date}
                            </p>
                            <p>
                                <span className="font-semibold">Seasons: </span>{tvDetails.number_of_seasons}
                            </p>
                        </div>

                        <div className="flex space-x-4">
                            <button onClick={() => handleWatchNow(tvDetails.id, 0, 1)} className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-6 rounded-lg">
                                Watch Now
                            </button>
                            <button onClick={() => isFavorite ? removeFromFavorites(tvDetails.id) : addToFavorites(tvDetails.id, tvDetails.original_name, 'tv')} className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-6 rounded-lg">
                                {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-900">
                    <h1 className="font-bold text-2xl sm:px-10 pt-10 px-5">Similar tvs</h1>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 p-1">
                        {similarTv.map((tv) => (
                            <div key={tv.id} className="flex flex-col justify-center m-1 sm:m-5 hover:scale-110">
                                <TvCard tv={tv} />
                                <h1 className='mt-1 text-white overflow-hidden text-ellipsis whitespace-nowrap'>{tv.name}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Details;
