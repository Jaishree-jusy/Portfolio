import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { navLinks, personalInfo } from '../constants/data';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { scrollToSection } from '../utils/scrollTo';

const sectionIds = navLinks.map((link) => link.href.replace('#', ''));

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    scrollToSection(href);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-surface-border shadow-soft'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container-content flex items-center justify-between h-[72px]">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="flex items-center gap-2.5 group"
          aria-label={`${personalInfo.name} — home`}
        >
          <span className="grid place-items-center h-10 w-10 rounded-xl bg-accent text-white font-display font-bold text-base shadow-soft transition-colors duration-200 group-hover:bg-accent-dark">
            {personalInfo.initials}
          </span>
          <span className="hidden sm:block font-display font-semibold text-ink text-[15px] tracking-tight">
            {personalInfo.name}
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = activeId === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                    isActive ? 'text-accent' : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-primary-100"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <a
  href={personalInfo.resumeFile}
  target="_blank"
  rel="noopener noreferrer"
  className="btn-primary !py-2.5 !px-5 text-sm"
>
  Resume
</a>
        </div>

        <button
          className="lg:hidden grid place-items-center h-10 w-10 rounded-full border border-surface-border text-ink"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-white border-b border-surface-border"
          >
            <ul className="container-content flex flex-col py-4 gap-1">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '');
                const isActive = activeId === id;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className={`block px-4 py-3 rounded-xl text-[15px] font-medium transition-colors ${
                        isActive ? 'text-accent bg-primary-100' : 'text-ink-soft hover:bg-surface-card'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
              <li className="pt-2">
  <a
    href={personalInfo.resumeFile}
    target="_blank"
    rel="noopener noreferrer"
    className="btn-primary w-full text-sm"
  >
    View Resume
  </a>
</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
