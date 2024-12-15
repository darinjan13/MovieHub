import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';

export default function Watch({ season_number, episode_number, details, activeProfile, existingFavorite }) {
    const [episodes, setEpisodes] = useState([])
    const [isFavorite, setIsFavorite] = useState(false);


    useEffect(() => {
        setIsFavorite(existingFavorite);
        if (details?.seasons) {
            const allEpisodes = Array.from({ length: details.seasons[season_number].episode_count }, (_, index) => index + 1);

            setEpisodes(allEpisodes);
        }
    }, [details]);


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
            <div className="flex h-screen bg-gradient-to-b from-purple-700 to-black">
                <div className="w-1/4 bg-gray-800 p-4 overflow-y-auto">
                    <h2 className="text-white text-xl mb-4">List of Seasons</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                        <select
                            onChange={(e) => Inertia.get(route('watch.tv', { tv_id: details.id, season_number: e.target.value, episode_number: 1 }))}
                            value={season_number}
                            className="w-full bg-gray-800 text-white border border-gray-700 rounded px-2 py-1 mb-4"
                        >
                            {details?.seasons.map((season, index) => (
                                <option value={index}>{season.name}</option>
                            ))}
                        </select>
                    </div>
                    <h2 className="text-white text-xl mb-4">List of Episodes</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                        {episodes.map((episode, index) => (
                            <button
                                onClick={() => { Inertia.get(route('watch.tv', { tv_id: details.id, season_number: season_number, episode_number: episode })) }}
                                key={index}
                                className={`text-white mb-2 hover:bg-purple-600 px-2 py-1 rounded ${episode == episode_number ? 'bg-purple-600' : ''}`}
                            >
                                {episode}
                            </button>
                        ))}

                    </div>

                </div>

                <div className="w-3/4 p-4 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => Inertia.get(route('dashboard'))}
                                className="text-white">MovieHub</button>
                            <input
                                type="text"
                                placeholder="Search movie or tv shows..."
                                className="px-4 py-2 bg-gray-700 text-white rounded-full"
                            />
                        </div>
                        <div className="flex space-x-2">
                            <button className="text-white">EN</button>
                            <button className="text-white">JP</button>
                        </div>
                    </div>

                    <div className="flex space-x-4">
                        <div className="w-3/4 mb-10">
                            <iframe
                                className="w-full h-[600px] mb-10"
                                src={`https://vidsrc.xyz/embed/tv?imdb=${details.external_ids?.imdb_id}&season=${season_number}&episode=${episode_number}`}
                                frameBorder="0"
                                allowFullScreen="yes"
                            ></iframe>
                        </div>

                        <div className="w-1/4 bg-gray-800 p-4 text-white rounded-lg">
                            <h3 className="text-xl mb-2">{details.name}</h3>
                            <p className="mb-4">{details.overview}</p>
                            <div className="mt-4">
                                <span className="block mb-2">Rating: {details.vote_average}</span>
                                <button onClick={() => isFavorite ? removeFromFavorites(details.id) : addToFavorites(details.id, details.original_name, 'tv')} className="px-4 py-2 bg-purple-600 text-white rounded-lg">
                                    {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
