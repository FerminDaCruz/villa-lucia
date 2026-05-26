'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
    //exterior
    '/fotos-drive/22.webp',
    '/fotos-drive/21.webp',
    '/fotos-drive/14.webp',

    //interior
    '/fotos-drive/03.webp',
    '/fotos-drive/09.webp',

    //exterior
    '/fotos-drive/16.webp',
    '/fotos-drive/05.webp',
    
    //camas
    '/fotos-drive/11.webp',
    '/fotos-drive/04.webp',

    //baño
    '/fotos-drive/25.webp',

    //quincho
    '/fotos-drive/17.webp',
    '/fotos-drive/20.webp',
    '/fotos-drive/06.webp',
];

export default function ImageSlider() {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const delay = 4000;

    const resetTimer = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    useEffect(() => {
        resetTimer();

        timeoutRef.current = setTimeout(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, delay);

        return () => resetTimer();
    }, [index]);

    const prevSlide = () => {
        resetTimer();
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const nextSlide = () => {
        resetTimer();
        setIndex((prev) => (prev + 1) % images.length);
    };

    return (
        <div className="w-full bg-neutral-900 pb-16">
            <div className="relative w-full md:max-w-4xl lg:max-w-[1056px] mx-auto overflow-hidden ">
                <div className="relative w-full h-[50vh] md:h-[60vh]">
                    <Image
                        src={images[index]}
                        alt={`Slide ${index}`}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 1056px) 100vw, 1056px"
                        className="object-cover"
                    />
                </div>

                {/* Arrows */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-4">
                    <button
                        onClick={prevSlide}
                        className="pointer-events-auto bg-black/30 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm cursor-pointer hover:bg-black/50 transition-colors duration-200"
                    >
                        <FaChevronLeft />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="pointer-events-auto bg-black/30 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm cursor-pointer hover:bg-black/50 transition-colors duration-200"
                    >
                        <FaChevronRight />
                    </button>
                </div>

                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, i) => (
                        <div
                            key={i}
                            className={`h-2 rounded-full transition-all ${
                                i === index ? 'bg-white w-6' : 'bg-white/50 w-2'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
