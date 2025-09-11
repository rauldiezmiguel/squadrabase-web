import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useTutorialScroll } from "../hooks/useTutorialScroll";
import useScrollDirection from "../hooks/useScrollDirection";

export default function Tutorial() {

  const mockups = [
    "./images/mockup/mockup1.png",
    "./images/mockup/mockup2.png",
    "./images/mockup/mockup3.png",
    "./images/mockup/mockup4.png",
    "./images/mockup/mockup5.png",
    "./images/mockup/mockup6.png",
    "./images/mockup/mockup7.png",
    "./images/mockup/mockup8.png",
    "./images/mockup/mockup9.png",
    "./images/mockup/mockup10.png",
    "./images/mockup/mockup11.png",
    "./images/mockup/mockup12.png",
    "./images/mockup/mockup13.png",
    "./images/mockup/mockup14.png",
    "./images/mockup/mockup15.png",
    "./images/mockup/mockup10.png",
    "./images/mockup/mockup16.png",
    "./images/mockup/mockup17.png",
    "./images/mockup/mockup18.png",
    "./images/mockup/mockupEliminar.png",
    "./images/mockup/mockup19.png",
    "./images/mockup/mockup20.png",
    "./images/mockup/mockup21.png",
    "./images/mockup/mockup22.png",
    "./images/mockup/mockup23.png",
    "./images/mockup/mockup24.png",
    "./images/mockup/mockup25.png",
    "./images/mockup/mockup26.png",
    "./images/mockup/mockup27.png",
    "./images/mockup/mockup28.png",
    "./images/mockup/mockup29.png",
    "./images/mockup/mockup30.png",
    "./images/mockup/mockup31.png",
    "./images/mockup/mockup32.png",
    "./images/mockup/mockup33.png",
    "./images/mockup/mockup34.png",
    "./images/mockup/mockup35.png",
    "./images/mockup/mockup36.png",
    "./images/mockup/mockup37.png",
    "./images/mockup/mockup38.png",
    "./images/mockup/mockup36.png",
    "./images/mockup/mockup39.png",
    "./images/mockup/mockup4.png",
    "./images/mockup/mockup40.png",
    "./images/mockup/mockup41.png",
    "./images/mockup/mockup42.png",
    "./images/mockup/mockup4.png",
    "./images/mockup/mockup43.png",
    "./images/mockup/mockup44.png",
    "./images/mockup/mockup45.png",
    "./images/mockup/mockup44.png",
    "./images/mockup/mockup46.png",
    "./images/mockup/mockup47.png",
    "./images/mockup/mockup48.png",
    "./images/mockup/mockup44.png",
    "./images/mockup/mockup49.png",
    "./images/mockup/mockup50.png",
    "./images/mockup/mockup51.png",
    "./images/mockup/mockup52.png",
    "./images/mockup/mockup53.png",
    "./images/mockup/mockup44.png",
    "./images/mockup/mockup54.png",
    "./images/mockup/mockup44.png",
    "./images/mockup/mockup55.png",
    "./images/mockup/mockup4.png",
    "./images/mockup/mockup56.png",
    "./images/mockup/mockup57.png",
    "./images/mockup/mockup58.png",
    "./images/mockup/mockup59.png",
    "./images/mockup/mockup60.png",
    "./images/mockup/mockup61.png",
    "./images/mockup/mockup56.png",
    "./images/mockup/mockup62.png",
    "./images/mockup/mockup63.png",
    "./images/mockup/mockup64.png",
    "./images/mockup/mockup65.png",
    "./images/mockup/mockup66.png",
    "./images/mockup/mockup56.png",
    "./images/mockup/mockup67.png",
    "./images/mockup/mockup68.png",
    "./images/logoSquadraSinFondo.png"
  ];

  const textsLeft = [
    "Iniciar sesión",
    "",
    "Pantalla de incio",
    "Pantalla de equipo",
    "",
    "Crear partido",
    "",
    "",
    "Modificar partido",
    "Modificar partido", 
    "Modificar partido - Estadísticas",
    "Modificar partido - Estadísticas",
    "Modificar partido - Estadísticas",
    "Modificar partido - Estadísticas",
    "",
    "Modificar partido - Actualizar",
    "Modificar partido - Análisis Equipo",
    "Modificar partido - Análisis Equipo",
    "Modificar partido - Análisis Equipo",
    "Modificar partido - Análisis Equipo",
    "Modificar partido - Análisis Equipo",
    "Modificar partido - Análisis Rival",
    "Modificar partido - Análisis Rival",
    "Modificar partido - Análisis Rival",
    "Modificar partido - Análisis Rival",
    "Modificar partido - Análisis Rival",
    "Modificar partido - Análisis Rival",
    "Modificar partido - Análisis Rival",
    "Crear entrenamiento",
    "Crear entrenamiento",
    "Crear entrenamiento",
    "Ver partido",
    "Ver partido - Resumen",
    "Ver partido - Estadísticas",
    "Ver partido - Estadísticas",
    "Ver partido - Análisis Equipo",
    "Ver partido - Análisis Rival",
    "Ver entrenamiento",
    "Ver entrenamiento",
    "Ver entrenamiento",
    "Añadir asistencia",
    "Añadir asistencia",
    "Estadísticas equipo",
    "Estadísticas equipo",
    "Estadísticas equipo",
    "",
    "Jugadores",
    "Jugadores",
    "Jugador",
    "Jugador",
    "Estadísticas jugador",
    "Estadísticas jugador",
    "Estadísticas jugador",
    "Estadísticas jugador",
    "Evaluacion jugador",
    "Crear evaluación",
    "Crear evaluación",
    "Crear evaluación",
    "Ver evaluaciones",
    "Ver evaluaciones",
    "Ver asistencia entrenamiento",
    "Ver asistencia entrenamiento",
    "Ficha jugador",
    "Ficha jugador",
    "Menú desplegable",
    "Menú desplegable",
    "Lista entrenamientos",
    "Lista entrenamientos",
    "Lista entrenamientos",
    "Lista entrenamientos",
    "Lista entrenamientos",
    "Lista partidos",
    "Lista partidos",
    "Lista partidos",
    "Lista partidos",
    "Lista partidos",
    "Lista partidos",
    "Ver perfil",
    "Ver perfil",
    "Cambiar contraseña"
  ];

  const textsRight = [
    "Inserta tus credenciales",
    "",
    "Una vez dentro te apareceran los equipos del club a los que entrenas. \n\n Selecciona el que prefieras",
    "Aquí podrás ver y gestionar tus entrenamientos y partidos. \n\n Podrás ver las estadísticas generales de tu equipo. \n\n Podrás acceder al apartado de tus jugadores.",
    "Al pulsar sobre un día vacío podrás crear un entrenamiento o un partido. \n\n En este caso crearemos un partido",
    "El partido se crea antes de que se juegue por lo que solo habrá que añadir el nombre del rival.",
    "",
    "Una vez hayas jugado el partido podrás modificarlo pulsando sobre el partido que desees modificar y seleccionando la opción de 'Modificar Partido'.",
    "En esta pantalla tenemos tres pestañas distintas Actualizar, Análisis Equipo y Análisis Rival. \n\n Ahora nos centraremos en la de Actualizar. \n\n Aquí pondremos el resultado numérico y seleccionamos si ha sido 'Victoria', 'Empate' o 'Derrota'.",
    "En esta misma pantalla añadiremos las estadísticas individuales de los jugadores para cada partido. \n\n Luego estas se actualizan automáticamente para proporcionarnos las estadísticas totales del jugador y del equipo. \n\n Para ello pulsaremos sobre las estadísticas, en este caso pulsamos sobre 'Minutos Jugados'.",
    "Esto lo que hace es abrirnos un diálogo donde aparecen nuestros jugadores y el valor de la estadística a modificar.",
    "Modificamos el valor de la estadística con el valor real del partido salimos del diálogo pulsando fuera de el. \n\n Hacemos esto para cada estadística con valor numérico como son 'Minutos Jugados', 'Goles', 'Asistencias', 'Tarjetas Amarillas', 'Tarjetas Rojas'.",
    "Para 'Partido Jugado' y 'Titular' es diferente ya que solo tenemos que marcar o desmarcar al jugador según si ha jugado el partido o no. \n\n En este caso por defecto estarán todos marcados, si al final algún jugador no ha jugado el partido bastará con desmarcarlo.",
    "Para 'Titular' te apareceran todos desmarcados, por lo que tendrás que marcar a los jugadores que han sido titulares, al resto se les deja desmarcados.",
    "",
    "Una vez completado todo hay que guardarlo antes de ir a la siguiente pestaña.",
    "Vamos ahora con 'Análisis Equipo'\n\n Aquí podremos añadir la alineación que hemos utilizado en cada parte, además de poder añadir impresiones de como ha funcionado el equipo, como se hacía daño al rival y un apartado de observaciones para cada parte. \n\n Como podemos observar tenemos la lista de nuestros jugadores arriba en forma de maniquí.\n\n Esta lista se puede desplazar horizontalmente y puedes seleccionar cualquier jugador",
    "Al seleccionar cualquier jugador te sale un dialogo como este donde puedes elegir en que parte del partido añadirlo.",
    "Al seleccionar una parte te saldrá el jugador en el campo de dicha parte. \n\n Una vez tenemos al jugador en el campo podremos moverlo y colocarlo en la posición que prefiramos.",
    "También, por si te equivocas al colocar un jugador en una parte puedes pulsar sobre el jugador que esta en el campo y eliminarlo.",
    "Una vez has colocado a tus jugadores correctamente y añdido las impresiones de cada parte hay que pulsar el botón de guardar antes de ir a la última pestaña.",
    "En esta última pestaña 'Análisis Rival' podremos guardar las alineaciones por cada parte del equipo rival, así como un breve análisis de ellos.\n\nComo en la pestaña anterior tenemos una lista de jugadores, en este caso lo identificamos por el dorsal.\n\nComo puede haber jugadores con dorsales más grandes que 12 tenemos la opción de añadir un nuevo dorsal pulsando en el icono de +",
    "Al pulsar sobre el icono de + se nos abre un diálogo donde podremos poner el número del dorsal que queremos añadir\n\nUna vez añadido nos aparecerá como un jugador más que se puede utilizar.",
    "El funcionamiento es el mismo que en 'Análisis Equipo'\n\nAl pulsar sobre un jugador te sale la opción de elegir en que parte quieres ponerlo.",
    "Una vez añadido en la parte que queramos nos sale en el campo\n\nAquí lo podemos mover en la posición que preferamos\n\nY también por si nos hemos equivocado al pulsarlo lo podremos eliminar del campo.",
    "Rellenamos los campos de Análisis Rival y Observaciones.",
    "Al final de la pantalla tenemos un campo donde poder añadir los jugadores rivales destacados.",
    "Una vez rellenado todo pulsamos en el botón de guardar y ya podemos salir de la pantalla 'Modificar Partido'",
    "Ahora vamos a ver como se crea un entrenamiento.\n\nEl funcionamiento es el mismo que al crear un partido.\n\nPulsamos en un día que este vacío y elegimos la opción de 'Crear Entrenamiento'.",
    "Tenemos la opción de añadir una breve descripción de lo que se busca trabajar en esta sesión.\n\nY la posibilidad de añadir dos fotos de la sesión.\n\nEl funcionamiento es muy sencillo, para añadir la descripción pulsas en el campo 'Descripción'.\n\nY para añadir las imágenes pulsas en 'Seleccionar imagen 1' y 'Seleccionar imagen 2' si quieres añadir dos fotos.",
    "Cuando ya está todo completado pulsas en 'Crear entrenamiento' y esperas a que se cree y salga solo de esa pantalla.",
    "Podemos ver los partidos que hemos jugado para ver las estadísticas, nuestro análisis y el del rival.\n\nEl funcionamiento es el mismo, pulsamos sobre el partido que queremos ver y en el diálogo pulsamos 'Ver Partido'",
    "Nos sale el mismo formato que en 'Modificar Partido'.\n\nPrimero podemos visualizar el resultado y las estadísticas",
    "Por ejempmlo si pulsamos sobre la estadística 'Goles' no sale el jugador y el valor de la estadística.\n\nEl funcionamiento es el mismo para el resto de estadísticas.",
    "En el caso de 'Titular' o 'Partido Jugado' solo nos saldrá el nombre del jugador que cumple con la condición de la estadística.",
    "Aquí podremos visualizar nuestro propio análisis.\n\nPudiendo ver la alineación que utilizamos para cada parte y las impresiones.",
    "Lo mismo en 'Análisis Rival' podemos ver si hubo algún jugador destacado, podemos ver la alineación que utilizo el rival en cada parte y un pequeño análisis del rival.",
    "También podemos ver los entrenamientos que hemos subido.\n\nEl funcionamiento sigue siendo el mismo pulsamos sobre el entrenamiento que queremos ver y en el diálogo pulsamos en 'Ver Entrenamiento'.",
    "Aquí podemos ver las imagenes en pequeño, con un botón de guardar/compartir.\n\nY la descripción del entrenamiento.",
    "Si pulsamos sobre una imagen nos muestra la imagen completa.\n\nPara salir basta con pulsar fuera de la imagen.",
    "También podemos añadir la asistencia al entrenamiento pulsando sobre el entrenamiento que queremos añadir y sobre 'Añadir Asistencia'.",
    "Aquí nos aparece por defecto todos los jugadores marcados como que han asistido, si es así solo bastaría con apretar el botón de guardar.\n\nSi a faltado algún jugador al entrenamiento bastaría con desmarcarlo y te sale la opción de poner el motivo de la ausencia.\n\nUna vez has completado la asistencia pulsas en 'Guardar Asistencia' y esperas a que salga solo.",
    "En la pantalla principal del equipo podemos ver las estadísticas totales del equipo.\n\nEsto lo conseguimos si pulsamos sobre el botón 'Estadísticas' que se encuentra abajo a la izquierda.",
    "Aquí podemos ver las estadísticas totales del equipo.\n\nPero si pulsamos sobre una de ellas.",
    "Podemos ver la contribución de cada jugador en esa estadística.\n\nPodemos descargar el gráfico en un PDF, pulsando en 'Descargar PDF'.",
    "",
    "En la pantalla principal también podemos acceder a la lista de jugadores de tu equipo.\n\nEsto lo conseguimos si pulsamos sobre el botón 'Jugadores' que se encuentra abajo a la derecha.",
    "Aquí podemos acceder al apartado personal de cada jugador pulsando sobre uno de ellos.\n\nTambién podemos añadir un jugador, pulsando en el botón verde y rellenando los datos.\n\nY podemos ver las fichas finales de todos los jugadores y descargarlas.",
    "Una vez pulsamos sobre un jugador nos dirige a la pantalla personal del jugador.\n\nAquí podemos modificar el dorsal y la posición pulsando sobre la ficha de información del jugador.",
    "Por defecto te salen los valores que ya tenía.\n\nSi quieres modificar alguno solo bastaría con cambiarlo y pulsar al botón de guardar.",
    "En esta misma pantalla también podemos ver las estadísticas totales del jugador.\n\nSigue el mismo estilo que las estadísticas del equipo.",
    "Aquí podremos ver las estadísticas totales del jugador.",
    "Si pulsamos en una estadística como 'Goles', 'Asistencias', 'Min.Jugados', 'Tarjetas Amarillas' y 'Tarjetas Rojas'.\n\nNos saldrá una gráfica lineal con el valor de esta estadística en cada partido.\n\nEstas estadísticas también se pueden descargar.",
    "Si pulsamos en una estadística como 'Titularidades' o 'Partidos Jugados'.\n\nNos saldrá una gráfica circular con las veces que se ha sido titular o ha jugado el partido y las veces que no.\n\nEstas estadísticas también se pueden descargar.",
    "También podemos crear evaluaciones semanales para cada jugador y visualizarlas.",
    "Tenemos 3 métricas con las que medir estas evaluaciones.\n\nComportamiento, Técnica y Táctica.\n\nTambién tenemos un apartado para añadir observaciones.",
    "Primero elegimos la fecha para crear la evaluación.",
    "Después damos valor a las variables de las evaluaciones.\n\nY si fuese necesario podemos añadir alguna observación.\n\nY por último guardamos la evaluación.",
    "Aquí podemos visualizar las evaluaciones del jugador.\n\nTenemos dos apartados, una donde nos muestra el promedio mensual.\n\nY otra donde vemos la evaluaciones semanales tal cual lo hemos creado.",
    "Estas evaluaciones se pueden filtrar para que nos muestre las evaluaciones según el rango de fecha seleccionado.",
    "También podemos ver la asistencia a los entrenamientos del jugador.\n\nPulsamos sobre 'Ver asistencia entrenamientos'.",
    "Nos aparecen todas las asistencias y si ha asistido o no.\n\nTambién abajo de la pantalla nos sale la estadística de asistencia.\n\nPuedes filtrar por un rango de fecha para poder acotar los resultados. Pulsando sobre el icono al lado 'Asistencia Entrenamientos'.",
    "Y por último en esta pantalla se puede crear la ficha final del jugador.",
    "Sería ir rellenando todos los campos que aparecen en la pantalla.",
    "Durante toda la aplicación tenemos un menú desplegable situado arriba a la derecha.",
    "Al pulsarlo nos salen varias opciones.\n\n'Inicio' nos dirige a la pantalla de inicio directamente.\n\n'Entrenamientos' nos permite ver todos los entrenamientos de un equipo y buscar por fecha.\n\n'Partidos' lo mismo, nos permite visualizar todos los partidos en forma de lista y filtarlos por fecha o por nombre del rival.\n\n'Perfil' nos muuestra el perfil del usuario.",
    "Cuando pulsamos en 'Entrenamientos' nos sale esta pantalla.\n\nLo primero que tenemos que hacer es escoger el equipo del que queremos ver los entrenamientos.",
    "",
    "Una vez seleccionado nos sale una lista con todos los entrenamientos de ese equipo y la fecha en la que se ha realizado.\n\nSi pulsamos en el icono al lado del nombre 'Entrenamientos' nos aparecerá un opción para filtrar los entrenamientos.",
    "Aquí podemos filtrar por fechas.\n\nLa peculiaridad es que hay que escribir la fecha en este formato AAAA-MM-DD.\n\nNo hace falta poner la fecha exacta, puedes filtrar por año AAAA o por año y mes AAAA-MM",
    "",
    "Para ver la lista de partidos pulsamos en 'Partidos'.",
    "Cuando pulsamos en 'Partidos' nos sale esta pantalla.\n\nLo primero que tenemos que hacer es escoger el equipo del que queremos ver los partidos.",
    "",
    "Una vez seleccionado nos sale una lista con todos los partidos jugados y no jugados de ese equipo, el nombre del rival, la fecha en la que se ha realizado y un circulo que nos idica si ha sido victorio, empate o derrato dependiendo del color.\n\nAbajo de la pantalla nos sale las estadísticas de los partidos. El número de partidos jugados, el número de victorias, empates y derrotas, y el porcentaje de victorias.\n\nSi pulsamos en el icono al lado del nombre 'Partidos' nos aparecerá un opción para filtrar los partidos.",
    "Aquí podemos filtrar por fechas o por el nombre del rival.\n\nLa peculiaridad es que hay que escribir la fecha en este formato AAAA-MM-DD.\n\nNo hace falta poner la fecha exacta, puedes filtrar por año AAAA o por año y mes AAAA-MM\n\nPara filtrar por nombre del rival es necesario poner el nombre excto que tiene el rival.",
    "",
    "Por último, para ver el perfil del usuario hay que pulsar en 'Perfil'.",
    "Una vez pulsado nos aparecerá esta pantalla.\n\nAquí podemos ver los datos del usuario, el club al que pertenece y los equipos a los que entrena.\n\nTenemos la opción de cambiar la contraseña, si pulsamos sobre 'Cambiar contraseña'.",
    "Te dirige a esta pantalla donde te manda poner tu contraseña y la contraseña nueva dos veces.\n\nUna vez realizado hay que pulsar sobre el botón 'Guardar cambios'."
  ];

  const [currentIndex, setCurrentIndex] = useState(-1);
  const [menuOpen, setMenuOpen] = useState(false);

  const refs = {
    mockupImgRef: useRef(null),
    textLeftRef: useRef(null),
    textRightRef: useRef(null),
    headerRef: useRef(null),
    introTitleRef: useRef(null),
    tutorialEndRef: useRef(null),
    tutorialEndCardRef: useRef(null),
  };

  const {
    mockupImgRef,
    textLeftRef,
    textRightRef,
    headerRef,
    introTitleRef,
    tutorialEndRef,
    tutorialEndCardRef,
  } = refs;

  useTutorialScroll({
    mockups,
    textsLeft,
    textsRight,
    currentIndex,
    setCurrentIndex,
    refs,
  });

  return (
    <div className="min-h-screen bg-[var(--background-color)]">
      {/* HEADER */}
      <header
        ref={headerRef}
        id="main-header"
        className="w-full fixed top-0 left-0 z-50 transition-transform duration-300 bg-white shadow-md"
        style={{ transitionProperty: 'transform', transform: 'translateY(0)' }}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <div className="flex items-center gap-3">
            <img src="./images/logoSquadraSinFondo.png" alt="Logo Squadra" className="w-14 h-14 md:w-20 md:h-20 rounded-lg" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: 'var(--primary-color)', fontFamily: "'Segoe UI', sans-serif" }}>Squadra Base</h1>
          </div>

          <button
            id="menu-btn"
            onClick={() => setMenuOpen(v => !v)}
            className={`relative w-10 h-10 bg-white flex flex-col justify-center items-center md:hidden group ${menuOpen ? 'open' : ''}`}
          >
            <span className="block w-7 h-0.5 bg-[var(--primary-color)] rounded-full transition-all duration-300 origin-center"></span>
            <span className="block w-7 h-0.5 bg-[var(--primary-color)] rounded-full mt-1.5 transition-all duration-300 origin-center"></span>
            <span className="block w-7 h-0.5 bg-[var(--primary-color)] rounded-full mt-1.5 transition-all duration-300 origin-center"></span>
          </button>

          <nav id="menu" className="hidden md:flex gap-8 text-lg font-medium">
            <a href="./" className="hover:text-blue-500 transition-all duration-200">Inicio</a>
            <a href="./about" className="hover:text-blue-500 transition-all duration-200">Sobre nosotros</a>
            <a href="./tutorial" className="hover:text-blue-500 transition-all duration-200">Tutorial</a>
          </nav>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden w-64 absolute top-16 right-4 transition-all ${menuOpen ? '' : 'hidden'}`}>
          <div className="flex flex-col bg-white rounded-xl shadow-2xl overflow-hidden">
            <a href="./index.html" className="px-6 py-4 text-[var(--primary-color)] font-semibold border-b border-gray-200 hover:bg-gradient-to-r hover:from-[var(--primary-color)] hover:to-[var(--secondary-color)] hover:text-white transition-all">Inicio</a>
            <a href="./sobreNosotros.html" className="px-6 py-4 text-[var(--primary-color)] font-semibold border-b border-gray-200 hover:bg-gradient-to-r hover:from-[var(--primary-color)] hover:to-[var(--secondary-color)] hover:text-white transition-all">Sobre nosotros</a>
            <a href="./tutorial.html" className="px-6 py-4 text-[var(--primary-color)] font-semibold hover:bg-gradient-to-r hover:from-[var(--primary-color)] hover:to-[var(--secondary-color)] hover:text-white transition-all">Tutorial</a>
          </div>
        </div>
      </header>

      {/* INTRO TITLE */}
      <main className="h-[1600vh]">
        <section id="intro-title" ref={introTitleRef} className="h-screen flex justify-center items-center bg-[var(--background-color)]">
          <h1 className="text-[80px] md:text-[150px] font-bold text-[var(--primary-color)] flex gap-2 overflow-hidden">
            <span className="split-left">Tutorial</span>
            <span className="split-right bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] animate-gradient">Squadra Base</span>
          </h1>
        </section>

        <section id="tutorial-content" className="min-h-screen relative">
          {/* mockup fixed center */}
          <div id="mockup-container" className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-[350px] h-auto flex justify-center items-center">
            <img ref={mockupImgRef} id="mockup-image" src="" alt="Tutorial mockup" className="w-full h-auto transition-opacity duration-700 opacity-0" />
          </div>

          <div ref={textLeftRef} id="mockup-text-left" className="fixed top-1/2 left-[8%] -translate-y-1/2 w-[280px] text-lg text-[var(--primary-color)] opacity-0 transition-opacity duration-700 z-30 text-right font-bold whitespace-pre-line"></div>

          <div ref={textRightRef} id="mockup-text-right" className="fixed top-1/2 right-[8%] -translate-y-1/2 w-[280px] text-lg text-[var(--secondary-color)] opacity-0 transition-opacity duration-700 z-30 text-left bg-white/40 p-2 rounded whitespace-pre-line"></div>
        </section>
      </main>

      {/* tutorial end overlay */}
      <section id="tutorial-section">
        <div ref={tutorialEndRef} id="tutorial-end" className="fixed inset-0 flex justify-center items-center bg-black/40 opacity-0 pointer-events-none transition-opacity duration-700 z-50">
          <div ref={tutorialEndCardRef} className="bg-[var(--background-color)] rounded-2xl shadow-2xl p-8 max-w-md text-center scale-90 transition-transform duration-700">
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--primary-color)', fontFamily: 'var(--font-family)' }}>
              ¡Enhorabuena, has llegado al final del tutorial!
            </h2>
            <p className="text-lg mb-6" style={{ color: 'var(--secondary-color)', lineHeight: 1.6 }}>
              Ahora ya sabes cómo sacarle el máximo partido a <strong>Squadra Base</strong>.<br />Es hora de ponerlo en práctica y llevar a tu equipo al siguiente nivel.
            </p>
            <a href="./" className="bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] text-white font-semibold py-2 px-6 rounded-lg shadow-md transition">Ir a la aplicación</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: "#263238" }} className="w-full relative z-50">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[#B0BEC5] text-sm">© 2025 Squadra Base. Todos los derechos reservados.</span>
          <div className="flex gap-6 text-sm">
            <a href="./privacidad.html" className="text-[#B0BEC5] hover:text-gray transition">Políticas de privacidad</a>
            <a href="./terminosCondiciones.html" className="text-[#B0BEC5] hover:text-gray transition">Términos y condiciones</a>
          </div>
        </div>
      </footer>
    </div>
  );
}