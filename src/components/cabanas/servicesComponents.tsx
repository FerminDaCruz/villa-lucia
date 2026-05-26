import {
    FiWifi,
    FiHome,
    FiLock,
    FiCoffee,
    FiInfo,
    FiWind,
} from 'react-icons/fi';

export default function ServicesSection() {
    return (
        <section className="py-16 md:py-24 max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
                <span className="uppercase tracking-widest text-xs font-semibold text-dark-green mb-3 block">
                    Todo incluido para tu confort
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-stone-900 tracking-tight">
                    Servicios &{' '}
                    <span className="font-heading2 italic text-dark-green text-4xl md:text-6xl font-normal">
                        Equipamiento
                    </span>
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Servicio 1: Calefacción y Confort */}
                <div className="bg-white p-6 rounded-2xl border border-stone-200/50 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <FiWind className="w-8 h-8 text-dark-green mb-4" />
                    <h4 className="font-bold text-lg text-stone-800 mb-2">
                        Climatización & Energía
                    </h4>
                    <p className="text-stone-600 text-sm leading-relaxed">
                        Calefacción central regulable por radiadores, hogar a
                        leña tradicional en el living y grupo electrógeno propio
                        para el complejo.
                    </p>
                </div>

                {/* Servicio 2: Conectividad */}
                <div className="bg-white p-6 rounded-2xl border border-stone-200/50 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <FiWifi className="w-8 h-8 text-dark-green mb-4" />
                    <h4 className="font-bold text-lg text-stone-800 mb-2">
                        Conexión & Llamadas
                    </h4>
                    <p className="text-stone-600 text-sm leading-relaxed">
                        Internet Wi-Fi de alta velocidad en todo el complejo y
                        teléfono de línea con llamadas locales sin cargo para
                        reservas y paseos.
                    </p>
                </div>

                {/* Servicio 3: Servicio de Limpieza */}
                <div className="bg-white p-6 rounded-2xl border border-stone-200/50 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <FiInfo className="w-8 h-8 text-dark-green mb-4" />
                    <h4 className="font-bold text-lg text-stone-800 mb-2">
                        Limpieza & Blanco
                    </h4>
                    <p className="text-stone-600 text-sm leading-relaxed">
                        Servicio de mucama diario y provisión de ropa blanca de
                        excelente calidad (sábanas y toallas) renovadas
                        periódicamente.
                    </p>
                </div>

                {/* Servicio 4: Parrilla y Asador */}
                <div className="bg-white p-6 rounded-2xl border border-stone-200/50 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <FiHome className="w-8 h-8 text-dark-green mb-4" />
                    <h4 className="font-bold text-lg text-stone-800  mb-2">
                        Parrilla & Asador
                    </h4>
                    <p className="text-stone-600 text-sm leading-relaxed">
                        Cada cabaña posee su parrilla individual exterior y el
                        complejo cuenta con un asador patagónico para cocinar al
                        fuego.
                    </p>
                </div>

                {/* Servicio 5: Seguridad */}
                <div className="bg-white p-6 rounded-2xl border border-stone-200/50 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <FiLock className="w-8 h-8 text-dark-green mb-4" />
                    <h4 className="font-bold text-lg text-stone-800  mb-2">
                        Seguridad & Parking
                    </h4>
                    <p className="text-stone-600 text-sm leading-relaxed">
                        Caja de seguridad digital en la habitación matrimonial y
                        espacio de estacionamiento privado dentro del predio de
                        las cabañas.
                    </p>
                </div>

                {/* Servicio 6: Familias */}
                <div className="bg-white p-6 rounded-2xl border border-stone-200/50 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <FiCoffee className="w-8 h-8 text-dark-green mb-4" />
                    <h4 className="font-bold text-lg text-stone-800  mb-2">
                        Equipamiento para Bebés
                    </h4>
                    <p className="text-stone-600 text-sm leading-relaxed">
                        Pensado para los más pequeños: disponemos de practicuna,
                        bañerita infantil y sillita para comer (bajo petición
                        previa).
                    </p>
                </div>
            </div>

            {/* Aclaración de Desayuno */}
            <div className="mt-12 bg-cream/30 border border-stone-200/60 rounded-2xl p-6 flex items-start gap-4 max-w-3xl mx-auto">
                <FiInfo className="w-6 h-6 text-dark-green shrink-0 mt-0.5" />
                <div>
                    <h5 className="font-bold text-stone-800  text-sm md:text-base mb-1">
                        Información Importante sobre Desayuno
                    </h5>
                    <p className="text-stone-600 text-sm leading-relaxed">
                        Para priorizar la total independencia y privacidad de
                        nuestros huéspedes, nuestras cabañas cuentan con cocina
                        completa equipada para preparar tus comidas y{' '}
                        <strong>no servimos desayuno en el complejo</strong>. A
                        solo 300 metros contás con comercios locales
                        abastecidos.
                    </p>
                </div>
            </div>
        </section>
    );
}
