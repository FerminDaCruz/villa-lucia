'use client';

import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQ = [
    {
        p: 'Cuál es el horario de check-in y check-out',
        r: 'Check-in de 14:00 a 22:00 y Check-out hasta las 10:00. Si quieres hacer el check-in o el check-out antes o después de lo habitual, puedes hacer una petición especial en el momento de reservar. Ten en cuenta que las peticiones especiales no se pueden garantizar.',
    },
    {
        p: 'Las cabañas tienen wifi',
        r: 'Si, todas las cabañas cuentan con wifi gratuito y TV de pantalla plana por cable.',
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
        r: 'Si, todas las cabañas cuentan con baño privado.',
    },
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 bg-neutral-900 ">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold relative inline-block mb-10">
                        <span className="relative z-10 text-white">
                            Preguntas Frecuentes
                        </span>
                        <span className="absolute left-1/2 -bottom-2 w-32 h-0.5 bg-light-green -translate-x-1/2 rounded-full" />
                    </h2>
                </div>

                <div className="space-y-4">
                    {FAQ.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full px-6 py-4 flex justify-between items-center bg-neutral-800 hover:bg-neutral-700 transition-colors"
                            >
                                <h3 className="text-left font-medium text-lg ">
                                    ¿{faq.p}?
                                </h3>
                                <span className="text-light-green ml-4 flex-shrink-0">
                                    {openIndex === index ? (
                                        <FiChevronUp size={24} />
                                    ) : (
                                        <FiChevronDown size={24} />
                                    )}
                                </span>
                            </button>
                            {openIndex === index && (
                                <div className="px-6 py-4 bg-neutral-800 text-zinc-300 leading-relaxed">
                                    <p>{faq.r}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
