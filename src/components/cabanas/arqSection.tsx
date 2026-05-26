import Image from 'next/image';

export default function ArqSection() {
    return (
        <section className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
                {/* Columna de imágenes - Collage premium */}
                <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 relative">
                    <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-lg shadow-stone-200/50 group">
                        <Image
                            src="/fotos-drive/22.webp"
                            alt="Exterior de las cabañas"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                    </div>
                    <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-lg shadow-stone-200/50 group mt-8 lg:mt-12">
                        <Image
                            src="/fotos-drive/03.webp"
                            alt="Interior acogedor con hogar a leña"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                    </div>
                </div>

                {/* Columna de Texto */}
                <div className="w-full lg:w-1/2 space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-stone-900 tracking-tight">
                        Diseño Patagónico Integrado al Paisaje
                        <span className="block w-16 h-0.5 bg-dark-green mt-2 rounded-full" />
                    </h2>
                    <p className="text-stone-600 leading-relaxed text-base md:text-lg">
                        Nuestras cabañas se integran en perfecta armonía con el
                        entorno y fueron construidas con materiales
                        tradicionales de la Patagonia Argentina como la piedra
                        volcánica y el ciprés.
                    </p>
                    <p className="text-stone-600 leading-relaxed text-base md:text-lg">
                        Cuentan con un cálido hogar a leña para disfrutar de la
                        magia del fuego, amplios ventanales con vistas
                        majestuosas al Cerro Otto y están rodeadas por bosques
                        naturales y jardines perfumados con flores autóctonas y
                        aire fresco de la cordillera andina.
                    </p>
                </div>
            </div>
        </section>
    );
}
