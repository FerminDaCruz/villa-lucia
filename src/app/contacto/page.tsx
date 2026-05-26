import ReservationForm from '@/components/shared/reservationForm';
import Image from 'next/image';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const CONTACT_INFO = {
    // 1. Dirección física
    address: 'Av. de los Pioneros Km 6, San Carlos de Bariloche, Río Negro',

    // 2. Número de teléfono (con código de área)
    phone: '(0294) 15458-8900 / 15458-6688',

    // 3. Correo electrónico
    email: 'reservas@villalucia.com.ar',

    // 4. Enlace del mapa de Google Maps (URL del src dentro del iframe de "Insertar mapa")
    mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d434.0470753546117!2d-71.3802764765521!3d-41.124289147819546!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7a765cd21315%3A0x2e757f3c558d183a!2zQ2FiYcOxYXMgVmlsbGEgTHVjw61h!5e0!3m2!1ses!2sus!4v1778041796911!5m2!1ses!2sus',
};

export default function ContactoPage() {
    return (
        <div className="bg-stone-50 min-h-screen relative overflow-hidden">
            {/* HERO SECTION */}
            <section className="pt-32 pb-12 md:pt-40 md:pb-16 border-b border-stone-250/40  relative">
                <Image
                    src="/hero/1-ia-1920x1200.webp"
                    alt="Background"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover block"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
                    <span className="uppercase tracking-widest text-xs text-white mb-3 block">
                        Comunicate con nosotros
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
                        Reservas y{' '}
                        <span className="font-heading2 italic text-light-green text-5xl md:text-7xl font-normal block sm:inline">
                            Contacto
                        </span>
                    </h1>
                    <p className="text-stone-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        Consultá disponibilidad para tu estadía o envianos tu
                        consulta. Estamos a tu disposición para ayudarte a
                        planificar tus vacaciones en Bariloche.
                    </p>
                </div>
            </section>

            {/* SECCIÓN PRINCIPAL: FORMULARIO Y CONTACTO */}
            <section className="py-12 pb-24 max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                    {/* Columna Izquierda: Formulario de Reserva */}
                    <div className="flex flex-col justify-start">
                        <ReservationForm />
                    </div>

                    {/* Columna Derecha: Datos de Contacto y Mapa */}
                    <div className="bg-white p-6 md:p-8 rounded-3xl border border-stone-200/60 shadow-xl shadow-stone-200/20 flex flex-col justify-between">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-stone-900 tracking-tight mb-6">
                                Información de Contacto
                                <span className="block w-12 h-0.5 bg-dark-green mt-2 rounded-full" />
                            </h3>

                            {/* Dirección */}
                            <div className="flex items-start gap-4 group">
                                <div className="bg-dark-green/10 text-dark-green p-3 rounded-2xl shrink-0 transition-all duration-300 group-hover:bg-dark-green group-hover:text-white shadow-sm">
                                    <FiMapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-stone-800 text-base mb-0.5 tracking-wide">
                                        Dirección
                                    </h4>
                                    <p className="text-stone-600 text-sm leading-relaxed">
                                        {CONTACT_INFO.address}
                                    </p>
                                </div>
                            </div>

                            {/* Teléfono */}
                            <div className="flex items-start gap-4 group">
                                <div className="bg-dark-green/10 text-dark-green p-3 rounded-2xl shrink-0 transition-all duration-300 group-hover:bg-dark-green group-hover:text-white shadow-sm">
                                    <FiPhone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-stone-800 text-base mb-0.5 tracking-wide">
                                        Teléfono
                                    </h4>
                                    <p className="text-stone-600 text-sm leading-relaxed">
                                        {CONTACT_INFO.phone}
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4 group">
                                <div className="bg-dark-green/10 text-dark-green p-3 rounded-2xl shrink-0 transition-all duration-300 group-hover:bg-dark-green group-hover:text-white shadow-sm">
                                    <FiMail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-stone-800 text-base mb-0.5 tracking-wide">
                                        Email
                                    </h4>
                                    <p className="text-stone-600 text-sm leading-relaxed break-all">
                                        {CONTACT_INFO.email}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Google Maps Embed */}
                        <div className="w-full h-56 md:h-64 rounded-2xl overflow-hidden relative border border-stone-200/80 shadow-md group/map mt-8">
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
                    </div>
                </div>
            </section>
        </div>
    );
}
