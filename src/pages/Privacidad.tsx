import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Privacidad() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--background-color)]">
      {/* HEADER */}
        <Header/>

      {/* MAIN */}
      <main className="pt-48 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center">
            Políticas de Privacidad
          </h2>
          <p className="text-lg text-[#455A64] mb-12 text-center max-w-3xl mx-auto">
            En Squadra Base valoramos y protegemos tu privacidad. Esta política
            describe cómo recopilamos, usamos y protegemos tu información.
          </p>

          <div className="grid gap-8">
            {/* Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                Información que recopilamos
              </h3>
              <p className="text-[#455A64]">
                Recopilamos únicamente la información necesaria para ofrecerte
                nuestros servicios y mejorar tu experiencia.
              </p>
              <ul className="list-disc list-inside mt-4 text-[#455A64] space-y-2">
                <li>
                  Información que nos proporcionas directamente, por ejemplo, al
                  contactarnos.
                </li>
                <li>
                  Datos técnicos sobre el uso de la aplicación, que nos ayudan a
                  mejorar su funcionamiento.
                </li>
              </ul>
            </div>

            {/* Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4">
                Uso de la información
              </h3>
              <p className="text-[#455A64]">La información recopilada se utiliza para:</p>
              <ul className="list-disc list-inside mt-4 text-[#455A64] space-y-2">
                <li>Brindarte soporte y atención personalizada.</li>
                <li>Mejorar la calidad y funcionalidad de nuestra aplicación.</li>
                <li>Cumplir con obligaciones legales si fuese necesario.</li>
              </ul>
            </div>

            {/* Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4">
                Compartir datos con terceros
              </h3>
              <p className="text-[#455A64]">
                No compartimos tus datos personales con terceros, excepto cuando
                sea necesario para cumplir con la ley o con tu consentimiento
                explícito.
              </p>
            </div>

            {/* Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4">Seguridad</h3>
              <p className="text-[#455A64]">
                Implementamos medidas técnicas y organizativas para proteger tus
                datos contra accesos no autorizados.
              </p>
            </div>

            {/* Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4">Derechos del usuario</h3>
              <p className="text-[#455A64]">
                Tienes derecho a acceder, rectificar o eliminar tus datos
                personales. Si deseas ejercer estos derechos, contáctanos:
              </p>
              <a
                href="mailto:contacto@squadrabase.es"
                className="text-blue-500 underline"
              >
                contacto@squadrabase.es
              </a>
            </div>

            {/* Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4">
                Cambios en la política
              </h3>
              <p className="text-[#455A64]">
                Podemos actualizar esta política de privacidad ocasionalmente.
                Te notificaremos cualquier cambio importante mediante nuestra
                página web.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
        <Footer />
    </div>
  );
}
