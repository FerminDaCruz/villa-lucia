import Header from '@/components/layout/header';
import ImageSlider from '@/components/mainPage/imageSlider';
import InfoSections from '@/components/mainPage/infoSection';
import ContactSection from '@/components/mainPage/contactSection';
import Image from 'next/image';

export default function Home() {
    return (
        <div className="relative">
            <div className="relative h-screen">
                <Image
                    src="/hero/1-ia-1920x1200.webp"
                    alt="Background"
                    fill
                    priority
                    quality={100}
                    sizes="100vw"
                    className="object-cover hidden md:block"
                />
                <Image
                    src="/hero/1-ia-884x1572.webp"
                    alt="Background"
                    fill
                    priority
                    quality={100}
                    sizes="100vw"
                    className="object-cover block md:hidden"
                />
                <div className="absolute inset-0 bg-black/40" />

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                    {/* Logo grande en el medio del Hero + boton */}
                    <p className="uppercase tracking-widest text-sm mb-5 mx-5">
                        Bariloche, Patagonia Argentina
                    </p>
                    <Image
                        src="/logo/logo-blanco-sinbg-removebg-preview.png"
                        width={500}
                        height={500}
                        alt="Villa Lucia Logo"
                        className="w-64 md:w-96 h-auto mb-10"
                    />
                    <a
                        href="#"
                        className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-dark-green transition-all duration-200"
                    >
                        Consultar disponibilidad
                    </a>
                </div>
            </div>
            <InfoSections />
            <ImageSlider />
            <ContactSection />
        </div>
    );
}
