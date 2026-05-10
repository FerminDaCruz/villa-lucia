'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import MobileMenu from './MobileMenu';
import Link from 'next/link';

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
                    ? 'h-screen bg-black/85'
                    : `h-[78px] ${
                          scrolled ? 'bg-white shadow-md' : 'bg-transparent'
                      }`
            }`}
        >
            {/* Top bar */}
            <div className="flex justify-between items-center px-4 h-16">
                <Image
                    width={100}
                    height={100}
                    alt="Villa Lucia Logo"
                    src={
                        open
                            ? '/logo/logo-blanco-sinbg.png'
                            : scrolled
                              ? '/logo/logo.png'
                              : '/logo/logo-blanco-sinbg.png'
                    }
                />

                <MobileMenu open={open} setOpen={setOpen} scrolled={scrolled} />
            </div>

            {/* Menu content */}
            <div
                className={`mt-4 transition-all duration-300 text-white ${
                    open
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 -translate-y-5 pointer-events-none'
                }`}
            >
                <nav className="flex flex-col items-center justify-center gap-6 text-xl">
                    <Link href="/" onClick={() => setOpen(false)}>
                        Inicio
                    </Link>
                    <Link href="/servicios" onClick={() => setOpen(false)}>
                        Servicios
                    </Link>
                    <Link href="/cabanas" onClick={() => setOpen(false)}>
                        Cabañas
                    </Link>
                    <Link href="/contacto" onClick={() => setOpen(false)}>
                        Contacto
                    </Link>
                </nav>
            </div>
        </div>
    );
}
