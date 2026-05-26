import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import {
    FiMapPin,
    FiWifi,
    FiTv,
    FiHome,
    FiLock,
    FiCoffee,
    FiCheck,
    FiInfo,
    FiCalendar,
    FiWind,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import ArqSection from '@/components/cabanas/arqSection';
import LevelsSection from '@/components/cabanas/levelsSection';
import ServicesSection from '@/components/cabanas/servicesComponents';
import LocationSection from '@/components/cabanas/locationSection';
import CtaSection from '@/components/cabanas/ctaSection';

export const metadata: Metadata = {
    title: 'Cabañas y Equipamiento',
    description:
        'Conocé nuestras tres cabañas de 90 m2 en Bariloche, totalmente equipadas en dos niveles con hogar a leña, cocina completa y vista al Cerro Otto.',
};

export default function CabanasPage() {
    const phone = '5492944588900';
    const message = 'Hola, quisiera consultar disponibilidad para reservar.';
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
        message,
    )}`;

    return (
        <div className="bg-stone-50 min-h-screen relative overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cream/35 rounded-full blur-3xl -z-10 pointer-events-none" />
            <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-dark-green/5 rounded-full blur-3xl -z-10 pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-cream/20 rounded-full blur-3xl -z-10 pointer-events-none" />

            {/* HERO SECTION DE LA PÁGINA */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-stone-250/40 ">
                <Image
                    src="/hero/1-ia-1920x1200.webp"
                    alt="Background"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover block"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
                    <span className="uppercase tracking-widest text-xs  text-white mb-3 block">
                        Tu hogar en la Patagonia
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
                        Nuestras{' '}
                        <span className="font-heading2 italic text-light-green text-5xl md:text-7xl font-normal block sm:inline">
                            Cabañas
                        </span>
                    </h1>
                    <p className="text-stone-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        El complejo está compuesto por tres cabañas gemelas de
                        90 m² cada una. Diseñadas en dos niveles para maximizar
                        el confort y la privacidad, con capacidad para alojar
                        cómodamente de 4 a 6 personas.
                    </p>
                </div>
            </section>

            <ArqSection />

            {/* SECCIÓN SERVICIOS */}
            <ServicesSection />

            {/* SECCIÓN EL COMPLEJO: DOS NIVELES */}
            <LevelsSection />

            {/* SECCIÓN UBICACIÓN EXCELENTE */}
            <LocationSection whatsappLink={whatsappLink} />

            {/* SECCIÓN CALL TO ACTION FINAL */}
            <CtaSection whatsappLink={whatsappLink} />
        </div>
    );
}
