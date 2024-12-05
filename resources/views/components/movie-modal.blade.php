@props([
    'details' => null,
    'show' => false,
])

@php
    $imageBaseUrl = env('REACT_APP_IMAGE_URL') . 'original';
@endphp

<div x-data="{ show: @entangle('show'), details: @entangle('details') }" x-cloak>
    <!-- Modal -->
    <template x-if="show">
        <div class="relative z-50 rounded-lg">
            <!-- Backdrop -->
            <div class="fixed inset-0 bg-black/70" x-on:click="show = false"></div>

            <!-- Modal Content -->
            <div class="fixed z-10 inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center rounded-lg">
                    <div class="mx-auto md:mt-10 h-full md:w-[90%] lg:w-[70%] bg-white">
                        <div class="relative h-full w-full flex flex-col">
                            <!-- Close Button -->
                            <button class="bg-black/80 rounded-full p-2 absolute right-3 top-3 text-white"
                                x-on:click="show = false">
                                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="2.8" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15.75 19.5 8.25 12l7.5-7.5" />
                                </svg>
                            </button>

                            <!-- Movie/TV Image -->
                            <img class="md:h-1/2"
                                :src="details.backdrop_path ? `{{ $imageBaseUrl }}${details.backdrop_path}` : 'default.jpg'"
                                alt="" />

                            <!-- Movie/TV Info -->
                            <div class="w-full bg-neutral-800 text-white pb-10 mx-auto md:-mt-10">
                                <h1 class="block font-bold text-xl text-center mb-5 md:mb-10"
                                    x-text="details.title || details.name || 'Movie Title'"></h1>

                                <div
                                    class="md:grid grid-flow-row-dense text-start grid-cols-3 gap-5 mx-5 space-y-5 md:space-y-0">
                                    <h1 class="col-span-2 pl-3 text-sm md:text-lg md:pl-10"
                                        x-text="details.overview || 'No overview available.'"></h1>

                                    <div>
                                        <!-- Release Date -->
                                        <div class="flex flex-row flex-wrap">
                                            <span>Release Date:&nbsp;</span>
                                            <h1 class="font-bold"
                                                x-text="details.release_date || details.first_air_date || 'Unknown'">
                                            </h1>
                                        </div>

                                        <!-- Cast -->
                                        <div class="flex flex-row flex-wrap">
                                            <span>Cast:&nbsp;</span>
                                            <template x-for="(cast, index) in details.credits?.cast.slice(0, 5)"
                                                :key="index">
                                                <h1 class="font-bold lg:hover:underline after:pr-1 after:content-[','] last:after:hidden"
                                                    x-text="cast.original_name"></h1>
                                            </template>
                                        </div>

                                        <!-- Genre -->
                                        <div class="text-center flex flex-row flex-wrap">
                                            <span>Genre:&nbsp;</span>
                                            <template x-for="(genre, index) in details.genres" :key="index">
                                                <h1 class="font-bold lg:hover:underline after:pr-1 after:content-[','] last:after:hidden"
                                                    x-text="genre.name"></h1>
                                            </template>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>
</div>
