// src/components/Footer.jsx
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone,
  MapPin
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-1">
            <h2 className="text-4xl font-black mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                iDEAL
              </span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              An African company building world-class technology for African schools and beyond.
            </p>
            <p className="text-xs text-gray-500 mt-6">© 2025 iDEAL Smart Solution. All rights reserved.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              {['About', 'Services', 'Case Studies', 'Products', 'Founders', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-cyan-400 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get in Touch</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>idealsolutionsupt@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+2348142965634</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Ibadan, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Social Media - REAL ICONS */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/idealsmartsolution"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all"
              >
                <Facebook className="w-6 h-6" />
              </a>

              <a
                href="https://twitter.com/ideal_tech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-sky-500 hover:scale-110 transition-all"
              >
                <Twitter className="w-6 h-6" />
              </a>

              <a
                href="https://linkedin.com/company/ideal-smart-solution"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-blue-700 hover:scale-110 transition-all"
              >
                <Linkedin className="w-6 h-6" />
              </a>

              <a
                href="https://instagram.com/ideal_tech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-gradient-to-r from-pink-500 to-orange-500 hover:scale-110 transition-all"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>

            <p className="text-xs text-gray-500 mt-8">
              Building the future of education in Africa
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;