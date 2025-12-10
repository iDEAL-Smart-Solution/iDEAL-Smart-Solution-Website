// src/components/Footer.jsx
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
  MessageCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = ['About', 'Services', 'Case Studies', 'Products', 'Founders', 'Contact'];
  
  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61584542691264', color: 'hover:bg-[#1877f2]', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/ideal_tech', color: 'hover:bg-[#1da1f2]', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/ideal-smart-solution', color: 'hover:bg-[#0077b5]', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/p/DRj3hYKiDYG/?igsh=MWUxMHZhajc3cG95Nw==', color: 'hover:bg-gradient-to-r hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af]', label: 'Instagram' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-[#00a8e8] via-cyan-400 to-teal-400"></div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <img 
              src="/assets/iDEAL_logo.png" 
              alt="iDEAL Smart Solution" 
              className="h-14 w-auto mb-4 rounded-lg shadow-lg" 
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              An African company building innovative technology solutions for African institutions and businesses.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              <span>in Nigeria</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-400 hover:text-[#00a8e8] transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-[#00a8e8] group-hover:w-4 transition-all duration-300"></span>
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-6 text-white">Get in Touch</h3>
            <div className="space-y-4">
              <a 
                href="mailto:idealsolutionsupt@gmail.com"
                className="flex items-start gap-3 text-gray-400 hover:text-[#00a8e8] transition-colors group"
              >
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm break-all">idealsolutionsupt@gmail.com</span>
              </a>
              <a 
                href="tel:+2348142965634"
                className="flex items-center gap-3 text-gray-400 hover:text-[#00a8e8] transition-colors group"
              >
                <Phone className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm">+234 814 296 5634</span>
              </a>
              <a 
                href="https://wa.me/2348142965634"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-[#25D366] transition-colors group"
              >
                <MessageCircle className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm">WhatsApp</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Ibadan, Nigeria</span>
              </div>
            </div>
          </motion.div>

          {/* Social Media & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-6 text-white">Connect With Us</h3>
            <div className="flex flex-wrap gap-3 mb-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className={`w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center ${social.color} transition-all duration-300 shadow-lg`}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Building innovative software solutions for African businesses, institutions, and beyond.
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2025 iDEAL Smart Solution. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-[#00a8e8] transition-colors">Privacy Policy</a>
              <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
              <a href="#" className="hover:text-[#00a8e8] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#00a8e8] hover:bg-[#0087b5] text-white rounded-full flex items-center justify-center shadow-lg transition-colors z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;