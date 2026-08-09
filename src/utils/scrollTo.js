/**
 * Smoothly scrolls to a section by its element id, accounting for the
 * sticky navbar height so the section title isn't hidden underneath it.
 */
export const scrollToSection = (id, offset = 80) => {
  const element = document.querySelector(id);
  if (!element) return;

  const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top, behavior: 'smooth' });
};
