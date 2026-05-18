import Image from 'next/image';
import Link from 'next/link';

type HeaderDesktopProps = {
    scrolled: boolean;
};

export default function HeaderDesktop({ scrolled }: HeaderDesktopProps) {
    return (
        <div
            className={`hidden sm:block fixed z-20 px-6 py-4 w-full xl mx-auto ${scrolled ? 'backdrop-blur-md' : 'bg-transparent'}`}
        >
            <div className="flex max-w-7xl mx-auto justify-between items-center  transition-colors duration-300">
                <Link href="/">
                    <Image
                        width={200}
                        height={200}
                        alt="Villa Lucia Logo"
                        src="/logo/logo-blanco-sinbg.png"
                        className="w-30 h-auto"
                    />
                </Link>

                <nav className="flex gap-4 uppercase text-white md:text-base text-sm ">
                    <Link
                        href="/"
                        className="hover:text-light-green text-white"
                    >
                        Inicio
                    </Link>
                    <Link
                        href="/cabanas"
                        className="hover:text-light-green text-white"
                    >
                        Cabañas
                    </Link>
                    <Link
                        href="/galeria"
                        className="hover:text-light-green text-white"
                    >
                        Galería
                    </Link>
                    <Link
                        href="/contacto"
                        className="hover:text-light-green text-white"
                    >
                        Contacto
                    </Link>
                </nav>
                <button className="px-6 py-2 rounded-lg uppercase border transition-all duration-200 'text-dark-green hover:text-white' : 'bg-transparent backdrop-blur-md text-white border-white hover:bg-white hover:text-light-green">
                    Reservar
                </button>
            </div>
        </div>
    );
}
