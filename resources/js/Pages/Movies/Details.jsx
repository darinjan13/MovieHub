const Details = ({ movieDetails }) => {
    console.log(movieDetails);

    return (
        <div className="bg-gray-800 text-white p-6">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center space-x-6">
                {/* Left side: movieDetails Poster */}
                <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                        alt={movieDetails.title}
                        className="rounded-lg shadow-lg"
                    />
                </div>

                {/* Right side: movieDetails Details */}
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
                        <p>
                            <span className="font-semibold">MAL Score: </span>{movieDetails.vote_average} / 10
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                        <button className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-6 rounded-lg">
                            Watch Now
                        </button>
                        <button className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-6 rounded-lg">
                            Add to Favorites
                        </button>
                    </div>

                    {/* Share Section */}
                    <div className="mt-6">
                        <p className="text-sm text-gray-400">Share Anime:</p>
                        <div className="flex space-x-4 mt-2">
                            <button className="text-blue-400 hover:text-blue-500">Facebook</button>
                            <button className="text-blue-400 hover:text-blue-500">Twitter</button>
                            <button className="text-blue-400 hover:text-blue-500">Reddit</button>
                            <button className="text-blue-400 hover:text-blue-500">Telegram</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
