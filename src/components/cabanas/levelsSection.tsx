import Image from 'next/image';
import { FiCheck, FiHome, FiWind } from 'react-icons/fi';

export default function LevelsSection() {
    return (
        <section className="py-16 md:py-20 bg-white border-y border-stone-200/60">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
                        Distribución en{' '}
                        <span className="font-heading2 italic text-dark-green text-4xl md:text-5xl font-normal">
                            Dos Niveles
                        </span>
                    </h2>
                    <p className="text-stone-600 mt-4 max-w-xl mx-auto">
                        Cada cabaña cuenta con 90 m² cubiertos distribuidos
                        estratégicamente para separar la zona social de la de
                        descanso.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Planta Alta */}
                    <div className="bg-stone-50 p-8 rounded-3xl border border-stone-200/60 shadow-md shadow-stone-200/20 flex flex-col justify-between hover:shadow-lg transition-all duration-300 ">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-dark-green/10 text-dark-green p-3 rounded-2xl">
                                    <FiHome className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                                        Nivel Superior
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-bold text-stone-900">
                                        Planta Alta
                                    </h3>
                                </div>
                            </div>
                            <p className="text-stone-600 mb-6 leading-relaxed">
                                Un espacio amplio, luminoso e integrado,
                                diseñado para el encuentro y el disfrute diario,
                                con techos altos de madera y vistas al bosque.
                            </p>
                            <ul className="space-y-3.5 text-stone-700">
                                <li className="flex items-start gap-3">
                                    <FiCheck className="text-dark-green mt-1 flex-shrink-0" />
                                    <span>
                                        <strong>Living Comedor:</strong>{' '}
                                        Confortable estar con hogar a leña
                                        tradicional, TV de 25" y reproductor de
                                        DVD.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FiCheck className="text-dark-green mt-1 flex-shrink-0" />
                                    <span>
                                        <strong>Cocina integrada:</strong>{' '}
                                        Totalmente equipada con horno, heladera
                                        con freezer, microondas, cafetera,
                                        tostadora y vajilla completa.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FiCheck className="text-dark-green mt-1 flex-shrink-0" />
                                    <span>
                                        <strong>Estar / Escritorio:</strong>{' '}
                                        Espacio de trabajo o relax equipado con
                                        un diván (opción para 2 huéspedes
                                        adicionales).
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FiCheck className="text-dark-green mt-1 flex-shrink-0" />
                                    <span>
                                        <strong>Toilette:</strong> Baño social
                                        toilette completo equipado con ducha.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FiCheck className="text-dark-green mt-1 flex-shrink-0" />
                                    <span>
                                        <strong>Bodega Personal:</strong> Un
                                        toque especial para disfrutar de vinos
                                        seleccionados.
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative h-48 w-full rounded-2xl overflow-hidden mt-8 group">
                            <Image
                                src="/fotos-drive/09.webp"
                                alt="Planta Alta interior"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            />
                        </div>
                    </div>

                    {/* Planta Baja */}
                    <div className="bg-stone-50 p-8 rounded-3xl border border-stone-200/60 shadow-md shadow-stone-200/20 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-dark-green/10 text-dark-green p-3 rounded-2xl">
                                    <FiWind className="w-6 h-6" />
                                </div>
                                <div>
                                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                                        Nivel Inferior
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-bold text-stone-900">
                                        Planta Baja
                                    </h3>
                                </div>
                            </div>
                            <p className="text-stone-600 mb-6 leading-relaxed">
                                La planta de descanso, fresca en verano y cálida
                                en invierno gracias a la calefacción central,
                                garantizando silencio absoluto.
                            </p>
                            <ul className="space-y-3.5 text-stone-700">
                                <li className="flex items-start gap-3">
                                    <FiCheck className="text-dark-green mt-1 flex-shrink-0" />
                                    <span>
                                        <strong>Dos Dormitorios:</strong>{' '}
                                        Equipados con sommier matrimonial King
                                        Size (2x2m) o sommiers individuales
                                        según preferencia.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FiCheck className="text-dark-green mt-1 flex-shrink-0" />
                                    <span>
                                        <strong>
                                            Equipamiento en cuartos:
                                        </strong>{' '}
                                        Caja de seguridad digital en habitación
                                        y TV de 21".
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FiCheck className="text-dark-green mt-1 flex-shrink-0" />
                                    <span>
                                        <strong>Baño Principal:</strong> Baño
                                        grande completo con bañera, secador de
                                        cabello y mesada rústica artesanal de
                                        ciprés.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FiCheck className="text-dark-green mt-1 flex-shrink-0" />
                                    <span>
                                        <strong>Hall distribuidor:</strong>{' '}
                                        Cuenta con un práctico espacio diseñado
                                        para el guardado de valijas y equipaje.
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative h-48 w-full rounded-2xl overflow-hidden mt-8 group">
                            <Image
                                src="/fotos-drive/11.webp"
                                alt="Dormitorio con sommier"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
