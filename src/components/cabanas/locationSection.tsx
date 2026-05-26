import { FaWhatsapp } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';

export default function LocationSection({
    whatsappLink,
}: {
    whatsappLink: string;
}) {
    return (
        <section className="py-16 md:py-20 bg-stone-100/70 border-t border-stone-200/60">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Texto Ubicación */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        <span className="uppercase tracking-widest text-xs font-semibold text-dark-green">
                            Entorno estratégico
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
                            Excelente Ubicación en Bariloche
                        </h2>
                        <p className="text-stone-600 leading-relaxed">
                            Las cabañas se encuentran en el tranquilo{' '}
                            <strong>
                                Barrio Residencial La Cascada (Km 6)
                            </strong>
                            , una zona residencial segura, rodeada de bosque y
                            muy bien conectada.
                        </p>
                        <p className="text-stone-600 leading-relaxed">
                            Estamos ubicados estratégicamente a solo 400 metros
                            de la Avenida Bustillo (costanera del lago) y de la
                            Avenida de los Pioneros, las dos arterias
                            principales de Bariloche que te permiten un acceso
                            ágil tanto al centro como a los circuitos
                            turísticos.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            <div className="bg-white p-4 rounded-xl border border-stone-200/60 flex items-start gap-3">
                                <FiMapPin className="text-dark-green mt-1 shrink-0" />
                                <div>
                                    <h5 className="font-bold text-stone-800 text-sm">
                                        Entorno Local
                                    </h5>
                                    <p className="text-stone-600 text-xs mt-1">
                                        A 300 mts: Centro comercial local con
                                        almacén, kiosco, verdulería y panadería.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-stone-200/60 flex items-start gap-3">
                                <FiMapPin className="text-dark-green mt-1 shrink-0" />
                                <div>
                                    <h5 className="font-bold text-stone-800 text-sm">
                                        Servicios Cercanos
                                    </h5>
                                    <p className="text-stone-600 text-xs mt-1">
                                        A 2 km (2000 mts): Supermercado y
                                        Estación de Servicio de combustible.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tiempos de viaje y distancias */}
                    <div className="w-full lg:w-1/2 bg-white p-8 rounded-3xl border border-stone-200/60 shadow-lg shadow-stone-200/30 space-y-6">
                        <h4 className="font-bold text-stone-900 text-xl tracking-tight mb-4">
                            Distancias y Tiempos de Viaje
                        </h4>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                                <span className="text-stone-600 text-sm sm:text-base font-medium">
                                    Centro Cívico (Centro)
                                </span>
                                <span className="bg-dark-green/10 text-dark-green px-3 py-1 rounded-full font-bold text-xs sm:text-sm">
                                    10 Minutos
                                </span>
                            </div>
                            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                                <span className="text-stone-600 text-sm sm:text-base font-medium">
                                    Cerro Catedral (Esquí/Paseos)
                                </span>
                                <span className="bg-dark-green/10 text-dark-green px-3 py-1 rounded-full font-bold text-xs sm:text-sm">
                                    20 Minutos
                                </span>
                            </div>
                            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                                <span className="text-stone-600 text-sm sm:text-base font-medium">
                                    Avenida Bustillo / Pioneros
                                </span>
                                <span className="bg-cream/40 text-stone-700 border border-stone-200 px-3 py-1 rounded-full font-semibold text-xs sm:text-sm">
                                    400 Metros
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-stone-600 text-sm sm:text-base font-medium">
                                    Playa del Lago Nahuel Huapi
                                </span>
                                <span className="bg-cream/40 text-stone-700 border border-stone-200 px-3 py-1 rounded-full font-semibold text-xs sm:text-sm">
                                    600 Metros
                                </span>
                            </div>
                        </div>

                        <div className="bg-dark-green text-white p-6 rounded-2xl mt-4 flex items-center justify-between gap-4">
                            <div className="space-y-1">
                                <h5 className="font-bold text-sm sm:text-base">
                                    ¿Querés reservar o consultar?
                                </h5>
                                <p className="text-white/80 text-xs sm:text-sm">
                                    Escribinos y te asesoramos al instante.
                                </p>
                            </div>
                            <a
                                href={whatsappLink}
                                className="bg-white text-dark-green hover:bg-stone-50 font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-1.5 shrink-0 shadow-sm transition-all"
                            >
                                <FaWhatsapp size={16} />
                                Consultar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
