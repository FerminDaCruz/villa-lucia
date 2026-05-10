'use client';

import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Assuming react-icons is installed

export default function ReservationForm() {
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState('2');

    const handleReservation = (e: React.FormEvent) => {
        e.preventDefault();
        if (!checkIn || !checkOut || !guests) return;

        const phone = '5492944588900';
        const message = `Hola, quisiera consultar disponibilidad para reservar.\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nCantidad de personas: ${guests}`;
        const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
            message
        )}`;

        window.open(url, '_blank');
    };

    return (
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl max-w-md w-full mx-auto border border-gray-100">
            <h3 className="text-2xl font-heading font-medium text-dark-green mb-6 text-center">
                Reserva tu estadía
            </h3>
            <form onSubmit={handleReservation} className="space-y-5">
                <div className="flex flex-col space-y-1">
                    <label htmlFor="checkin" className="text-sm font-medium text-gray-700">
                        Fecha de Check-in
                    </label>
                    <input
                        type="date"
                        id="checkin"
                        required
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-light-green focus:border-transparent outline-none transition-all text-gray-800"
                    />
                </div>
                <div className="flex flex-col space-y-1">
                    <label htmlFor="checkout" className="text-sm font-medium text-gray-700">
                        Fecha de Check-out
                    </label>
                    <input
                        type="date"
                        id="checkout"
                        required
                        value={checkOut}
                        min={checkIn}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-light-green focus:border-transparent outline-none transition-all text-gray-800"
                    />
                </div>
                <div className="flex flex-col space-y-1">
                    <label htmlFor="guests" className="text-sm font-medium text-gray-700">
                        Cantidad de personas
                    </label>
                    <input
                        type="number"
                        id="guests"
                        min="1"
                        max="10"
                        required
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-light-green focus:border-transparent outline-none transition-all text-gray-800"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-dark-green hover:bg-light-green text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 mt-4"
                >
                    <FaWhatsapp size={20} />
                    Consultar por WhatsApp
                </button>
            </form>
        </div>
    );
}
