import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ClipboardList, BarChart3, Search, Trophy, Lightbulb, Users, Handshake, CheckCircle, User } from "lucide-react";

const About = () => {

   const aportamos = [
    {
      icon: <ClipboardList className="w-10 h-10 text-[#263238]" />,
      title: "Gestión de entrenamientos",
      desc: "Planifica sesiones, sube materiales y organiza la preparación de tu equipo."
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-[#263238]" />,
      title: "Estadísticas del equipo",
      desc: "Registra goles, minutos jugados, asistencias y tarjetas con gráficas visuales."
    },
    {
      icon: <Search className="w-10 h-10 text-[#263238]" />,
      title: "Análisis de rivales",
      desc: "Observa alineaciones, jugadores destacados y apunta notas para tus próximos partidos."
    },
    {
      icon: <Trophy className="w-10 h-10 text-[#263238]" />,
      title: "Visión global para coordinadores",
      desc: "Organiza categorías y equipos para tener una visión completa del club en un solo lugar."
    }
  ];

  const valores = [
    {
      icon: <Lightbulb className="w-10 h-10 text-[#263238]" />,
      title: "Innovación",
      desc: "Usamos la tecnología para mejorar la experiencia de clubes y entrenadores."
    },
    {
      icon: <Users className="w-10 h-10 text-[#263238]" />,
      title: "Transparencia",
      desc: "Información clara y accesible para todos los miembros del club."
    },
    {
      icon: <Handshake className="w-10 h-10 text-[#263238]" />,
      title: "Compromiso",
      desc: "Apoyamos el desarrollo del deporte base y los valores del fútbol."
    }
  ];

  const timeline = [
    {
      year: "2023",
      icon: <CheckCircle className="w-6 h-6 text-white" />,
      title: "Nacimiento del proyecto",
      desc: "Se identifica la necesidad de digitalizar la gestión de entrenamientos y estadísticas en fútbol base."
    },
    {
      year: "2024",
      icon: <User className="w-6 h-6 text-white" />,
      title: "Primeros clubes",
      desc: "Se incorporan los primeros clubes piloto, recogiendo feedback real de entrenadores y coordinadores."
    },
    {
      year: "2025",
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      title: "Evolución de la app",
      desc: "Se añaden estadísticas avanzadas y nuevas funcionalidades para mejorar la experiencia de usuarios."
    },
    {
      year: "2026",
      icon: <Trophy className="w-6 h-6 text-white" />,
      title: "Futuro",
      desc: "Plan de expansión y nuevas herramientas para seguir apoyando el fútbol base de forma digital."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header fijo */}
      <Header />

      {/* Contenido principal */}
      <main className="flex-grow pt-24 pb-24 bg-gray-100">
        
        {/* Hero Section */}
        <section className="bg-gray-100 py-20 px-6 text-center">
            <h1 className="text-[#263238] text-4xl sm:text-5xl font-extrabold mb-6">
            Sobre nosotros
            </h1>
            <h2 className="text-[#455A64] text-xl sm:text-2xl font-medium max-w-2xl mx-auto">
            Tecnología y pasión al servicio del fútbol base
            </h2>
        </section>

        <section className="bg-gray-100 py-20 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                
                {/* Imagen lateral */}
                <div className="flex-1 text-center">
                <img
                    src="/images/nuestraMision.jpg"
                    alt="Nuestra misión - fútbol base"
                    className="mx-auto rounded-xl shadow-lg max-w-full"
                />
                </div>

                {/* Texto explicativo */}
                <div className="flex-1">
                <h2 className="text-[#263238] text-3xl font-bold mb-4">Nuestra misión</h2>
                <p className="text-[#455A64] text-lg mb-4">
                    En <strong>Squadra Base</strong> creemos que el fútbol base merece herramientas digitales a la altura 
                    de su importancia en la formación de jóvenes deportistas. Queremos que cada entrenador y coordinador
                    tenga acceso a soluciones intuitivas para mejorar la gestión de sus equipos.
                </p>
                <p className="text-[#455A64] text-lg mb-4">
                    Nuestro objetivo es simplificar la gestión de clubes, entrenadores y coordinadores mediante una plataforma moderna, adaptable y fácil de usar, que permita enfocarse en lo realmente importante: formar y desarrollar a los jugadores.
                </p>
                <p className="text-[#455A64] text-lg font-semibold mt-6">
                    Con Squadra Base, la misión es clara: potenciar el fútbol base con tecnología, pasión y organización.
                </p>
                </div>

            </div>
        </section>

        {/* Qué aportamos */}
        <section className="bg-gray-100 py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-[#263238] text-3xl font-bold mb-12">Qué aportamos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {aportamos.map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 transition-shadow duration-300 hover:shadow-[0_10px_25px_rgba(38,50,56,1)]">
                  <div className="flex justify-center items-center mb-4">{item.icon}</div>
                  <h3 className="text-[#263238] font-bold mb-2 text-lg sm:text-xl">{item.title}</h3>
                  <p className="text-[#455A64] text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="bg-gray-100 py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-[#263238] text-3xl font-bold mb-12">Nuestros valores</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {valores.map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 transition-shadow duration-300 hover:shadow-[0_10px_25px_rgba(38,50,56,1)]">
                  <div className="flex justify-center items-center mb-4">{item.icon}</div>
                  <h3 className="text-[#263238] font-bold mb-2 text-lg sm:text-xl">{item.title}</h3>
                  <p className="text-[#455A64] text-sm sm:text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Historia / Timeline */}
        <section className="bg-gray-100 py-16 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <h2 className="text-[#263238] text-3xl font-bold mb-6">Historia</h2>
              <p className="text-[#455A64] mb-4">
                <strong>Squadra Base</strong> nació de una necesidad real: facilitar la gestión diaria de los clubes y entrenadores de fútbol base...
              </p>
              <p className="text-[#455A64] mb-4">
                Frente a esta realidad, decidimos crear una herramienta digital, intuitiva y adaptada al deporte formativo, que apoye tanto a coordinadores como a entrenadores en su labor.
              </p>
              <p className="text-[#455A64]">
                Cada decisión en el desarrollo de la plataforma ha sido pensada para mejorar la experiencia del usuario y apoyar a quienes dedican su tiempo a formar a los jóvenes en valores y habilidades deportivas.
              </p>
            </div>
            <div className="flex-1 space-y-8 relative before:absolute before:left-4 before:top-0 before:bottom-0 before:w-1 before:bg-gray-300">
              {timeline.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 relative">
                  <div className="flex flex-col items-center">
                    <div className="bg-[#263238] text-white w-10 h-10 flex items-center justify-center rounded-full">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[#263238] font-bold">{item.year} - {item.title}</h3>
                    <p className="text-[#455A64] text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
              
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;