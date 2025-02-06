"use client"

import ChevronLeft from "@/assets/ChevronLeft.svg";
import ChevronRight from "@/assets/ChevronRight.svg"
import React from "react";
import { useState } from "react";
import Image from "next/image";

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/tile/Apple-iPhone-15-Pro-lineup-hero-230912.jpg.landing-big_2x.jpg",
        "https://i.blogs.es/9141be/apple-watch-s9-hero-230912/1200_800.jpeg",
        "https://9to5mac.com/wp-content/uploads/sites/6/2021/09/Horizontal-iPad-Pro-orientation.jpg?quality=82&strip=all"
    ];

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative h-[500px] overflow-hidden">
            <div className="h-full">
                <div className="h-full flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {images.map((src, index) => (
                        <div className="h-full w-full shrink-0 flex-none" key={index}>
                            <Image
                                alt={`Slide ${index + 1}`}
                                src={src}
                                height={500}
                                width={1600}
                                className="object-cover w-full h-full"
                                style={{ aspectRatio: "16/5" }}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <button 
                onClick={handlePrevClick}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-background-color hover:text-highlight-color">
                <svg 
                    xmlns={ChevronLeft}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-8 w-8"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
                </svg>
            </button>
            <button 
                onClick={handleNextClick} 
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-background-color hover:text-highlight-color">
                <svg 
                    xmlns={ChevronRight}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-8 w-8"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                </svg>           
            </button>
        </div>
    );
}

export default Carousel;
