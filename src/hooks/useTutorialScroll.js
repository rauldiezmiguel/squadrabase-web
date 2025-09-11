import { useEffect } from "react";

export function useTutorialScroll({
  mockups,
  textsLeft,
  textsRight,
  currentIndex,
  setCurrentIndex,
  refs,
}) {
  useEffect(() => {
    let lastScrollY = window.scrollY;

    function onScroll() {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const docHeight = document.body.scrollHeight - vh;
      const progress = docHeight <= 0 ? 0 : scrollY / docHeight;
      const index = Math.floor(progress * (mockups.length - 1));

      const {
        mockupImgRef,
        textLeftRef,
        textRightRef,
        headerRef,
        introTitleRef,
        tutorialEndRef,
        tutorialEndCardRef,
      } = refs;

      // header hide/show
      if (scrollY > 50) {
        if (headerRef.current) headerRef.current.style.transform = "translateY(-100%)";

        if (index !== currentIndex) {
          setCurrentIndex(index);

          if (mockupImgRef.current) mockupImgRef.current.style.opacity = 0;
          if (textLeftRef.current) textLeftRef.current.style.opacity = 0;
          if (textRightRef.current) textRightRef.current.style.opacity = 0;

          setTimeout(() => {
            if (mockupImgRef.current) mockupImgRef.current.src = mockups[index] || "";
            if (textLeftRef.current) textLeftRef.current.textContent = textsLeft[index] || "";
            if (textRightRef.current) textRightRef.current.textContent = textsRight[index] || "";

            if (mockupImgRef.current) mockupImgRef.current.style.opacity = 1;
            if (textLeftRef.current) textLeftRef.current.style.opacity = 1;
            if (textRightRef.current) textRightRef.current.style.opacity = 1;
          }, 250);
        }
      } else {
        if (headerRef.current) headerRef.current.style.transform = "translateY(0)";
        if (mockupImgRef.current) mockupImgRef.current.style.opacity = 0;
        if (textLeftRef.current) textLeftRef.current.style.opacity = 0;
        if (textRightRef.current) textRightRef.current.style.opacity = 0;
      }

      // title animation
      if (introTitleRef.current) {
        const title = introTitleRef.current;
        if (scrollY > lastScrollY && scrollY > 50) title.classList.add("split-hidden");
        else if (scrollY < lastScrollY && scrollY < 100) title.classList.remove("split-hidden");
      }

      // tutorial end overlay
      if (tutorialEndRef.current && tutorialEndCardRef.current) {
        if (index >= mockups.length - 1) {
          tutorialEndRef.current.style.opacity = 1;
          tutorialEndRef.current.style.pointerEvents = "auto";
          tutorialEndCardRef.current.style.transform = "scale(1)";
        } else {
          tutorialEndRef.current.style.opacity = 0;
          tutorialEndRef.current.style.pointerEvents = "none";
          tutorialEndCardRef.current.style.transform = "scale(0.9)";
        }
      }

      lastScrollY = scrollY;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [currentIndex, mockups, textsLeft, textsRight, setCurrentIndex, refs]);
}
