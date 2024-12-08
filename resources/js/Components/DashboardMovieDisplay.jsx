import React from 'react'

export default function DashboardMovieDisplay({ movie }) {

    return (
        <div className="text-white">
            {/* Image */}
            <img
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} // Replace with your image URL
                alt="The Elusive Samurai"
            />
            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex items-end sm:items-center px-8">
                <div className="text-left">
                    <div className='ml-4 sm:ml-20'>
                        <h1 className="sm:text-3xl font-bold">{movie?.name ? movie?.name : movie?.original_title}</h1>
                        <div className="hidden sm:flex items-center space-x-3 text-gray-400 text-sm mt-3">
                            <span className="uppercase">📺 {movie.media_type}</span>
                            <span>📅 {movie.release_date || movie.first_air_date}</span>
                        </div>
                        <p className="mt-4 hidden sm:block text-gray-300">{movie?.overview}</p>
                    </div>
                    <div className="flex space-x-4 mt-4 sm:mt-6 sm:ml-20 w-full">
                        <button className="bg-pink-500 text-white text-xs md:text-lg px-10 rounded-full hover:bg-pink-600">
                            Watch Now
                        </button>
                        <button className="bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-800">
                            Detail
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}
