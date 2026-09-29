// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-card shadow-xl py-3 mx-2 md:mx-4 mt-2 rounded-2xl md:rounded-3xl'
          : 'py-4 md:py-6 bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
          className="flex items-center gap-2"
          whileHover={{ scale: 1.03 }}
        >
          <img
            src="/assets/iDEAL_logo.png"
            alt="iDEAL Smart Solutions"
            className="h-8 md:h-10 w-auto"
          />
        </motion.a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              whileHover={{ y: -2 }}
              className="text-gray-600 hover:text-[#00a8e8] font-medium transition-colors text-sm"
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <button
            className="btn-secondary py-2 px-5 text-sm"
            onClick={() => scrollTo('#products')}
          >
            Explore Our Products
          </button>
          <button
            className="btn-primary py-2 px-5 text-sm"
            onClick={() => scrollTo('#contact')}
          >
            Start a Project
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
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
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-2 right-2 mt-2 bg-white rounded-2xl shadow-xl p-5 border border-gray-100"
          >
            <nav className="space-y-1" role="navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className="block px-4 py-2.5 text-gray-700 hover:text-[#00a8e8] hover:bg-blue-50 rounded-xl font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-2 mt-5 pt-5 border-t border-gray-100">
              <button
                className="btn-secondary w-full text-sm"
                onClick={() => scrollTo('#products')}
              >
                Explore Our Products
              </button>
              <button
                className="btn-primary w-full text-sm"
                onClick={() => scrollTo('#contact')}
              >
                Start a Project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
