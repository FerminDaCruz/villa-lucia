'use client';

import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const FAQ = [
    {
        p: 'Cuál es el horario de check-in y check-out',
        r: 'Check-in de 14:00 a 22:00 y Check-out hasta las 10:00. Si quieres hacer el check-in o el check-out antes o después de lo habitual, puedes hacer una petición especial en el momento de reservar. Ten en cuenta que las peticiones especiales no se pueden garantizar.',
    },
    {
        p: 'Las cabañas tienen wifi',
        r: 'Sí, todas las cabañas cuentan con wifi gratuito y TV de pantalla plana por cable.',
    },
    {
        p: 'Hay estacionamiento',
        r: 'Hay parking gratis público en las inmediaciones. No se puede reservar.',
    },
    {
        p: 'Admiten mascotas',
        r: 'Se admiten bajo petición. Se pueden aplicar suplementos.',
    },
    {
        p: 'Hay restaurante',
        r: 'No, no hay restaurante dentro del alojamiento.',
    },
    {
        p: 'Hay habitaciones con baño privado',
        r: 'Sí, todas las cabañas cuentan con baño privado.',
    },
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-stone-50 relative overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-cream/30 rounded-full blur-3xl -z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-dark-green/5 rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-stone-900 text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Preguntas{' '}
                        <span className="font-heading2 italic text-dark-green text-4xl md:text-6xl font-normal block sm:inline">
                            Frecuentes
                        </span>
                    </h2>
                    <p className="max-w-xl mx-auto text-stone-600 text-base md:text-lg leading-relaxed">
                        Todo lo que necesitas saber antes de tu estadía en nuestras cabañas.
                    </p>
                </div>

                <div className="space-y-4">
                    {FAQ.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                                    isOpen
                                        ? 'border-dark-green bg-white shadow-lg shadow-stone-200/50'
                                        : 'border-stone-200/60 bg-white hover:border-stone-300 hover:shadow-sm'
                                }`}
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full px-6 py-5 flex justify-between items-center text-left transition-colors cursor-pointer"
                                >
                                    <h3
                                        className={`font-semibold text-base md:text-lg transition-colors duration-300 ${
                                            isOpen
                                                ? 'text-dark-green font-medium'
                                                : 'text-stone-800'
                                        }`}
                                    >
                                        ¿{faq.p}?
                                    </h3>
                                    <span
                                        className={`ml-4 flex-shrink-0 transition-transform duration-300 ${
                                            isOpen
                                                ? 'text-dark-green rotate-180'
                                                : 'text-stone-400'
                                        }`}
                                    >
                                        <FiChevronDown size={22} />
                                    </span>
                                </button>
                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                        isOpen
                                            ? 'max-h-96 opacity-100'
                                            : 'max-h-0 opacity-0 pointer-events-none'
                                    }`}
                                >
                                    <div className="px-6 pb-6 text-stone-600 leading-relaxed text-sm md:text-base border-t border-stone-100 pt-4">
                                        <p>{faq.r}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
