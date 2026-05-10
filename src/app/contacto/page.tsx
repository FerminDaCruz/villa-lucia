import ContactSection from '@/components/mainPage/contactSection';
import ReservationForm from '@/components/shared/reservationForm';

export default function ContactoPage() {
    return (
        <div className="pt-24 pb-16 bg-neutral-900 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-heading font-medium text-white mb-4">
                        Contacto y Reservas
                    </h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Comunicate con nosotros para consultar disponibilidad, hacer una reserva 
                        o realizar cualquier consulta. Estamos para ayudarte.
                    </p>
                </div>

                <div className="flex justify-center">
                    {/* Reutilizamos el ReservationForm en esta página */}
                    <div className="w-full max-w-md">
                        <ReservationForm />
                    </div>
                </div>
            </div>

            {/* Incluimos la sección de contacto existente con el mapa */}
            <ContactSection />
        </div>
    );
}
