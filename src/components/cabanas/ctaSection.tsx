import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { FiCalendar } from 'react-icons/fi';

export default function CtaSection({ whatsappLink }: { whatsappLink: string }) {
    return (
        <section className="py-20 bg-gradient-to-t from-stone-100/50 to-stone-50 relative overflow-hidden text-center">
            <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
                <span className="uppercase tracking-widest text-xs font-semibold text-dark-green">
                    Viví Bariloche
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
                    Disfrutá una estadía mágica rodeado de{' '}
                    <span className="font-heading2 italic text-dark-green text-4xl md:text-6xl font-normal block sm:inline">
                        naturaleza
                    </span>
                </h2>
                <p className="text-stone-600 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
                    Nuestras cabañas te esperan todo el año para brindarte
                    calidez, confort y tranquilidad en tu viaje a Bariloche.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 max-w-md mx-auto">
                    <Link
                        href="/contacto"
                        className="inline-flex items-center justify-center gap-2 border-2 border-stone-300 hover:border-dark-green bg-white hover:bg-dark-green hover:text-white text-stone-700 font-bold py-3.5 px-8 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md w-full text-center
                        
                        "
                    >
                        <FiCalendar className="w-6 h-6 md:w-10 md:h-10" />
                        Reservar Ahora
                    </Link>
                    <a
                        href={whatsappLink}
                        className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-[#25d366]/90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 w-full text-center"
                    >
                        <FaWhatsapp className="w-6 h-6 md:w-10 md:h-10" />
                        Consultar WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}
