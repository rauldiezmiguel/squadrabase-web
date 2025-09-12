import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full" style={{ backgroundColor: "#263238" }}>
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
        {/* Texto de copyright */}
        <span className="text-[#B0BEC5] text-xs sm:text-sm">
          © 2025 Squadra Base. Todos los derechos reservados.
        </span>

        {/* Enlaces de privacidad y términos */}
        <div className="flex flex-wrap gap-4 text-xs sm:text-sm">
          <Link
            to="/politicasDePrivacidad"
            className="text-[#B0BEC5] hover:text-gray-500 transition-colors"
          >
            Políticas de privacidad
          </Link>
          <Link
            to="/terminosYCondiciones"
            className="text-[#B0BEC5] hover:text-gray-500 transition-colors"
          >
            Términos y condiciones
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
