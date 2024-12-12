import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';

export default function Watch({ season_number, episode_number, episodeDetails }) {
    const [episodes, setEpisodes] = useState([]);
    console.log(episodeDetails);


    // useEffect(() => {
    //     if (tvDetails?.seasons) {
    //         const allEpisodes = Array.from({ length: tvDetails.seasons[0].episode_count }, (_, index) => index + 1);

    //         setEpisodes(allEpisodes);
    //     }
    // }, [tvDetails]);
    {/* <iframe
                            className="w-full h-[600px] mb-10"
                            src={`https://vidsrc.xyz/embed/tv/${tvDetails.external_ids?.imdb_id}`}
                            frameBorder="0"
                            allowFullScreen="yes"
                        ></iframe> */}

    return (
        <div className="flex h-screen bg-gradient-to-b from-purple-700 to-black">
            {/* <div className="w-1/4 bg-gray-800 p-4 overflow-y-auto">
                <h2 className="text-white text-xl mb-4">List of Episodes</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                    {episodes.map((episode, index) => (
                        <button
                            onClick={() => { Inertia.get(route('watch.tv', { tv_id: tvDetails.id, season_number: season_number, episode_number: episode })) }}
                            key={index}
                            className={`text-white mb-2 hover:bg-purple-600 px-2 py-1 rounded ${episode == episode_number ? 'bg-purple-600' : ''}`}
                        >
                            {episode}
                        </button>
                    ))}
                </div>
            </div>

            <div className="w-3/4 p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                        <button className="text-white">HiAnime</button>
                        <input
                            type="text"
                            placeholder="Search anime..."
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
                        
                    </div>

                    <div className="w-1/4 bg-gray-800 p-4 text-white rounded-lg">
                        <h3 className="text-xl mb-2">{tvDetails.name}</h3>
                        <p className="mb-4">{tvDetails.overview}</p>
                        <div className="flex space-x-2">
                            <button className="text-white">Sub</button>
                            <button className="text-white">Dub</button>
                        </div>
                        <div className="mt-4">
                            <span className="block mb-2">Rating: {tvDetails.vote_average}</span>
                            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">Vote now</button>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex justify-between items-center">
                    <div className="flex space-x-2">
                        <button className="text-white">Prev</button>
                        <button className="text-white">Next</button>
                    </div>
                    <div>
                        <button className="text-white">Auto Play</button>
                        <button className="text-white ml-4">Auto Next</button>
                    </div>
                </div>
            </div> */}
        </div>
    );
}
