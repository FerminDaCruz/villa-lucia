'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    FiX,
    FiChevronLeft,
    FiChevronRight,
    FiZoomIn,
    FiCalendar,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const GALLERY_ITEMS = [
    {
        src: '/fotos-drive/01.webp',
        category: 'interior',
        title: 'Cocina',
    },
    {
        src: '/fotos-drive/02.webp',
        category: 'quincho',
        title: 'Entrada del quincho',
    },
    {
        src: '/fotos-drive/03.webp',
        category: 'interior',
        title: 'Living comedor',
    },
    {
        src: '/fotos-drive/04.webp',
        category: 'interior',
        title: 'Dormitorio',
    },
    {
        src: '/fotos-drive/05.webp',
        category: 'exterior',
        title: 'Bosques y exteriores',
    },
    {
        src: '/fotos-drive/06.webp',
        category: 'quincho',
        title: 'Exterior del quincho',
    },
    {
        src: '/fotos-drive/07.webp',
        category: 'interior',
        title: 'Interior',
    },
    {
        src: '/fotos-drive/08.webp',
        category: 'interior',
        title: 'Cocina equipada',
    },
    {
        src: '/fotos-drive/09.webp',
        category: 'interior',
        title: 'Futón sillón-cama',
    },
    {
        src: '/fotos-drive/10.webp',
        category: 'exterior',
        title: 'Cabañas y arbustos',
    },
    {
        src: '/fotos-drive/11.webp',
        category: 'interior',
        title: 'Habitación matrimonial',
    },
    {
        src: '/fotos-drive/12.webp',
        category: 'interior',
        title: 'Entrada',
    },
    {
        src: '/fotos-drive/13.webp',
        category: 'interior',
        title: 'Escalera interior',
    },
    {
        src: '/fotos-drive/14.webp',
        category: 'exterior',
        title: 'Cabañas entre los árboles',
    },
    {
        src: '/fotos-drive/15.webp',
        category: 'interior',
        title: 'Escritorio y diván Planta Alta',
    },
    {
        src: '/fotos-drive/16.webp',
        category: 'quincho',
        title: 'Quincho y fogón',
    },
    {
        src: '/fotos-drive/17.webp',
        category: 'quincho',
        title: 'Interior del quincho',
    },
    {
        src: '/fotos-drive/18.webp',
        category: 'quincho',
        title: 'Interior del quincho',
    },
    {
        src: '/fotos-drive/19.webp',
        category: 'exterior',
        title: 'Entrada del quincho',
    },
    {
        src: '/fotos-drive/20.webp',
        category: 'quincho',
        title: 'Quincho compartido',
    },
    {
        src: '/fotos-drive/21.webp',
        category: 'exterior',
        title: 'Cabañas nevadas',
    },
    {
        src: '/fotos-drive/22.webp',
        category: 'exterior',
        title: 'Fogón y atardecer',
    },
    {
        src: '/fotos-drive/23.webp',
        category: 'interior',
        title: 'Comedor',
    },
    {
        src: '/fotos-drive/24.webp',
        category: 'interior',
        title: 'Dormitorio doble',
    },
    {
        src: '/fotos-drive/25.webp',
        category: 'interior',
        title: 'Baño completo con bañera',
    },
    {
        src: '/fotos-drive/26.webp',
        category: 'quincho',
        title: 'Interior del quincho',
    },
];

const CATEGORIES = [
    { id: 'all', label: 'Todos' },
    { id: 'exterior', label: 'Exterior y Parque' },
    { id: 'interior', label: 'Interior Cabañas' },
    { id: 'quincho', label: 'Quincho y Fogón' },
];

