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
    const phone = '5492944588900';
    const message = `Hola, quisiera consultar disponibilidad para reservar.`;
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
        message,
    )}`;

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
                    ? 'h-dvh bg-white'
                    : `h-[78px] ${
                          scrolled ? 'bg-white' : 'bg-transparent'
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
                        src="/fotos-drive/logo-blanco.png"
                        className={`${
                            open 
                            ? 'hidden' 
                            : `${
                                scrolled ? 'hidden' : 'block'
                            }`
                        }`}
                    />
                     <Image
                        width={100}
                        height={100}
                        alt="Villa Lucia Logo"
                        src="/fotos-drive/logo-1.png"
                        className={`${
                            open 
                            ? 'block' 
                            : `${
                          scrolled ? 'block' : 'hidden'
                      }`}`}
                    />
                </Link>

                <MobileMenu open={open} setOpen={setOpen} scrolled={scrolled} />
            </div>

            {/* Menu content */}
            <div
                className={`h-full flex-1 flex flex-col justify-between text-black transition-all duration-300 ease-in-out ${
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
                        href={whatsappLink}
                        className="w-70 bg-[#25D366] text-white px-5 py-3 rounded-lg hover:bg-[#25D366]/80 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
                    >
                        <FaWhatsapp className="text-3xl" />
                        Consultar disponibilidad
                    </a>
                    <Link
                        href="/contacto"
                        onClick={() => setOpen(false)}
                        className="w-70 backdrop-blur-lg border border-black text-black px-5 py-3 rounded-lg hover:border-light-green hover:text-light-green transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
                    >
                        Reservar ahora
                    </Link>
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

                    <p className="text-xs tracking-wide text-gray-600 text-center px-6">
                        Villa Lucía · Bariloche, Patagonia Argentina
                    </p>
                </div>
            </div>
        </div>
    );
}
