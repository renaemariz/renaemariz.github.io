// useSectionObserver.ts
import { useEffect, useState } from "react";

export function useSectionObserver(): string {
  const [activeNav, setActiveNav] = useState<string>("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    if (sections.length === 0) return;

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updateState(entry.target.id);
        }
      });
    };

    const updateState = (id: string) => {
      setActiveNav((prev) => {
        if (prev === id) return prev;
        return id;
      });
    };
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: isMobile ? "-50% 0px -50% 0px" : "-40% 0px -40% 0px",
      threshold: 0,
    });

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!activeNav) return;

    const newHash = activeNav === "hero" ? " " : `#${activeNav}`;
    if (window.location.hash !== newHash) {
      const timeoutId = setTimeout(() => {
        window.history.replaceState(null, "", newHash);
      }, 200);

      return () => clearTimeout(timeoutId);
    }
  }, [activeNav]);

  return activeNav;
}
