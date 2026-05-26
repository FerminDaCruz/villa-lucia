import Link from 'next/link';
import React from 'react';
import { FiMapPin, FiPhone, FiMail, FiCalendar } from 'react-icons/fi';

// ==========================================
// SECCIÓN DE CONFIGURACIÓN DE CONTACTO
// Reemplaza los siguientes valores con la información real
// ==========================================
const CONTACT_INFO = {
    // 1. Dirección física
    address: 'Av. de los Pioneros Km 6, San Carlos de Bariloche, Río Negro',

    // 2. Número de teléfono (con código de área)
    phone: '(0294) 15458-8900 / 15458-6688',

    // 3. Correo electrónico
    email: 'reservas@villalucia.com.ar',

    // 4. Enlace del mapa de Google Maps (URL del src dentro del iframe de "Insertar mapa")
    // Para obtenerlo: Busca tu ubicación en Google Maps > Compartir > Insertar un mapa > Copia solo la URL dentro de src="..."
    mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d434.0470753546117!2d-71.3802764765521!3d-41.124289147819546!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7a765cd21315%3A0x2e757f3c558d183a!2zQ2FiYcOxYXMgVmlsbGEgTHVjw61h!5e0!3m2!1ses!2sus!4v1778041796911!5m2!1ses!2sus',
};

export default function ContactSection() {
    return (
        <section className="bg-stone-50 py-20 flex items-center justify-center relative overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-cream/30 rounded-full blur-3xl -z-10 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-dark-green/5 rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="container mx-4 max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-stone-900 text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Contacto y{' '}
                        <span className="font-heading2 italic text-dark-green text-4xl md:text-6xl font-normal block sm:inline">
                            Ubicación
                        </span>
                    </h2>
                    <p className="max-w-xl mx-auto text-stone-600 text-base md:text-lg leading-relaxed">
                        Estamos a tu disposición para cualquier consulta.
                        ¡Esperamos verte pronto en la Patagonia!
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-8 lg:gap-12 bg-white p-6 md:p-10 lg:p-12 rounded-3xl border border-stone-200/50 shadow-xl shadow-stone-200/30">
                    {/* Información de Contacto */}
                    <div className="w-full grow md:w-2/5 flex flex-col justify-between space-y-8">
                        <div className="space-y-8">
                            {/* Dirección */}
                            <div className="flex items-start gap-4 group">
                                <div className="bg-dark-green/10 text-dark-green p-3.5 rounded-2xl shrink-0 transition-all duration-300 group-hover:bg-dark-green group-hover:text-white shadow-sm">
                                    <FiMapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-stone-800 text-lg mb-1 tracking-wide">
                                        Dirección
                                    </h3>
                                    <p className="text-stone-600 text-sm md:text-base leading-relaxed">
                                        {CONTACT_INFO.address}
                                    </p>
                                </div>
                            </div>

                            {/* Teléfono */}
                            <div className="flex items-start gap-4 group">
                                <div className="bg-dark-green/10 text-dark-green p-3.5 rounded-2xl shrink-0 transition-all duration-300 group-hover:bg-dark-green group-hover:text-white shadow-sm">
                                    <FiPhone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-stone-800 text-lg mb-1 tracking-wide">
                                        Teléfono
                                    </h3>
                                    <p className="text-stone-600 text-sm md:text-base leading-relaxed">
                                        {CONTACT_INFO.phone}
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4 group">
                                <div className="bg-dark-green/10 text-dark-green p-3.5 rounded-2xl shrink-0 transition-all duration-300 group-hover:bg-dark-green group-hover:text-white shadow-sm">
                                    <FiMail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-stone-800 text-lg mb-1 tracking-wide">
                                        Email
                                    </h3>
                                    <p className="text-stone-600 text-sm md:text-base leading-relaxed break-all">
                                        {CONTACT_INFO.email}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Botón Desktop */}
                        <div className="hidden md:block pt-6">
                            <Link
                                href="/contacto"
                                className="inline-flex items-center justify-center gap-2 bg-dark-green hover:bg-dark-green/90 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 w-full text-center"
                            >
                                <FiCalendar className="w-5 h-5" />
                                Reservar ahora
                            </Link>
                        </div>
                    </div>

                    {/* Google Maps Embed */}
                    <div className="w-full md:w-3/5 h-72 md:h-[420px] rounded-2xl overflow-hidden relative border border-stone-200/80 shadow-md group/map">
                        <iframe
                            src={CONTACT_INFO.mapEmbedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ubicación en Google Maps"
                            className="absolute inset-0 transition-all duration-500 group-hover/map:scale-[1.02]"
                        ></iframe>
                    </div>

                    {/* Botón Mobile */}
                    <div className="md:hidden w-full">
                        <Link
                            href="/contacto"
                            className="inline-flex items-center justify-center gap-2 bg-dark-green hover:bg-dark-green/90 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg w-full text-center"
                        >
                            <FiCalendar className="w-5 h-5" />
                            Reservar ahora
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
