import { Inertia } from "@inertiajs/inertia";

const TvCard = ({ tv }) => {
    const handleImageClick = (tvId) => {
        Inertia.get(route('details.tv', { tv_id: tvId }))
    }
    return (
        <div className="relative cursor-pointer bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <img onClick={() => handleImageClick(tv.id)} className="object-center" src={`https://image.tmdb.org/t/p/original${tv.poster_path}`} alt={tv.title} />
        </div>
    );
};

export default TvCard;