// src/components/FounderProjects.jsx
import { motion } from 'framer-motion';
import { Home, ShoppingCart, Globe2, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'APPreciate',
    description: 'Real estate fractional investment platform enabling shared ownership of property assets.',
    icon: Home,
    gradient: 'from-emerald-500 to-teal-500',
    link: '#',
    logo: '/assets/Vector.png',
  },
  {
    title: 'Commerza',
    description: 'AI-powered Market-as-a-Service platform simplifying local commerce in Nigeria by connecting buyers and sellers — including location-based distance calculation.',
    icon: ShoppingCart,
    gradient: 'from-blue-500 to-cyan-500',
    link: '#',
  },
  {
    title: 'TBP (The Borderless Project)',
    description: 'A global connectivity platform for strategists working within the US$10 Trillion+ Neo-Polar Neutrality Global System — supporting global trade corridors and digital/physical protocol interoperability.',
    icon: Globe2,
    gradient: 'from-purple-500 to-pink-500',
    link: '#',
    logo: '/assets/TBP_logo.jpeg',
  },
];

const FounderProjects = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">Innovation Portfolio</p>
          <h2 className="section-title">Products Built by Our Technical Founder</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            Demonstrating expertise across diverse industries through successful product development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="card-modern group relative overflow-hidden"
              >
                {/* Gradient border on top */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`}></div>
                
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                {/* Icon or Logo */}
                <div className="relative mb-6">
                  {project.logo ? (
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 flex items-center justify-center p-2">
                      <img src={project.logo} alt={`${project.title} logo`} className="w-full h-full object-contain" />
                    </div>
                  ) : (
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} p-3.5 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                      <Icon className="w-full h-full text-white" strokeWidth={1.5} />
                    </div>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#00a8e8] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Learn More Link */}
                <a 
                  href={project.link}
                  className="inline-flex items-center gap-2 text-[#00a8e8] font-semibold group-hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Decorative corner element */}
                <div className={`absolute -bottom-10 -right-10 w-24 h-24 bg-gradient-to-br ${project.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Context */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              These projects showcase our founder's ability to build <span className="text-[#00a8e8] font-semibold">scalable, 
              innovative solutions</span> across multiple industries — from real estate to commerce and global connectivity. 
              This diverse experience brings valuable insights to iDEAL Smart Solution.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderProjects;