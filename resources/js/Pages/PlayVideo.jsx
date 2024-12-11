import React from "react";

const PlayVideo = () => {
    return (
        <>
            < div className="container mx-auto flex items-center justify-center h-screen" >
                {/* Video Section */}
                < div className="w-screen h-1/2 mb-10" >
                    <iframe
                        className="w-full h-full rounded-lg shadow-lg"
                        src={`https://vidsrc.to/embed/movie/tt0137523`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="ASDASD"
                    ></iframe>
                </div >

                < div className="flex items-center" >
                    <div className="ml-10 mt-5">
                        <h1 className="text-4xl font-bold">ASD</h1>
                        <p className="mt-2 text-sm text-gray-400">ASD</p>
                        <div className="mt-5">
                            <p className="text-lg font-semibold">
                                Release Date:{" "}
                                <span className="text-gray-300">
                                    ASDASD
                                </span>
                            </p>
                            <p className="text-lg font-semibold">
                                Cast:{" "}
                                <span className="text-gray-300">ASD</span>
                            </p>
                            <p className="text-lg font-semibold">
                                Genre:{" "}
                                <span className="text-gray-300">ASD</span>
                            </p>
                        </div>
                    </div>
                </div >
            </div >
        </>
    );
};

export default PlayVideo;
