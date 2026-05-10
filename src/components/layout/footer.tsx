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
        <footer className="bg-neutral-950 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Logo y descripción */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <Image
                            src="/logo/logo-blanco-sinbg-removebg-preview.png"
                            alt="Villa Lucia"
                            width={200}
                            height={200}
                            className="w-40 mb-4"
                        />
                        <p className="text-gray-200 text-sm leading-relaxed max-w-xs">
                            Un refugio de paz en el corazón de Bariloche.
                            Disfrutá de la naturaleza patagónica con todas las
                            comodidades.
                        </p>
                    </div>

                    {/* Enlaces Rápidos */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-lg font-heading font-medium mb-6 uppercase tracking-wider">
                            Enlaces
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/"
                                    className="text-gray-200 hover:text-light-green transition-colors"
                                >
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/cabanas"
                                    className="text-gray-200 hover:text-light-green transition-colors"
                                >
                                    Cabañas
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contacto"
                                    className="text-gray-200 hover:text-light-green transition-colors"
                                >
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-lg font-heading font-medium mb-6 uppercase tracking-wider">
                            Contacto
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <FiMapPin className="mt-1 flex-shrink-0" />
                                <span className="text-gray-200 text-sm">
                                    Villa Lucia, Bariloche, Patagonia Argentina
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FiPhone className="shrink-0" />
                                <span className="text-gray-200 text-sm">
                                    +54 9 294 458 8900
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FiMail className="shrink-0" />
                                <span className="text-gray-200 text-sm">
                                    info@villalucia.com
                                </span>
                            </li>
                        </ul>
                        <div className="flex gap-4 mt-6">
                            <a
                                href="https://www.instagram.com/villalucia_bariloche/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:text-white transition-all"
                            >
                                <FiInstagram size={20} />
                            </a>
                            <a
                                href="https://www.facebook.com/villaluciabariloche"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all"
                            >
                                <FiFacebook size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/20 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
                    <p>
                        &copy; {new Date().getFullYear()} Cabañas Villa Lucia.
                        Todos los derechos reservados.
                    </p>
                    <p className="mt-2 md:mt-0">
                        Desarrollado por{' '}
                        <a
                            href="nessostudio.com.ar"
                            className="italic hover:text-blue-500"
                        >
                            Nesso Studio
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
