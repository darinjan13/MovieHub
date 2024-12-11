import DashboardMovieDisplay from '@/Components/DashboardMovieDisplay';
import MovieCard from '@/Components/MovieCard';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import { useEffect } from 'react';
// import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { CustomLeftArrow, CustomRightArrow } from '@/Components/CustomArrows';

export default function Dashboard({ subscribed, trendings, popularMovies, popularTVShows }) {
    const { profileId } = usePage().props
    // const trendingsArray = Array.isArray(trendings) ? trendings : Object.values(trendings);
    console.log(popularTVShows.results);

    return (
        <AuthenticatedLayout
            subscribed={subscribed}
        >
            <Head title="Dashboard" />
            <div className='pb-10'>
                <div>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={1}
                        slidesPerView={1}
                        className=''
                    >
                        {trendings.slice(0, 10).map((movie, index) => (
                            <SwiperSlide key={movie.id}>
                                <DashboardMovieDisplay movie={movie} index={index} />
                            </SwiperSlide>
                        ))}
                        <CustomLeftArrow />
                        <CustomRightArrow />
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

                <div className=" space-y-5 sm:space-y-20">

                    {/* Popular Movies */}
                    <div className=" mb-10 px-1 sm:px-20 w-full">
                        <div className="p-6 text-white font-bold sm:text-2xl w-fit cursor-pointer">
                            <span className='flex flex-row items-center'>Popular Movies<svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-7 h-7"
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
                            </span>
                        </div>
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={10}
                            slidesPerView={5}
                            slidesPerGroup={1}
                            className="relative"
                        >
                            {popularMovies.results.slice(0, 10).map((movie) => (
                                <SwiperSlide key={movie.id} className="flex justify-center">
                                    <MovieCard movie={movie} />
                                </SwiperSlide>
                            ))}
                            <CustomLeftArrow />
                            <CustomRightArrow />
                        </Swiper>
                    </div>

                    {/* Popular TV Shows */}
                    <div className="w-full mb-10 px-1 sm:px-20">
                        <div className="p-6 text-white font-bold sm:text-2xl w-fit cursor-pointer">
                            <span className='flex flex-row items-center'>Popular TV Shows<svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-7 h-7"
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
                            </span>
                        </div>
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={10}
                            slidesPerView={5}
                            slidesPerGroup={1}
                            className="relative"
                        >
                            {popularTVShows.results.slice(0, 10).map((movie) => (
                                <SwiperSlide key={movie.id} className="flex justify-center">
                                    <MovieCard movie={movie} />
                                </SwiperSlide>
                            ))}
                            <CustomLeftArrow />
                            <CustomRightArrow />
                        </Swiper>
                    </div>

                    <div className="w-full mb-10 px-1 sm:px-20">
                        <div className="p-6 text-white font-bold sm:text-2xl w-fit cursor-pointer">
                            <span className='flex flex-row items-center'>Popular<svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-7 h-7"
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
                            </span>
                        </div>
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={10}
                            slidesPerView={5}
                            slidesPerGroup={1}
                            className="relative"
                        >
                            {popularTVShows.results.slice(0, 10).map((movie) => (
                                <SwiperSlide key={movie.id} className="flex justify-center">
                                    <MovieCard movie={movie} />
                                </SwiperSlide>
                            ))}
                            <CustomLeftArrow />
                            <CustomRightArrow />
                        </Swiper>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
