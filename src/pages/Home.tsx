import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Dumbbell, ClipboardList, Goal, TrendingUp, BarChart3, Users, FileText, Key } from "lucide-react";

const Home = () => {
  const features = [
    {
      title: "Entrenamientos",
      description:
        "Crea sesiones con fotos, explica objetivos y registra asistencia de tus jugadores.",
      icon: <Dumbbell className="w-10 h-10 text-[#263238]" />,
    },
    {
      title: "Partidos y Resultados",
      description:
        "Registra resultados, estadísticas individuales y alineaciones del equipo y rival.",
      icon: <Goal className="w-10 h-10 text-[#263238]" />,
    },
    {
      title: "Análisis Táctico",
      description:
        "Planifica estrategias, analiza cómo funciona tu equipo y el rival por cada parte del partido.",
      icon: <ClipboardList className="w-10 h-10 text-[#263238]" />,
    },
    {
      title: "Evaluaciones Semanales",
      description:
        "Sigue el rendimiento de tus jugadores en técnica, táctica y comportamiento semanalmente.",
      icon: <TrendingUp className="w-10 h-10 text-[#263238]" />,
    },
    {
      title: "Estadísticas Individuales",
      description:
        "Visualiza estadísticas totales con gráficas descargables de minutos, goles, asistencias y más.",
      icon: <BarChart3 className="w-10 h-10 text-[#263238]" />,
    },
    {
      title: "Estadísticas del Equipo",
      description:
        "Consulta estadísticas del equipo y contribución de cada jugador con gráficas descargables.",
      icon: <Users className="w-10 h-10 text-[#263238]" />,
    },
    {
      title: "Informes de Temporada",
      description:
        "Genera informes finales de cada jugador que pueden descargarse fácilmente.",
      icon: <FileText className="w-10 h-10 text-[#263238]" />,
    },
    {
      title: "Acceso por Rol",
      description:
        "Entrenadores crean y modifican datos, coordinadores visualizan toda la información sin editar.",
      icon: <Key className="w-10 h-10 text-[#263238]" />,
    },
  ];

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

        <section className="bg-gray-100 py-16 px-6 sm:px-10 lg:px-20">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-[#263238]">
                    Si eres un club de fútbol y quieres llevar la gestión de tus equipos
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#263238] to-[#455A64]">
                      a otro nivel
                    </span>
                </h2>
                <p className="text-lg sm:text-xl mb-6">
                  Organiza entrenamientos, controla estadísticas y mejora el rendimiento de tu club desde un solo lugar.
                </p>
            </div>

              {/* Grid de características */}
              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:scale-105 transition-transform hover:shadow-[0_10px_25px_rgba(38,50,56,1)]"
                  >
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-[#263238] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
        
        </section>

        <section className="relative bg-gradient-to-r from-[#263238] to-[#455A64] text-white py-16 px-6 sm:px-10 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Título */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
              Lleva la gestión de tu club al siguiente nivel
            </h2>

            {/* Subtítulo */}
            <p className="text-lg sm:text-xl mb-10 text-gray-200">
              Únete a cientos de entrenadores que ya están mejorando el
              rendimiento de sus equipos con{" "}
              <span className="font-semibold">Squadra</span>.
            </p>

            {/* Botones */}
            <div className="flex flex-wrap justify-center gap-6">
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

            {/* Texto secundario */}
            <p className="text-sm sm:text-base text-gray-200 mb-8">
              Contacta con nosotros y te proporcionaremos un plan de suscripción:  
              <a href="mailto:contacto@squadrabase.es" className="text-gray-200 font-bold underline hover:text-white">contacto@squadrabase.es</a>
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
