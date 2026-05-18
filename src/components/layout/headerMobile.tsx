'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import MobileMenu from './MobileMenu';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

type HeaderMobileProps = {
    scrolled: boolean;
};
export default function HeaderMobile({ scrolled }: HeaderMobileProps) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [open]);

    return (
        <div
            className={`sm:hidden fixed top-0 left-0 w-full z-20 transition-all duration-300 ease-in-out px-2 py-2 my-auto ${
                open
                    ? 'h-screen bg-black/90'
                    : `h-[78px] ${
                          scrolled ? 'backdrop-blur-lg' : 'bg-transparent'
                      }`
            }`}
        >
            {/* Top bar */}
            <div className="flex justify-between items-center px-4 h-16">
                <Link href="/">
                    <Image
                        width={100}
                        height={100}
                        alt="Villa Lucia Logo"
                        src="/logo/logo-blanco-sinbg.png"
                    />
                </Link>

                <MobileMenu open={open} setOpen={setOpen} scrolled={scrolled} />
            </div>

            {/* Menu content */}
            <div
                className={`h-full flex-1 flex flex-col justify-between text-white transition-all duration-300 ease-in-out ${
                    open
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 -translate-y-5 pointer-events-none'
                }`}
            >
                {/* Navegación principal */}
                <nav className="flex flex-col items-center justify-center flex-1 gap-8">
                    <Link
                        href="/"
                        onClick={() => setOpen(false)}
                        className="text-3xl font-light tracking-tight hover:text-light-green transition-colors duration-200"
                    >
                        Inicio
                    </Link>

                    <Link
                        href="/cabanas"
                        onClick={() => setOpen(false)}
                        className="text-3xl font-light tracking-tight hover:text-light-green transition-colors duration-200"
                    >
                        Cabañas
                    </Link>

                    <Link
                        href="/galeria"
                        onClick={() => setOpen(false)}
                        className="text-3xl font-light tracking-tight hover:text-light-green transition-colors duration-200"
                    >
                        Galería
                    </Link>

                    <Link
                        href="/contacto"
                        onClick={() => setOpen(false)}
                        className="text-3xl font-light tracking-tight hover:text-light-green transition-colors duration-200"
                    >
                        Contacto
                    </Link>

                    <a
                        href="#"
                        className="bg-[#25D366] text-white px-6 py-3 rounded-lg hover:bg-[#25D366]/80 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
                    >
                        <FaWhatsapp className="text-3xl" />
                        Consultar disponibilidad
                    </a>
                </nav>

                {/* Footer del menú */}
                <div className="pb-24 flex flex-col items-center gap-4">
                    <div className="flex gap-4 mt-6">
                        <a
                            href="https://www.instagram.com/villalucia_bariloche/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 text-gray-300 transition-all"
                        >
                            <FaInstagram size={20} />
                        </a>
                        <a
                            href="https://www.facebook.com/villaluciabariloche"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center bg-blue-700 text-gray-300 transition-all"
                        >
                            <FaFacebook size={20} />
                        </a>
                    </div>

                    <p className="text-xs tracking-wide text-gray-300 text-center px-6">
                        Villa Lucía · Bariloche, Patagonia Argentina
                    </p>
                </div>
            </div>
        </div>
    );
}
