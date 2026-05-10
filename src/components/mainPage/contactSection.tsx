import React from 'react';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

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
        <div className="bg-neutral-900 flex items-center justify-center py-16">
            <div className="container mx-4 max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold relative inline-block mb-2">
                        <span className="relative z-10 text-white">
                            Contacto y Ubicación
                        </span>
                        <span className="absolute left-1/2 -bottom-2 w-32 h-0.5 bg-light-green -translate-x-1/2 rounded-full" />
                    </h2>
                    <p className="max-w-2xl mx-auto mt-6 text-zinc-300 text-base md:text-lg">
                        Estamos a tu disposición para cualquier consulta.
                        ¡Esperamos verte pronto!
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-8 bg-neutral-800 p-6 md:p-10 rounded-2xl shadow-xl">
                    {/* Información de Contacto */}
                    <div className="w-full md:w-1/3 flex flex-col justify-center space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="bg-neutral-700 p-3 rounded-full text-light-green shrink-0">
                                <FiMapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-lg mb-1">
                                    Dirección
                                </h3>
                                <p className="text-zinc-300 text-sm md:text-base">
                                    {CONTACT_INFO.address}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-neutral-700 p-3 rounded-full text-light-green shrink-0">
                                <FiPhone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-lg mb-1">
                                    Teléfono
                                </h3>
                                <p className="text-zinc-300 text-sm md:text-base">
                                    {CONTACT_INFO.phone}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-neutral-700 p-3 rounded-full text-light-green shrink-0">
                                <FiMail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-lg mb-1">
                                    Email
                                </h3>
                                <p className="text-zinc-300 text-sm md:text-base">
                                    {CONTACT_INFO.email}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Google Maps Embed */}
                    <div className="w-full md:w-2/3 h-64 md:h-96 rounded-xl overflow-hidden relative border border-neutral-700">
                        <iframe
                            src={CONTACT_INFO.mapEmbedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ubicación en Google Maps"
                            className="absolute inset-0"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
