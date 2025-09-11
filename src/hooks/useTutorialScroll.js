import { useState, useEffect, useRef } from "react";

export default function useTutorialScroll(mockupsLength) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const headerRef = useRef(null);
    const tutorialEndRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
        const scrollY = window.scrollY;
        const vh = window.innerHeight;
        const docHeight = document.body.scrollHeight - vh;

        // Ocultar cabecera al hacer scroll
        if (headerRef.current) {
            headerRef.current.style.transform = scrollY > 50 ? "translateY(-100%)" : "translateY(0)";
        }

        // Calcular índice de mockup
        const progress = scrollY / docHeight;
        const index = Math.floor(progress * (mockupsLength - 1));
        setCurrentIndex(index);

        // Pantalla final
        if (tutorialEndRef.current) {
            if (index >= mockupsLength - 1) {
            tutorialEndRef.current.style.opacity = 1;
            tutorialEndRef.current.style.pointerEvents = "auto";
            } else {
            tutorialEndRef.current.style.opacity = 0;
            tutorialEndRef.current.style.pointerEvents = "none";
            }
        }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [mockupsLength]);

    return { currentIndex, headerRef, tutorialEndRef };
}