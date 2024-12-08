import DashboardMovieDisplay from '@/Components/DashboardMovieDisplay';
import MovieCard from '@/Components/MovieCard';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import { useEffect } from 'react';
// import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

export default function Dashboard({ subscribed, profile, movies, popular }) {
    const { profileId } = usePage().props
    const moviesArray = Array.isArray(movies) ? movies : Object.values(movies);
    console.log(popular);


    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-white">
                    Dashboard
                </h2>
            }
            subscribed={subscribed}
        >
            <Head title="Dashboard" />
            <div>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={1}
                    slidesPerView={1}
                    navigation
                    className=''
                >
                    {moviesArray.map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <DashboardMovieDisplay movie={movie} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* <div className="swiper sm:h-full">
                    <div className="swiper-wrapper">
                        
                    </div>
                    <div className="swiper-button-prev hidden cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.8" stroke="currentColor" className="size-6 w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </div>

                    <div className="swiper-button-next absolute hidden rounded-full inset-y-0 right-0 my-auto h-12 w-12 z-10 lg:flex items-center justify-center cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.8" stroke="currentColor" className="size-6 w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div> */}
            </div>

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-gray-900 shadow-sm sm:rounded-lg">
                        <div className="p-6 text-white">
                            You're logged in! {profile.profile_name}
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-6 text-white font-bold text-2xl">
                Popular Movies
            </div>
            <Swiper
                modules={[Navigation]}
                spaceBetween={5}
                slidesPerView={5}
                slidesPerGroup={5}
                navigation
                className=''
            >
                {popular.results.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <MovieCard movie={movie} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </AuthenticatedLayout>
    );
}
