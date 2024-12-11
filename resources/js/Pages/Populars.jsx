import MovieCard from '@/Components/MovieCard';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';

export default function Populars({ movies, totalPages }) {
    const { currentPage: page } = usePage().props
    const [currentPage, setCurrentPage] = useState(page);
    console.log(movies.results);

    const handleNextPage = () => {

        Inertia.get(route('popular.movies', { page: currentPage + 1 }));
    };

    const handleClickPage = (pageNum) => {

        Inertia.get(route('popular.movies', { page: pageNum }));
    };

    const handlePrevPage = () => {
        Inertia.get(route('popular.movies', { page: currentPage - 1 }));
    };

    return (
        <div className="bg-gray-700 md:p-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 p-1 sm:p-20">
                {movies.results.map((movie) => (
                    <div key={movie.id} className="flex flex-col justify-center m-1 sm:m-5 hover:scale-110">
                        <MovieCard movie={movie} />
                        <h1 className='mt-1 text-white overflow-hidden text-ellipsis whitespace-nowrap'>{movie.title}</h1>
                    </div>
                ))}
            </div>

            <div className="flex justify-center space-x-2 mt-6">
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className={`bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 ${currentPage === 1 ? 'hidden' : 'block'}`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-full text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>

                <div className="flex items-center space-x-2">
                    {/* Numbered Pagination Buttons */}
                    {[...Array(totalPages).keys()]
                        .slice(Math.max(0, currentPage - 3), currentPage + 2)
                        .map((pageNum) => (
                            <button
                                key={pageNum + 1}
                                onClick={() => handleClickPage(pageNum + 1)}
                                disabled={currentPage === pageNum + 1}
                                className={`py-2 px-4 rounded-full text-white ${currentPage === pageNum + 1 ? 'bg-blue-500' : 'bg-gray-800 hover:bg-gray-700'}`}
                            >
                                {pageNum + 1}
                            </button>
                        ))}
                </div>

                <button
                    onClick={handleNextPage}
                    className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-full w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
