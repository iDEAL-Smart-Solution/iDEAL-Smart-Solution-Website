// src/components/Founders.jsx
import { motion } from 'framer-motion';

const founders = [
  {
    name: "Bisiriyu Abdullah",
    role: "Technical Founder & CEO",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb65706bc?w=400&h=400&fit=crop&crop=face",
    description: "Full-stack engineer & systems architect passionate about scalable EdTech solutions that transform African education through technology.",
    linkedin: "https://linkedin.com/in/abdullahbisiriyu",
    twitter: "https://twitter.com/bisiriyu_dev"
  },
  {
    name: "Bello Sherifdeen",
    role: "Co-Founder & Education Lead",
    avatar: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=400&h=400&fit=crop&crop=face",
    description: "Seasoned educator and product strategist bringing real classroom insights to create intuitive, teacher-friendly digital tools.",
    linkedin: "https://linkedin.com/in/sherifdeenbello",
    twitter: "https://twitter.com/bello_edu"
  }
];

const Founders = () => {
  return (
    <section id="founders" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet the <span className="gradient-text">Founders</span>
          </h2>
          <p className="text-xl text-gray-600">Visionaries building the future of education in Africa</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card p-8 group hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Avatar with hover glow */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                  <img
                    src={founder.avatar}
                    alt={founder.name}
                    className="relative w-40 h-40 rounded-full object-cover border-4 border-white shadow-2xl"
                  />
                  <div className="absolute bottom-0 right-0 bg-blue-600 text-white p-3 rounded-full shadow-lg">
                    Verified
                  </div>
                </div>

                {/* Content */}
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-2xl font-bold text-gray-900">{founder.name}</h3>
                  <p className="text-blue-600 font-semibold text-lg mb-3">{founder.role}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{founder.description}</p>

                  {/* Social Links */}
                  <div className="flex justify-center md:justify-start gap-4">
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a
                      href={founder.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;