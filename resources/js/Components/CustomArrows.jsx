import { useSwiper } from "swiper/react";
import { useState, useEffect } from "react";

export const CustomLeftArrow = () => {
    const swiper = useSwiper();
    const [isDisabled, setIsDisabled] = useState(swiper.isBeginning);

    useEffect(() => {
        const handleSlideChange = () => {
            setIsDisabled(swiper.isBeginning);
        };

        swiper.on("slideChange", handleSlideChange);

        return () => {
            swiper.off("slideChange", handleSlideChange);
        };
    }, [swiper]);

    return (
        <button
            onClick={() => swiper.slidePrev()}
            className={`absolute hidden md:block inset-y-0 left-0 my-auto w-[60px] z-10 text-2xl ${isDisabled ? "opacity-0" : "opacity-100"
                }`}
            disabled={isDisabled}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full text-white"
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
    );
};

export const CustomRightArrow = () => {
    const swiper = useSwiper();
    const [isDisabled, setIsDisabled] = useState(swiper.isEnd);

    useEffect(() => {
        const handleSlideChange = () => {
            setIsDisabled(swiper.isEnd);
        };

        swiper.on("slideChange", handleSlideChange);

        return () => {
            swiper.off("slideChange", handleSlideChange);
        };
    }, [swiper]);

    return (
        <button
            onClick={() => swiper.slideNext()}
            className={`absolute hidden md:block inset-y-0 right-0 my-auto w-[60px] z-10 ${isDisabled ? "opacity-0" : "opacity-100"
                }`}
            disabled={isDisabled}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full text-white"
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
    );
};
