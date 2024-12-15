import MovieCard from '@/Components/MovieCard';
import TvCard from '@/Components/TvCard';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import React from 'react'

export default function Favorites({ subscribed, favorites, activeProfile }) {
    const user = usePage().props;

    return (
        <>
            <AuthenticatedLayout subscribed={subscribed} activeProfile={activeProfile}>
                <Head title='Favorites' />

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 p-1 sm:p-20">
                    {favorites.map(favorite => (
                        <div key={favorite.id} className="flex flex-col justify-center m-1 sm:m-5 hover:scale-110">
                            {favorite.type == "movie" ? (
                                <MovieCard movie={favorite} />
                            ) : (
                                <TvCard tv={favorite} />
                            )}
                            <h1 className='mt-1 text-white overflow-hidden text-ellipsis whitespace-nowrap'>{favorite.title ?? favorite.name}</h1>
                        </div>
                    ))}
                </div>
            </AuthenticatedLayout>
        </>
    )
}
