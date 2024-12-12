import React from 'react'

export default function Watch({ movie_id }) {
    return (
        <>
            <div>KIAN KUPAL</div>
            <div className='flex items-center justify-center p-10'>
                <div className="w-1/2 sm:w-1/2 h-full md:h-[600px] mb-10">
                    <iframe className='w-full h-full' src={`https://vidsrc.xyz/embed/movie/${movie_id}`} frameBorder="0" allowFullscreen="yes"></iframe>
                </div>
            </div>

        </>
    )
}
