// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home',         href: '#home' },
  { label: 'Solutions',    href: '#solutions' },
  { label: 'Products',     href: '#products' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'About',        href: '#about' },
  { label: 'Contact',      href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled]         = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  };

  return (
    <div className="ideal-nav-wrap">
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`ideal-nav ${scrolled ? 'is-scrolled' : ''}`}
      aria-label="Main navigation"
    >
      <div className="ideal-nav-bar">
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
          className="ideal-nav-brand"
          whileHover={{ scale: 1.03 }}
        >
          <img
            src="/assets/iDEAL_logo.png"
            alt="iDEAL Smart Solutions"
            className="h-9 w-auto"
          />
        </motion.a>

        {/* Desktop nav */}
        <div className="ideal-nav-links">
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className="ideal-nav-link"
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="ideal-nav-actions">
          <button
            className="ideal-nav-cta"
            onClick={() => scrollTo('#contact')}
          >
            <span>Start a project</span><i><ArrowUpRight size={17} /></i>
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="ideal-nav-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen
            ? <X className="h-6 w-6 text-gray-700" />
            : <Menu className="h-6 w-6 text-gray-700" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
          initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="ideal-mobile-menu"
          >
            <div className="ideal-mobile-links">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className="ideal-mobile-link"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="ideal-mobile-action">
              <button
                className="ideal-nav-cta"
                onClick={() => scrollTo('#contact')}
              >
                <span>Start a project</span><i><ArrowUpRight size={17} /></i>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
    </div>
  );
};

export default Navbar;
