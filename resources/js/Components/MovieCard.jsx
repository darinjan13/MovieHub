import { Inertia } from "@inertiajs/inertia";

const MovieCard = ({ movie }) => {
    const handleImageClick = (movieId) => {
        Inertia.get(route('details.movie', { movie_id: movieId }))
    }
    return (
        <div className="relative cursor-pointer bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <img onClick={() => handleImageClick(movie.id)} className="object-center" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
        </div>
    );
};

export default MovieCard;