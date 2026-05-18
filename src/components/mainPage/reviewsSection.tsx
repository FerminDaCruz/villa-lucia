'use client';

import Image from 'next/image';
import React, { useRef, useState, useEffect } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const reviews = [
    {
        name: 'Franco gallitrico',
        stars: 5,
        description:
            'Increíbles cabañas, muy cómodas y con buena ubicación! Excelente la atención! Sin dudas volvería. 10/10',
        img: '/reviews/franco-gallitrico.png',
    },
    {
        name: 'Julián Medina Carrosielo',
        stars: 5,
        description:
            '10 puntos las cabañas, hermosas y tranquilas. Gonzalo muy atento y generoso, siempre dispuesto a ayudar. Sin duda volveriamos!!',
        img: '/reviews/julian-medina.png',
    },
    {
        name: 'Tamara Cantero',
        stars: 5,
        description:
            'Hermosísimas, cómodas, el lugar es un sueño de mucha tranquilidad y el personal un 10. Volvería siempre!',
        img: '/reviews/tamara-cantero.png',
    },
    {
        name: 'Carla Cordoba',
        stars: 5,
        description:
            'Hermosas cabañas. Todo muy bello. Completisimas. Y sus dueños súper divinos.. súper recomendable!',
        img: '/reviews/carla-cordoba.png',
    },
    {
        name: 'Santiago Urrizola',
        stars: 5,
        description:
            'Excelentes cabañas. Amplias muy amplias. Toda la construcción e instalación es de calidad. Cuidada en todos los detalles. Ideal para familia tiene espacios súper cómodos y con espacio. Silencio total por la noche para descansarLos dueños unos genios ! La ubicación para ir al cerro espectacular. Muy cerca de todo. Son mucho más lindas que lo que se ven en la foto. Sin duda volveremos',
        img: '/reviews/santiago-urrizola.png',
    },
    {
        name: 'gisela zappone',
        stars: 5,
        description:
            'Hermosas cabañas! Gonzalo un anfitrión excelente super amable y atento. Las cabañas son tal cual se ven en las fotos. Super recomendable!!',
        img: '/reviews/gisela-zappone.png',
    },
    {
        name: 'jean jeldres',
        stars: 5,
        description:
            'Buen lugar, buena atención, alejado del centro, así que bien para nosotros. Tranquilo, seguro, recomendable! Con aire acondicionado seria perfecto 👌! Pero los dormitorios en el primer nivel muy frescos, así q bien para verano. TIENE calefacción para invierno! A disfrutar!!!!',
        img: '/reviews/jean-jeldres.png',
    },
    {
        name: 'Rodrigo Padin',
        stars: 5,
        description:
            'Nos hospedamos una semana en plena vacaciones de invierno. Excelente lugar, mejor que en las fotos. Sus anfitriones atentos, y las instalaciones muy buenas. Le faltaría algo más de equipamiento en cuanto a vajilla, pero lo básico estaba. Como consejo trataría de mejorar el tema de parrilla en el exterior, ya que la lluvia o nieve no nos permitió hacer asados. Sin dudas volvería.',
        img: '/reviews/rodrigo-padin.png',
    },
    {
        name: 'Carolina Deruvo',
        stars: 5,
        description:
            'Muy buen servicio, los dueños son muy detallistas y te visitan varias veces para asegurarse de que todo este en buenas condiciones y estes pasando una linda estadía. Gon (dueño) fabrica cervezas artesanales espectaculares de las cuales me traje un par para Buenos Aires. De las instalaciones no me puedo quejar, cuentan con una parrilla por cabaña, un playroom compartido y un fogón. La limpieza te la realizan todos los días y cuenta con una buena ubicación. En resumen fue una muy buena experiencia y volveré en el futuro.',
        img: '/reviews/carolina-deruvo.png',
    },
];

export default function ReviewsSection() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Auto-scroll timer
    useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            if (scrollRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } =
                    scrollRef.current;

                // Si llegamos al final, volver al inicio
                if (scrollLeft + clientWidth >= scrollWidth - 10) {
                    scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    // Hacer scroll a la derecha. Calculamos un aproximado de ancho de tarjeta
                    // para avanzar. Dependiendo de la pantalla puede ser el 100%, 50% o 33% del contenedor.
                    const cardWidth =
                        window.innerWidth < 768
                            ? clientWidth
                            : window.innerWidth < 1024
                              ? clientWidth / 2
                              : clientWidth / 3;

                    scrollRef.current.scrollBy({
                        left: cardWidth,
                        behavior: 'smooth',
                    });
                }
            }
        }, 4000); // 4 segundos

        return () => clearInterval(interval);
    }, [isHovered]);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current;
            const cardWidth =
                window.innerWidth < 768
                    ? clientWidth
                    : window.innerWidth < 1024
                      ? clientWidth / 2
                      : clientWidth / 3;

            const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
            scrollRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className="py-12 px-1 md:px-6 bg-stone-50">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row-reverse gap-6 items-center justify-center mb-6 text-center">
                    <h2 className="text-4xl font-bold text-stone-800  tracking-tight ">
                        Lo que dicen nuestros huéspedes
                    </h2>

                    <div className=" bg-white px-4 py-4 rounded-full shadow-sm border border-stone-200">
                        <FcGoogle className="text-3xl" />
                    </div>
                </div>

                {/* Reviews Slider */}
                <div
                    className="relative group px-4 md:px-10"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Botones de navegación */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 md:p-4 rounded-full shadow-lg border border-stone-200 text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition-all opacity-0 group-hover:opacity-100 hidden md:block"
                        aria-label="Anterior"
                    >
                        <FaChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 md:p-4 rounded-full shadow-lg border border-stone-200 text-stone-600 hover:text-stone-900 hover:bg-stone-50 transition-all opacity-0 group-hover:opacity-100 hidden md:block"
                        aria-label="Siguiente"
                    >
                        <FaChevronRight className="w-5 h-5" />
                    </button>

                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto gap-6 pb-8 pt-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth"
                    >
                        {reviews.map((review, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100 flex flex-col shrink-0 snap-center w-[calc(100%-1rem)] md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] min-h-[320px]"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-full overflow-hidden bg-stone-200 shrink-0 relative shadow-sm">
                                        <Image
                                            src={review.img}
                                            alt={`Foto de perfil de ${review.name}`}
                                            className="w-full h-full object-cover"
                                            width={100}
                                            height={100}
                                        />
                                        <div
                                            className="absolute inset-0 bg-stone-200 text-stone-600 font-bold text-xl items-center justify-center hidden"
                                            style={{ display: 'none' }}
                                        >
                                            {review.name
                                                .charAt(0)
                                                .toUpperCase()}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-stone-800 text-lg leading-tight">
                                            {review.name}
                                        </h3>
                                        <div className="flex items-center gap-1 mt-1 text-yellow-500">
                                            {[...Array(review.stars)].map(
                                                (_, i) => (
                                                    <FaStar
                                                        key={i}
                                                        className="w-4 h-4"
                                                    />
                                                ),
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="grow">
                                    <p className="text-stone-600 leading-relaxed text-base line-clamp-5">
                                        "{review.description}"
                                    </p>
                                </div>

                                <div className="mt-4 flex justify-between items-center pt-4 border-t border-stone-100">
                                    <div className="flex items-center gap-2">
                                        <FcGoogle className="text-xl" />
                                        <span className="text-xs text-stone-500 font-medium">
                                            Reseña de Google
                                        </span>
                                    </div>
                                    <span className="text-xs text-stone-400 font-medium px-2 py-1 bg-stone-50 rounded">
                                        Verificado
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
