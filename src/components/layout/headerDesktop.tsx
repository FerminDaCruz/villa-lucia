import Image from 'next/image';
import Link from 'next/link';

type HeaderDesktopProps = {
    scrolled: boolean;
};

export default function HeaderDesktop({ scrolled }: HeaderDesktopProps) {
    return (
        <div
            className={`sm:flex hidden fixed w-full z-20 justify-between items-center px-6 py-4 transition-colors duration-300
		${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}
        >
            <Image
                width={200}
                height={200}
                alt="Villa Lucia Logo"
                src={
                    scrolled ? '/logo/logo.png' : '/logo/logo-blanco-sinbg.png'
                }
                className="w-30 h-auto"
            />
            <nav
                className={`flex gap-4 uppercase ${scrolled ? 'text-dark-green' : 'text-white'}`}
            >
                <Link
                    href="/"
                    className={`hover:text-light-green ${scrolled ? 'text-dark-green' : 'text-white'}`}
                >
                    Inicio
                </Link>
                <Link
                    href="/"
                    className={`hover:text-light-green ${scrolled ? 'text-dark-green' : 'text-white'}`}
                >
                    Servicios
                </Link>
                <Link
                    href="/"
                    className={`hover:text-light-green ${scrolled ? 'text-dark-green' : 'text-white'}`}
                >
                    Cabañas
                </Link>
                <Link
                    href="/"
                    className={`hover:text-light-green ${scrolled ? 'text-dark-green' : 'text-white'}`}
                >
                    Contacto
                </Link>
            </nav>
            <button
                className={` px-6 py-2 rounded-full uppercase border transition-all duration-200 
			${scrolled ? 'text-dark-green border-dark-green hover:bg-dark-green hover:text-white' : 'bg-dark-green text-white border-dark-green hover:bg-white hover:text-dark-green'}`}
            >
                Reservar
            </button>
        </div>
    );
}
