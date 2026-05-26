'use client';

type MobileMenuProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    scrolled: boolean;
};

export default function MobileMenu({
    open,
    setOpen,
    scrolled,
}: MobileMenuProps) {
    return (
        <button onClick={() => setOpen(!open)} className="relative w-8 h-8">
            <span
                className={` absolute left-1/2 top-1/2 h-0.5 w-full origin-center transition duration-300 ease-in-out rounded-full ${
                    open
                        ? 'rotate-45 -translate-x-1/2 -translate-y-1/2 bg-black'
                        : `-translate-x-1/2 -translate-y-2.5 ${scrolled ? 'bg-black' : 'bg-white'}`
                }`}
            />
            <span
                className={` absolute left-1/2 top-1/2 h-0.5 w-full  transition duration-300 ease-in-out rounded-full ${
                    open
                        ? ' opacity-0 -translate-x-1/2 -translate-y-1/2 bg-black'
                        : `-translate-x-1/2 -translate-y-1/2 ${scrolled ? 'bg-black' : 'bg-white'}`
                }`}
            />
            <span
                className={` absolute left-1/2 top-1/2 h-0.5 w-full origin-center transition duration-300 ease-in-out rounded-full ${
                    open
                        ? ' -rotate-45 -translate-x-1/2 -translate-y-1/2 bg-black'
                        : ` -translate-x-1/2 translate-y-2 ${scrolled ? 'bg-black' : 'bg-white'}`
                }`}
            />
        </button>
    );
}
