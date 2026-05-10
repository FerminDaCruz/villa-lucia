import Image from 'next/image';

const sections = [
    {
        title: 'Cabañas',
        description:
            'Las cabaña están diseñada para 4 a 6 personas. Totalmente equipadas con nevera, horno, baño privado y artículos de aseo gratuitos.',
        image: '/galery/4.jpg',
    },
    {
        title: 'Ubicación',
        description:
            'Se encuentran en el km 6. a metros de Plaza Nilpi, a 600m de la playa mas cercana, a 2km del Cerro Otto, a 10 minutos del centro y a 20 del aeropuerto o el Cerro Catedral.',
        image: '/galery/2.jpg',
    },
    {
        title: 'Servicios',
        description:
            'Las Cabañas cuentan con calefacción central, teléfono, Wi-Fi, servicio de mucama y ropa blanca, estacionamiento, asador patagónico, parrilla individual. Para los más pequeños, practicuna, bañera y sillita para comer.',
        image: '/galery/8.jpg',
    },
];

export default function InfoSections() {
    return (
        <div className=" bg-neutral-900 flex items-center justify-center py-16">
            <div className="container mx-4 text-center">
                <div className="px-4">
                    <h2 className=" text-3xl md:text-4xl">
                        Bienvenidos a{' '}
                        <span className="font-heading2 italic text-4xl md:text-5xl">
                            Villa Lucía
                        </span>
                    </h2>
                    <p className="max-w-200 text-center mx-auto my-4 text-zinc-300 text-base md:text-lg leading-relaxed">
                        Ubicados en el Km 6 de Bariloche,{' '}
                        <span className="font-heading2 italic text-xl">
                            Villa Lucía
                        </span>{' '}
                        es un pequeño complejo de cabañas rústicas rodeado de{' '}
                        <span className="text-light-green">
                            naturaleza patagónica
                        </span>
                        . A pocos pasos de plaza Nilpi y a solo 800 metros del
                        lago, nuestras cabañas de madera y piedra fueron
                        pensadas para que te desconectes del ruido y te{' '}
                        <span className="text-light-green">
                            reconectes con el paisaje
                        </span>
                        .
                    </p>
                </div>

                <div className="flex flex-col">
                    {sections.map((section, index) => {
                        const isReverse = index === 1;

                        return (
                            <section
                                key={index}
                                className="flex flex-col md:flex-row items-start gap-6 py-8 px-4 md:px-12 max-w-6xl mx-auto"
                            >
                                <h2 className="w-full text-2xl md:text-4xl font-semibold text-center md:hidden relative inline-block mb-2">
                                    <span className="relative z-10">
                                        {section.title}
                                    </span>
                                    <span className="absolute left-1/2 -bottom-2 w-32 h-0.5 bg-light-green -translate-x-1/2 rounded-full" />
                                </h2>

                                <div
                                    className={`w-full md:w-1/2 ${
                                        isReverse ? 'md:order-2' : ''
                                    }`}
                                >
                                    <div className="relative aspect-video w-full h-auto">
                                        <Image
                                            src={section.image}
                                            alt={section.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover rounded-2xl "
                                        />
                                    </div>
                                </div>

                                <div
                                    className={`w-full md:w-1/2 text-center md:text-left ${
                                        isReverse ? 'md:order-1' : ''
                                    }`}
                                >
                                    <h2 className="hidden md:inline-block text-2xl lg:text-3xl font-semibold mb-6 relative ">
                                        <span className="relative z-10">
                                            {section.title}
                                        </span>
                                        <span className="absolute left-0 -bottom-2 w-32 h-1 bg-light-green rounded-full" />
                                    </h2>

                                    <p className="text-base md:text-md lg:text-lg text-zinc-300 leading-relaxed">
                                        {section.description}
                                    </p>
                                </div>
                            </section>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
