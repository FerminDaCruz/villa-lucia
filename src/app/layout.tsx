import type { Metadata } from 'next';
import {
    Cormorant_Garamond,
    Playfair_Display,
    Montserrat,
    Lato,
} from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const playfair = Playfair_Display({
    variable: '--font-playfair',
    subsets: ['latin'],
    style: ['normal', 'italic'],
    weight: ['400', '500'],
});

const cormorant = Cormorant_Garamond({
    variable: '--font-cormorant',
    subsets: ['latin'],
    style: ['normal', 'italic'],
    weight: ['400', '500'],
});

const montserrat = Montserrat({
    variable: '--font-montserrat',
    subsets: ['latin'],
    weight: ['300', '400', '500', '600'],
});

const lato = Lato({
    variable: '--font-lato',
    subsets: ['latin'],
    weight: ['300', '400', '700'],
});

export const metadata: Metadata = {
    metadataBase: new URL('https://villalucia.com.ar'),

    title: {
        default: 'Villa Lucia | Cabañas en Bariloche, Patagonia Argentina',
        template: '%s | Villa Lucia',
    },

    description:
        'Cabañas y casas de alquiler temporario en Bariloche para 4 a 6 personas. Disfrutá de un entorno rodeado de naturaleza patagónica con Wi-Fi, estacionamiento, parrilla, cocina equipada, calefacción y servicio de mucama.',

    keywords: [
        'cabañas en Bariloche',
        'alquiler turístico en Bariloche',
        'cabañas en Patagonia Argentina',
        'alquiler temporario en Bariloche',
        'cabañas familiares en Bariloche',
        'cabañas con parrilla en Bariloche',
        'cabañas con estacionamiento en Bariloche',
        'cabañas cerca del lago en Bariloche',
        'Villa Lucia Bariloche',
        'alojamiento en Bariloche',
    ],

    authors: [{ name: 'Villa Lucia' }],
    creator: 'Villa Lucia',
    publisher: 'Villa Lucia',

    robots: {
        index: true,
        follow: true,
    },

    alternates: {
        canonical: 'https://villalucia.com.ar',
    },

    openGraph: {
        type: 'website',
        locale: 'es_AR',
        url: 'https://villalucia.com.ar',
        siteName: 'Villa Lucia',
        title: 'Villa Lucia | Cabañas en Bariloche, Patagonia Argentina',
        description:
            'Cabañas y casas de alquiler temporario en Bariloche para 4 a 6 personas. Naturaleza patagónica, tranquilidad y todas las comodidades para una estadía inolvidable.',
        images: [
            {
                url: '/logo/logo.png',
                width: 1200,
                height: 630,
                alt: 'Villa Lucia - Cabañas en Bariloche',
            },
        ],
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Villa Lucia | Cabañas en Bariloche, Patagonia Argentina',
        description:
            'Cabañas y casas de alquiler temporario en Bariloche para 4 a 6 personas con Wi-Fi, estacionamiento, parrilla y cocina equipada.',
        images: ['/logo/logo.png'],
    },

    category: 'travel',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body>
                <Header />
                <main className="flex-grow">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
