// src/components/Founders.jsx
import { motion } from 'framer-motion';
import { Linkedin, Twitter, BadgeCheck } from 'lucide-react';

const founders = [
  {
    name: "Bisiriyu Abdullah",
    role: "Technical Founder & CTO",
    avatar: "/assets/Bigboss_passport.JPG",
    description: "A passionate software engineer with proven track records building scalable technology solutions across different industries. Driven by the challenges students face in accessing opportunities, he works to create a future where African talent thrives through technology and innovation.",
    linkedin: "https://linkedin.com/in/abdullahbisiriyu",
    twitter: "https://twitter.com/bisiriyu_dev"
  },
  {
    name: "Bello Sherifdeen",
    role: "Co-Founder (Product & Education) & CEO",
    avatar: "/assets/sherifdeen's_passport.jpg",
    description: "An experienced teacher, education strategist, and product manager who brings practical classroom insight into our products. Together, we combine technical expertise, product management excellence, and real teaching experience to build powerful, easy-to-use education technology systems that transform learning across Africa.",
    linkedin: "https://linkedin.com/in/sherifdeenbello",
    twitter: "https://twitter.com/bello_edu"
  }
];

const Founders = () => {
  return (
    <section id="founders" className="py-20 bg-gradient-to-b from-white to-[#e6f7ff]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">Leadership</p>
          <h2 className="section-title">
            Meet the <span className="gradient-text">Founders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
            Visionaries building innovative solutions across education, healthcare, and enterprise technology in Africa
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="card-modern group"
            >
              {/* Avatar Section */}
              <div className="flex flex-col items-center mb-6">
                <div className="relative">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00a8e8] to-cyan-400 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                  
                  <img
                    src={founder.avatar}
                    alt={founder.name}
                    className="relative w-32 h-32 rounded-full object-cover border-4 border-[#00a8e8]/20 shadow-xl group-hover:border-[#00a8e8] transition-all duration-300"
                  />
                  
                  {/* Verified Badge */}
                  <div className="absolute -bottom-2 -right-2 bg-[#00a8e8] text-white p-2 rounded-full shadow-lg">
                    <BadgeCheck className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{founder.name}</h3>
                <p className="text-[#00a8e8] font-semibold text-lg mb-4">{founder.role}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{founder.description}</p>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#e6f7ff] rounded-full flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={founder.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#e6f7ff] rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed">
              Together, we combine <span className="text-[#00a8e8] font-semibold">technical expertise</span> and 
              <span className="text-[#00a8e8] font-semibold"> real teaching experience</span> to build powerful, 
              easy-to-use education technology systems that transform learning across Africa.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founders;