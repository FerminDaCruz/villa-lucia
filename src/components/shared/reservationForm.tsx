'use client';

import { useState } from 'react';
import { DateRange } from 'react-day-picker';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { FaWhatsapp, FaRegCalendarAlt } from 'react-icons/fa';

export default function ReservationForm() {
    const [range, setRange] = useState<DateRange | undefined>();
    const [guests, setGuests] = useState('2');
    const [calendarOpen, setCalendarOpen] = useState(false);

    const checkIn = range?.from;
    const checkOut = range?.to;

    const formatDate = (date: Date) =>
        format(date, 'dd/MM/yyyy', { locale: es });

    const handleReservation = (e: React.FormEvent) => {
        e.preventDefault();

        if (!checkIn || !checkOut) return;

        const phone = '5492944588900';

        const message = `Hola, quisiera consultar disponibilidad para reservar.
Check-in: ${formatDate(checkIn)}
Check-out: ${formatDate(checkOut)}
Cantidad de personas: ${guests}`;

        const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
            message,
        )}`;

        window.open(url, '_blank');
    };

    return (
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl max-w-md w-full mx-auto border border-gray-100">
            <h3 className="text-2xl font-medium text-dark-green mb-6 text-center">
                Reservá tu estadía
            </h3>

            <form onSubmit={handleReservation} className="space-y-5">
                {/* Fechas */}
                <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Fechas de estadía
                    </label>

                    {/* Botón que abre/cierra el calendario */}
                    <button
                        type="button"
                        onClick={() => setCalendarOpen(!calendarOpen)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-left flex items-center justify-between hover:border-gray-400 transition-colors"
                    >
                        <span
                            className={
                                checkIn ? 'text-gray-800' : 'text-gray-500'
                            }
                        >
                            {checkIn
                                ? checkOut
                                    ? `${formatDate(checkIn)} - ${formatDate(
                                          checkOut,
                                      )}`
                                    : `${formatDate(
                                          checkIn,
                                      )} - Seleccioná salida`
                                : 'Seleccioná check-in y check-out'}
                        </span>

                        <FaRegCalendarAlt className="text-gray-500" />
                    </button>

                    {/* Calendario flotante */}
                    {calendarOpen && (
                        <div className="absolute top-full left-0 mt-2 z-50 bg-white border border-gray-200 rounded-xl shadow-xl p-3">
                            <style jsx global>{`
                                .rdp {
                                    --rdp-accent-color: #5b7c58;
                                    --rdp-accent-background-color: #eaf2e8;
                                    margin: 0;
                                }
                            `}</style>

                            {/* Import dinámico para evitar problemas de tipos si no importaste DayPicker arriba */}
                            {(() => {
                                const {
                                    DayPicker,
                                } = require('react-day-picker');
                                return (
                                    <DayPicker
                                        mode="range"
                                        selected={range}
                                        onSelect={(
                                            value: DateRange | undefined,
                                        ) => {
                                            setRange(value);

                                            const from = value?.from;
                                            const to = value?.to;
                                            // Cerrar cuando ya seleccionó ambas fechas
                                            if (
                                                from &&
                                                to &&
                                                from.getTime() !== to.getTime()
                                            ) {
                                                setCalendarOpen(false);
                                            }
                                        }}
                                        locale={es}
                                        numberOfMonths={1}
                                        disabled={{ before: new Date() }}
                                        min={1} // obliga a seleccionar al menos 1 noche
                                    />
                                );
                            })()}
                        </div>
                    )}
                </div>

                {/* Cantidad de personas */}
                <div className="flex flex-col space-y-1">
                    <label
                        htmlFor="guests"
                        className="text-sm font-medium text-gray-700"
                    >
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

                {/* Botón WhatsApp */}
                <button
                    type="submit"
                    disabled={!checkIn || !checkOut}
                    className="w-full bg-[#25D366] hover:bg-[#25D366]/80 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 mt-4"
                >
                    <FaWhatsapp size={20} />
                    Reservar por WhatsApp
                </button>
            </form>
        </div>
    );
}
