import Link from 'next/link';
import {
    FiPhone,
    FiMail,
    FiMapPin,
    FiInstagram,
    FiFacebook,
} from 'react-icons/fi';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-stone-100 text-stone-850 pt-16 pb-8 border-t border-stone-200/80 relative overflow-hidden">
            {/* Elemento decorativo de fondo */}
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-dark-green/5 rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Logo y descripción */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <Image
                            src="/fotos-drive/logo-1.png"
                            alt="Villa Lucia"
                            width={200}
                            height={200}
                            className="w-40 mb-4 h-auto"
                        />
                        <p className="text-stone-600 text-sm leading-relaxed max-w-xs">
                            Un refugio de paz en el corazón de Bariloche.
                            Disfrutá de la naturaleza patagónica con todas las
                            comodidades.
                        </p>
                    </div>

                    {/* Enlaces Rápidos */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-lg font-heading font-semibold text-stone-900 mb-6 uppercase tracking-wider">
                            Enlaces
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/"
                                    className="text-stone-600 hover:text-dark-green transition-colors duration-200"
                                >
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/cabanas"
                                    className="text-stone-600 hover:text-dark-green transition-colors duration-200"
                                >
                                    Cabañas
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contacto"
                                    className="text-stone-600 hover:text-dark-green transition-colors duration-200"
                                >
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-lg font-heading font-semibold text-stone-900 mb-6 uppercase tracking-wider">
                            Contacto
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <FiMapPin className="mt-1 shrink-0 text-dark-green" />
                                <span className="text-stone-600 text-sm">
                                    Villa Lucia, Bariloche, Patagonia Argentina
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FiPhone className="shrink-0 text-dark-green" />
                                <span className="text-stone-600 text-sm">
                                    +54 9 294 458 8900
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FiMail className="shrink-0 text-dark-green" />
                                <span className="text-stone-600 text-sm">
                                    info@villalucia.com
                                </span>
                            </li>
                        </ul>
                        <div className="flex gap-4 mt-6">
                            <a
                                href="https://www.instagram.com/villalucia_bariloche/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full  border-stone-300  flex items-center justify-center bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white transition-all duration-300"
                            >
                                <FiInstagram size={20} />
                            </a>
                            <a
                                href="https://www.facebook.com/villaluciabariloche"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full text-stone-600 flex items-center justify-center bg-[#1877F2] text-white hover:border-transparent transition-all duration-300"
                            >
                                <FiFacebook size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-stone-200 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500">
                    <p>
                        &copy; {new Date().getFullYear()} Cabañas Villa Lucia.
                        Todos los derechos reservados.
                    </p>
                    <p className="mt-2 md:mt-0">
                        Desarrollado por{' '}
                        <a
                            href="https://nessostudio.com.ar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="italic hover:text-dark-green transition-colors duration-200"
                        >
                            Nesso Studio
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
