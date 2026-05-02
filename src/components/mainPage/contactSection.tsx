import React from 'react';

// ==========================================
// SECCIÓN DE CONFIGURACIÓN DE CONTACTO
// Reemplaza los siguientes valores con la información real
// ==========================================
const CONTACT_INFO = {
    // 1. Dirección física
    address: 'Av. de los Pioneros Km 6, San Carlos de Bariloche, Río Negro', 
    
    // 2. Número de teléfono (con código de área)
    phone: '+54 9 294 412-3456', 
    
    // 3. Correo electrónico
    email: 'contacto@villalucia.com.ar', 
    
    // 4. Enlace del mapa de Google Maps (URL del src dentro del iframe de "Insertar mapa")
    // Para obtenerlo: Busca tu ubicación en Google Maps > Compartir > Insertar un mapa > Copia solo la URL dentro de src="..."
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24024.181297011924!2d-71.37895055!3d-41.13411855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7b1520c860e5%3A0x8210be2bb071e621!2sSan%20Carlos%20de%20Bariloche%2C%20R%C3%ADo%20Negro!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar',
};

export default function ContactSection() {
    return (
        <div className="bg-neutral-900 flex items-center justify-center py-16">
            <div className="container mx-4 max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold relative inline-block mb-2">
                        <span className="relative z-10 text-white">Contacto y Ubicación</span>
                        <span className="absolute left-1/2 -bottom-2 w-32 h-0.5 bg-light-green -translate-x-1/2 rounded-full" />
                    </h2>
                    <p className="max-w-2xl mx-auto mt-6 text-zinc-300 text-base md:text-lg">
                        Estamos a tu disposición para cualquier consulta. ¡Esperamos verte pronto!
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-8 bg-neutral-800 p-6 md:p-10 rounded-2xl shadow-xl">
                    {/* Información de Contacto */}
                    <div className="w-full md:w-1/3 flex flex-col justify-center space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="bg-neutral-700 p-3 rounded-full text-light-green shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-lg mb-1">Dirección</h3>
                                <p className="text-zinc-300 text-sm md:text-base">{CONTACT_INFO.address}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-neutral-700 p-3 rounded-full text-light-green shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.23-3.93-6.826-6.826l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-lg mb-1">Teléfono</h3>
                                <p className="text-zinc-300 text-sm md:text-base">{CONTACT_INFO.phone}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-neutral-700 p-3 rounded-full text-light-green shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-lg mb-1">Email</h3>
                                <p className="text-zinc-300 text-sm md:text-base">{CONTACT_INFO.email}</p>
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