export default function GaleriaPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const filteredItems =
        selectedCategory === 'all'
            ? GALLERY_ITEMS
            : GALLERY_ITEMS.filter(
                  (item) => item.category === selectedCategory,
              );

    const handleNext = useCallback(() => {
        if (lightboxIndex === null) return;
        setLightboxIndex((prev) => {
            if (prev === null) return null;
            return (prev + 1) % filteredItems.length;
        });
    }, [lightboxIndex, filteredItems.length]);

    const handlePrev = useCallback(() => {
        if (lightboxIndex === null) return;
        setLightboxIndex((prev) => {
            if (prev === null) return null;
            return (prev - 1 + filteredItems.length) % filteredItems.length;
        });
    }, [lightboxIndex, filteredItems.length]);

    const handleClose = useCallback(() => {
        setLightboxIndex(null);
    }, []);

    // Control por teclado
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (lightboxIndex === null) return;
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'Escape') handleClose();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxIndex, handleNext, handlePrev, handleClose]);

    // Prevenir el scroll de fondo cuando la galería está abierta
    useEffect(() => {
        if (lightboxIndex !== null) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => document.body.classList.remove('no-scroll');
    }, [lightboxIndex]);

    const phone = '5492944588900';
    const message = 'Hola, quisiera consultar disponibilidad para reservar.';
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
        message,
    )}`;

    return (
        <div className="bg-stone-50 min-h-screen relative overflow-hidden">
            {/* HERO SECTION */}
            <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 border-b border-stone-250/40 from-white to-stone-50/50">
                <Image
                    src="/hero/1-ia-1920x1200.webp"
                    alt="Background"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover block"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative  text-white">
                    <span className="uppercase tracking-widest text-xs mb-3 block">
                        Álbum de fotos
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight  mb-6">
                        Galería de{' '}
                        <span className="font-heading2 italic text-light-green text-5xl md:text-7xl font-normal block sm:inline">
                            Fotos
                        </span>
                    </h1>
                    <p className="text-stone-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        Explorá el complejo a través de nuestras imágenes.
                        Descubrí la calidez de los interiores de las cabañas, el
                        equipamiento del quincho y la inmensa paz del bosque
                        nativo que nos rodea.
                    </p>
                </div>
            </section>

            {/* FILTROS DE CATEGORÍAS */}
            <section className="pt-10 pb-6 max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex flex-wrap gap-3 justify-center">
                    {CATEGORIES.map((category) => {
                        const isActive = selectedCategory === category.id;
                        return (
                            <button
                                key={category.id}
                                onClick={() => {
                                    setSelectedCategory(category.id);
                                    setLightboxIndex(null);
                                }}
                                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md ${
                                    isActive
                                        ? 'bg-dark-green text-white shadow-dark-green/20'
                                        : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-100 hover:text-stone-850'
                                }`}
                            >
                                {category.label}
                            </button>
                        );
                    })}
                </div>
            </section>

            {/* GRILLA DE IMÁGENES */}
            <section className="py-8 pb-20 max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredItems.map((item, index) => (
                        <div
                            key={item.src}
                            onClick={() => setLightboxIndex(index)}
                            className="bg-white rounded-3xl overflow-hidden border border-stone-200/60 shadow-md shadow-stone-200/20 group cursor-pointer hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative aspect-square w-full overflow-hidden bg-stone-100">
                                <Image
                                    src={item.src}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                                    priority={index < 8}
                                />
                                {/* Overlay de hover con lupa */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                                    <FiZoomIn className="w-8 h-8 mb-2 transform scale-75 group-hover:scale-100 transition-transform duration-300" />
                                    <span className="text-xs uppercase tracking-widest font-semibold opacity-80">
                                        Ampliar
                                    </span>
                                </div>
                            </div>
                            <div className="p-4 text-center border-t border-stone-100 bg-stone-50/50">
                                <p className="text-stone-800 font-semibold text-sm line-clamp-1">
                                    {item.title}
                                </p>
                                <span className="text-[10px] uppercase tracking-wider text-stone-400 font-bold block mt-1">
                                    {
                                        CATEGORIES.find(
                                            (c) => c.id === item.category,
                                        )?.label
                                    }
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECCIÓN CALL TO ACTION FINAL */}
            <section className="py-20 bg-stone-100/70 border-t border-stone-200/60 text-center">
                <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
                    <span className="uppercase tracking-widest text-xs font-semibold text-dark-green">
                        Viví la experiencia
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
                        ¿Querés conocer{' '}
                        <span className="font-heading2 italic text-dark-green text-5xl md:text-7xl font-normal block ">
                            Villa Lucía
                        </span>{' '}
                        en persona?
                    </h2>
                    <p className="text-stone-600 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
                        Consultá la disponibilidad para tu próxima escapada o
                        vacaciones familiares en San Carlos de Bariloche.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 max-w-md mx-auto">
                        <Link
                            href="/contacto"
                            className="inline-flex items-center justify-center gap-2 border-2 border-stone-300 hover:border-dark-green bg-white hover:bg-dark-green hover:text-white text-stone-700 font-bold py-3.5 px-8 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md w-full text-center
                        
                        "
                        >
                            <FiCalendar className="w-6 h-6 md:w-10 md:h-10" />
                            Reservar Ahora
                        </Link>
                        <a
                            href={whatsappLink}
                            className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-[#25d366]/90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 w-full text-center"
                        >
                            <FaWhatsapp className="w-6 h-6 md:w-10 md:h-10" />
                            Consultar WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* LIGHTBOX MODAL */}
            {lightboxIndex !== null && (
                <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center transition-all duration-300">
                    {/* Botón de Cerrar */}
                    <button
                        onClick={handleClose}
                        className="absolute top-6 right-6 z-55 text-white/80 hover:text-white hover:bg-white/10 p-3 rounded-full cursor-pointer transition-colors duration-200"
                        title="Cerrar (Esc)"
                    >
                        <FiX className="w-7 h-7" />
                    </button>

                    {/* Botón Anterior */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-4 md:left-8 z-55 text-white/80 hover:text-white hover:bg-white/10 p-4 rounded-full cursor-pointer transition-colors duration-200"
                        title="Anterior (←)"
                    >
                        <FiChevronLeft className="w-8 h-8" />
                    </button>

                    {/* Contenedor de la Imagen */}
                    <div className="relative w-full max-w-5xl h-[70vh] md:h-[80vh] px-4 flex flex-col items-center justify-center">
                        <div className="relative w-full h-full select-none">
                            <Image
                                src={filteredItems[lightboxIndex].src}
                                alt={filteredItems[lightboxIndex].title}
                                fill
                                sizes="(max-width: 1200px) 100vw, 1200px"
                                className="object-contain pointer-events-none"
                                priority
                            />
                        </div>
                        {/* Título de la imagen y contador */}
                        <div className="text-center mt-6 text-white max-w-xl">
                            <h4 className="font-semibold text-lg md:text-xl tracking-wide">
                                {filteredItems[lightboxIndex].title}
                            </h4>
                            <p className="text-xs text-white/50 uppercase tracking-widest mt-2 font-bold">
                                {
                                    CATEGORIES.find(
                                        (c) =>
                                            c.id ===
                                            filteredItems[lightboxIndex]
                                                .category,
                                    )?.label
                                }{' '}
                                • {lightboxIndex + 1} de {filteredItems.length}
                            </p>
                        </div>
                    </div>

                    {/* Botón Siguiente */}
                    <button
                        onClick={handleNext}
                        className="absolute right-4 md:right-8 z-55 text-white/80 hover:text-white hover:bg-white/10 p-4 rounded-full cursor-pointer transition-colors duration-200"
                        title="Siguiente (→)"
                    >
                        <FiChevronRight className="w-8 h-8" />
                    </button>
                </div>
            )}
        </div>
    );
}
