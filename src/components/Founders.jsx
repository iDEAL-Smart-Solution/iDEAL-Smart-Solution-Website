// src/components/Founders.jsx
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const founders = [
  {
    name: 'Bisiriyu Abdullah',
    role: 'Technical Founder & CTO',
    avatar: '/assets/Bigboss_passport.JPG',
    bio: 'Software engineer with hands-on experience designing and building production systems across multiple domains. Responsible for the architecture, engineering decisions, and technical execution of iDEAL\'s products — from the multi-tenant education ecosystem to the SalesHub and Care platforms.',
    linkedin: 'https://linkedin.com/in/abdullahbisiriyu',
  },
  {
    name: 'Bello Sherifdeen',
    role: 'Co-Founder & CEO',
    avatar: "/assets/sherifdeen's_passport.jpg",
    bio: 'Brings domain expertise in education and operations, product management, and business development. Shapes what iDEAL builds and who it serves — ensuring our software solves real institutional problems, not hypothetical ones.',
    linkedin: 'https://linkedin.com/in/sherifdeenbello',
  },
];

const Founders = () => {
  return (
    <section id="founders" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <p className="section-subtitle">Leadership</p>
          <h2 className="section-title">The people behind iDEAL</h2>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            iDEAL was founded by two people with complementary skills and a shared conviction
            that African institutions deserve purpose-built software — not generic tools.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-md transition-all duration-300 group"
            >
              {/* Avatar + name */}
              <div className="flex items-center gap-5 mb-6">
                <div className="relative flex-shrink-0">
                  <img
                    src={founder.avatar}
                    alt={founder.name}
                    className="w-20 h-20 rounded-2xl object-cover border-2 border-gray-100 group-hover:border-[#00a8e8]/30 transition-colors duration-300"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{founder.name}</h3>
                  <p className="text-[#00a8e8] font-semibold text-sm mt-0.5">{founder.role}</p>
                </div>
              </div>

              {/* Bio */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{founder.bio}</p>

              {/* LinkedIn */}
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#0077b5] transition-colors"
                aria-label={`${founder.name} on LinkedIn`}
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
