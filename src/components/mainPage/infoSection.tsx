import Image from 'next/image';
import Link from 'next/link';

const sections = [
    {
        title: 'Cabañas',
        description:
            'Las cabañas están diseñadas para alojar cómodamente de 4 a 6 personas. Están totalmente equipadas con cocina completa, horno, heladera, vajilla, baño privado y artículos de tocador de cortesía.',
        image: '/galery/4.jpg',
    },
    {
        title: 'Ubicación',
        description:
            'Nos encontramos en el Km 6, a pocos metros de la Plaza Nilpi y a solo 600 metros de la playa más cercana sobre el lago. Una ubicación estratégica: a 2 km del Cerro Otto, a 10 minutos del centro cívico y a 20 minutos del Cerro Catedral o el aeropuerto.',
        image: '/galery/2.jpg',
    },
    {
        title: 'Servicios',
        description:
            'Ofrecemos calefacción central, Wi-Fi de alta velocidad, servicio de mucama, ropa blanca de calidad, estacionamiento privado, asador patagónico y parrilla individual. Para los más pequeños, disponemos de practicuna, bañera y sillita de comer.',
        image: '/galery/8.jpg',
    },
];

export default function InfoSections() {
    return (
        <section className="bg-white text-stone-750 flex items-center justify-center py-20 relative overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-cream/20 rounded-full blur-3xl -z-10 pointer-events-none" />
            <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-dark-green/5 rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="container mx-auto px-4 max-w-6xl text-center">
                <div className="px-4 mb-16">
                    <h2 className="text-stone-900 font-bold text-3xl md:text-5xl tracking-tight leading-tight">
                        Bienvenidos a{' '}
                        <span className="font-heading2 italic text-4xl md:text-6xl text-dark-green block sm:inline font-normal">
                            Villa Lucía
                        </span>
                    </h2>
                    <p className="max-w-3xl text-center mx-auto mt-6 text-base md:text-lg text-stone-600 leading-relaxed">
                        Ubicados en el Km 6 de Bariloche,{' '}
                        <span className="font-heading2 italic text-xl text-stone-800">
                            Villa Lucía
                        </span>{' '}
                        es un pequeño complejo de cabañas rústicas rodeado de{' '}
                        <span className="text-dark-green font-medium">
                            naturaleza patagónica
                        </span>
                        . A pocos pasos de Plaza Nilpi y a solo 800 metros del
                        lago, nuestras cabañas de madera y piedra fueron
                        pensadas para que te desconectes del ruido y te{' '}
                        <span className="text-dark-green font-medium">
                            reconectes con el paisaje
                        </span>
                        .
                    </p>
                </div>

                <div className="flex flex-col gap-16 md:gap-24">
                    {sections.map((section, index) => {
                        const isReverse = index === 1;

                        return (
                            <section
                                key={index}
                                className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 max-w-5xl mx-auto"
                            >
                                {/* Título Mobile (Renderizado arriba de la imagen) */}
                                <h2 className="w-full text-2xl font-bold text-center md:hidden relative inline-block text-stone-900 pb-2">
                                    <span className="relative z-10">
                                        {section.title}
                                    </span>
                                    <span className="absolute left-1/2 -bottom-0.5 w-16 h-0.5 bg-dark-green -translate-x-1/2 rounded-full" />
                                </h2>

                                <div
                                    className={`w-full md:w-1/2 ${
                                        isReverse ? 'md:order-2' : ''
                                    }`}
                                >
                                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg shadow-stone-200/60 group">
                                        <Image
                                            src={section.image}
                                            alt={section.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                        />
                                    </div>
                                </div>

                                <div
                                    className={`w-full md:w-1/2 text-center md:text-left ${
                                        isReverse ? 'md:order-1' : ''
                                    }`}
                                >
                                    <h3 className="hidden md:inline-block text-2xl lg:text-3xl font-bold mb-4 text-stone-900 relative tracking-tight">
                                        {section.title}
                                        <span className="block w-16 h-0.5 bg-dark-green mt-2 rounded-full" />
                                    </h3>

                                    <p className="text-base md:text-lg text-stone-600 leading-relaxed">
                                        {section.description}
                                    </p>
                                </div>
                            </section>
                        );
                    })}
                </div>

                <div className="mt-16">
                    <Link
                        href="/cabanas"
                        className="inline-flex items-center justify-center gap-2 border-2 border-dark-green/30 hover:border-dark-green text-dark-green hover:bg-dark-green hover:text-white  py-3.5 px-8 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer capitalize"
                    >
                        Más información
                    </Link>
                </div>
            </div>
        </section>
    );
}
