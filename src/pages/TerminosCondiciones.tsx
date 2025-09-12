import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TerminosCondiciones() {

  return (
    <div className="bg-[var(--background-color)] min-h-screen">
      {/* HEADER */}
      <Header/>

      {/* MAIN */}
      <main className="pt-48 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center">
            Términos y Condiciones
          </h2>

          <div className="space-y-8">
            {[
              {
                title: "Introducción",
                text: `Bienvenido a la aplicación móvil Squadra Base. Estos términos y condiciones rigen el acceso y uso de la aplicación, así como cualquier contenido, funcionalidad y servicios ofrecidos.`,
              },
              {
                title: "Aceptación de los términos",
                text: `Al utilizar la aplicación, usted acepta y se compromete a cumplir con estos términos y condiciones. Si no está de acuerdo, debe abstenerse de utilizar el servicio.`,
              },
              {
                title: "Objeto del servicio",
                text: `Squadra Base ofrece una herramienta para la gestión de equipos de fútbol base, incluyendo entrenamientos, partidos, estadísticas y análisis de jugadores y rivales.`,
              },
              {
                title: "Registro y cuenta de usuario",
                text: `Para acceder a ciertas funcionalidades, los usuarios deberán contar con un nombre de usuario y contraseña proporcionados por el administrador. Es responsabilidad del usuario mantener la confidencialidad de sus credenciales.`,
              },
              {
                title: "Uso permitido",
                text: `Los usuarios se comprometen a utilizar la aplicación de manera legal, ética y responsable. Queda prohibido manipular datos de otros equipos o usuarios sin autorización.`,
              },
              {
                title: "Propiedad intelectual",
                text: `Todo el contenido, diseño y código de Squadra Base son propiedad exclusiva de sus creadores. Queda prohibida su copia, distribución o modificación sin consentimiento expreso.`,
              },
              {
                title: "Responsabilidad",
                text: `Squadra Base no se hace responsable por los datos introducidos por los usuarios, interrupciones del servicio, ni por el mal uso de la aplicación.`,
              },
              {
                title: "Privacidad y protección de datos",
                text: (
                  <>
                    La recopilación y uso de datos personales se regula en nuestra{" "}
                    <Link
                      to="/privacidad"
                      className="text-blue-500 hover:underline"
                    >
                      Política de Privacidad
                    </Link>
                    .
                  </>
                ),
              },
              {
                title: "Modificaciones",
                text: `Squadra Base se reserva el derecho de modificar los presentes términos y condiciones. Los cambios entrarán en vigor desde su publicación en esta página.`,
              },
              {
                title: "Ley aplicable y jurisdicción",
                text: `Estos términos se rigen por la legislación española. Cualquier controversia será sometida a los tribunales competentes en España.`,
              },
              {
                title: "Contacto",
                text: (
                  <>
                    Para consultas sobre estos términos, puede contactarnos en{" "}
                    <a
                      href="mailto:contacto@squadrabase.es"
                      className="text-blue-500 hover:underline"
                    >
                      contacto@squadrabase.es
                    </a>
                    .
                  </>
                ),
              },
            ].map((section, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-md p-8">
                <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>
                <p className="text-lg text-[#455A64]">{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
