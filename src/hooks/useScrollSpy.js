import { useEffect, useState } from 'react';

/**
 * Tracks which section is currently in view to highlight the active nav link.
 * @param {string[]} ids - element ids (without '#') to observe
 * @param {number} offset - px offset from top to account for sticky navbar
 */
export const useScrollSpy = (ids, offset = 120) => {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + offset;
      let current = ids[0];

      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      }
      setActiveId(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ids, offset]);

  return activeId;
};
