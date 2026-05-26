import Image from 'next/image';
import Link from 'next/link';

type HeaderDesktopProps = {
    scrolled: boolean;
};

export default function HeaderDesktop({ scrolled }: HeaderDesktopProps) {
    return (
        <div
            className={`hidden sm:block fixed z-20 px-6 py-4 w-full xl mx-auto transition-all duration-300 ${scrolled ? 'bg-white ' : 'bg-transparent'}`}
        >
            <div className="flex max-w-7xl mx-auto justify-between items-center  transition-colors duration-300">
                <Link href="/">
                    <Image
                        width={200}
                        height={200}
                        alt="Villa Lucia Logo"
                        src="/fotos-drive/logo-blanco.png"
                        className={`w-30 h-auto ${scrolled ? "hidden" : "block"}`}
                    />
                    <Image
                        width={200}
                        height={200}
                        alt="Villa Lucia Logo"
                        src="/fotos-drive/logo.png"
                        className={`w-30 h-auto ${scrolled ? "block" : "hidden"}`}
                    />
                </Link>

                <nav className={`flex gap-4 uppercase  md:text-base text-sm ${scrolled ? 'text-black' : 'text-white'}`}>
                    <Link
                        href="/"
                        className="hover:text-light-green "
                    >
                        Inicio
                    </Link>
                    <Link
                        href="/cabanas"
                        className="hover:text-light-green "
                    >
                        Cabañas
                    </Link>
                    <Link
                        href="/galeria"
                        className="hover:text-light-green "
                    >
                        Galería
                    </Link>
                    <Link
                        href="/contacto"
                        className="hover:text-light-green "
                    >
                        Contacto
                    </Link>
                </nav>
                <Link
                    href="/contacto"
                    className={`px-6 py-2 rounded-lg uppercase border transition-all duration-200 'text-dark-green hover:text-white' : 'bg-transparent backdrop-blur-md  hover:text-light-green hover:border-light-green 
                        ${scrolled ? 'text-black border-black' : 'text-white border-white'}`}
                >
                    Reservar
                </Link>
            </div>
        </div>
    );
}
