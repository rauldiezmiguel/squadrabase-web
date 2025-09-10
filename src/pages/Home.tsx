import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header fijo */}
      <Header />

      {/* Contenido principal */}
      <main className="flex-grow pt-24 pb-24 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
        {/* Sección de bienvenida */}
        <section className="bg-gray-100 text-[#263238] py-12 px-6 sm:px-10 lg:px-20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">

                {/* Imagen */}
                <div className="flex justify-center md:justify-start w-full md:w-1/3">
                <img
                    src="/images/mockupInicio.png"
                    alt="mockup"
                    className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto drop-shadow-2xl opacity-0 animate-float animate-fadeUp"
                    style={{ animationDelay: "0.3s" }}
                />
                </div>

                {/* Texto */}
                <div
                className="text-center md:text-left max-w-lg opacity-0 animate-fadeLeft"
                style={{ animationDelay: "0.6s" }}
                >
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6">
                    Bienvenido a{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#263238] to-[#455A64] animate-gradient">
                    Squadra
                    </span>
                </h1>
                <p
                    className="mb-10 text-base sm:text-lg md:text-xl opacity-0 animate-fadeRight"
                    style={{ animationDelay: "0.9s" }}
                >
                    La plataforma para gestionar tus equipos de fútbol base de manera fácil y moderna.
                    Organiza entrenamientos, controla estadísticas y mejora la experiencia de tus equipos.
                </p>

                {/* Logos de descarga */}
                <div
                    className="flex flex-wrap justify-center md:justify-start gap-6 opacity-0 animate-fadeUp"
                    style={{ animationDelay: "1.2s" }}
                >
                    {/* App Store */}
                    <a
                    href="https://apps.apple.com/app/6746484887"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-105 transition-transform"
                    >
                    <img
                        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                        alt="App Store"
                        className="h-12 sm:h-14 md:h-16"
                    />
                    </a>
                    {/* Google Play */}
                    <a
                    href="https://play.google.com/store/apps/details?id=org.rauldiezmiguel.tfgfutbolbase"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-105 transition-transform"
                    >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                        alt="Google Play"
                        className="h-12 sm:h-14 md:h-16"
                    />
                    </a>
                </div>
                </div>
            </div>
        </section>

          {/* Sección de características o info */}
          <section className="grid md:grid-cols-3 gap-8 py-12">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold mb-2">Tutoriales</h2>
              <p className="text-gray-600">
                Aprende paso a paso cómo usar nuestras herramientas y recursos.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold mb-2">Soporte</h2>
              <p className="text-gray-600">
                Nuestro equipo está disponible para ayudarte en cualquier momento.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold mb-2">Actualizaciones</h2>
              <p className="text-gray-600">
                Mantente al día con las últimas novedades y mejoras de la plataforma.
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
