'use client';
import { useEffect, useState } from 'react';
import HeaderDesktop from './headerDesktop';
import HeaderMobile from './headerMobile';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header>
            <HeaderDesktop scrolled={scrolled} />
            <HeaderMobile scrolled={scrolled} />
        </header>
    );
}
