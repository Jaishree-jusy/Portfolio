import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { personalInfo, navLinks } from '../constants/data';
import { scrollToSection } from '../utils/scrollTo';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <div className="container-content py-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="max-w-xs">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="flex items-center gap-2.5"
            >
              <span className="grid place-items-center h-9 w-9 rounded-lg bg-primary-400 text-ink font-display font-bold text-sm">
                {personalInfo.initials}
              </span>
              <span className="font-display font-semibold text-[15px]">{personalInfo.name}</span>
            </a>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              {personalInfo.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400 mb-4">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-sm text-slate-300 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400 mb-4">
              Connect
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid place-items-center h-10 w-10 rounded-full border border-slate-700 text-slate-300 hover:border-primary-400 hover:text-primary-400 transition-colors"
              >
                <FiGithub size={17} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid place-items-center h-10 w-10 rounded-full border border-slate-700 text-slate-300 hover:border-primary-400 hover:text-primary-400 transition-colors"
              >
                <FiLinkedin size={17} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="grid place-items-center h-10 w-10 rounded-full border border-slate-700 text-slate-300 hover:border-primary-400 hover:text-primary-400 transition-colors"
              >
                <FiMail size={17} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {year} {personalInfo.name}. All rights reserved.
          </p>
          <button
            onClick={() => scrollToSection('#home')}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-primary-400 transition-colors"
          >
            Back to top <FiArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
