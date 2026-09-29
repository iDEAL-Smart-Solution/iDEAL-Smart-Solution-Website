// src/components/Footer.jsx
import { motion } from 'framer-motion';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Heart,
  ArrowUp,
  MessageCircle,
} from 'lucide-react';

const quickLinks = [
  { label: 'Home',         href: '#home' },
  { label: 'Solutions',    href: '#solutions' },
  { label: 'Products',     href: '#products' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'About',        href: '#about' },
  { label: 'Contact',      href: '#contact' },
];

const socialLinks = [
  {
    icon: Facebook,
    href: 'https://www.facebook.com/profile.php?id=61584542691264',
    color: 'hover:bg-[#1877f2]',
    label: 'Facebook',
  },
  {
    icon: Twitter,
    href: 'https://twitter.com/ideal_tech',
    color: 'hover:bg-[#1da1f2]',
    label: 'Twitter / X',
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/company/ideal-smart-solution',
    color: 'hover:bg-[#0077b5]',
    label: 'LinkedIn',
  },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/p/DRj3hYKiDYG/?igsh=MWUxMHZhajc3cG95Nw==',
    color: 'hover:bg-pink-600',
    label: 'Instagram',
  },
];

const contactItems = [
  {
    icon: Mail,
    value: 'idealsolutionsupt@gmail.com',
    href: 'mailto:idealsolutionsupt@gmail.com',
  },
  {
    icon: Phone,
    value: '+234 814 296 5634',
    href: 'tel:+2348142965634',
  },
  {
    icon: MessageCircle,
    value: 'WhatsApp',
    href: 'https://wa.me/2348142965634',
  },
  {
    icon: MapPin,
    value: 'Ibadan, Nigeria',
    href: null,
  },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white">
      {/* Top accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#00a8e8] to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <img
              src="/assets/iDEAL_logo.png"
              alt="iDEAL Smart Solutions"
              className="h-12 w-auto mb-4 rounded-lg"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Software development and product company. We design, build, and operate
              software systems for businesses and institutions.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
              <span>in Nigeria</span>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-gray-400 hover:text-white transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-[#00a8e8] group-hover:w-3 transition-all duration-300" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-5">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const inner = (
                  <span className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group">
                    <Icon className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-[#00a8e8] transition-colors" strokeWidth={1.5} />
                    <span className="text-sm break-all">{item.value}</span>
                  </span>
                );
                return (
                  <li key={item.value}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                      >
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-5">
              Follow Us
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08, y: -2 }}
                    className={`w-11 h-11 bg-white/8 border border-white/10 rounded-xl flex items-center justify-center ${social.color} transition-all duration-200`}
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
            <p className="mt-5 text-xs text-gray-600 leading-relaxed">
              © {new Date().getFullYear()} iDEAL Smart Solutions.
              <br />
              All rights reserved.
            </p>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>iDEAL Smart Solutions — Ibadan, Nigeria</p>
            <div className="flex items-center gap-6">
              {/* Placeholder links — update when pages exist */}
              <span className="hover:text-gray-400 cursor-default transition-colors">Privacy Policy</span>
              <span className="w-1 h-1 bg-gray-700 rounded-full" />
              <span className="hover:text-gray-400 cursor-default transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-11 h-11 bg-[#00a8e8] hover:bg-[#0087b5] text-white rounded-full flex items-center justify-center shadow-lg transition-colors z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" strokeWidth={2} />
      </motion.button>
    </footer>
  );
};

export default Footer;
