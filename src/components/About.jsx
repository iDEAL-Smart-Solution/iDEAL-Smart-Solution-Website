// src/components/About.jsx
import { motion } from 'framer-motion';
import { MapPin, CalendarDays, Layers, ArrowRight } from 'lucide-react';

const facts = [
  {
    icon: CalendarDays,
    label: 'Founded',
    value: 'Ibadan, Nigeria',
  },
  {
    icon: Layers,
    label: 'Focus',
    value: 'Software development & product engineering',
  },
  {
    icon: MapPin,
    label: 'Based',
    value: 'Ibadan, Nigeria — building for Africa and beyond',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-subtitle">About iDEAL</p>
            <h2 className="section-title">
              A software development and product company
            </h2>

            <div className="space-y-5 text-gray-600 leading-relaxed mt-6">
              <p>
                iDEAL Smart Solutions is a software development and software product company.
                We design, build, and operate software systems for businesses and institutions
                — from early-stage product engineering to long-term platform development.
              </p>
              <p>
                We work across web applications, business management systems, multi-tenant
                platforms, payment-enabled applications, workflow automation, education
                technology, healthcare technology, and custom enterprise software.
              </p>
              <p>
                Beyond client work, we build and operate our own products: the iDEAL Education
                Ecosystem (CBT, Portal, Suite), iDEAL Care, and iDEAL SalesHub. These are not
                demos — they are production systems we maintain and evolve. Building our own
                software makes us better engineers for our clients.
              </p>
              <p>
                We are an African company. We understand the infrastructure, operational,
                and business context of building software in this environment — and we build
                accordingly.
              </p>
            </div>

            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 mt-8 text-[#00a8e8] font-semibold hover:gap-3 transition-all group"
            >
              Start a conversation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
            </motion.a>
          </motion.div>

          {/* Right — fact cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            {/* Tagline card */}
            <div className="bg-gray-900 text-white rounded-2xl p-8">
              <p className="text-2xl font-bold leading-snug mb-4">
                "These people build serious software systems."
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                That is the impression we want every prospective client to leave with. Not a
                web agency. Not a freelancer. A software engineering company that understands
                architecture, operations, and long-term maintainability.
              </p>
            </div>

            {/* Fact items */}
            {facts.map((fact, i) => {
              const Icon = fact.icon;
              return (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl p-5"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#e6f7ff] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#00a8e8]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">
                      {fact.label}
                    </p>
                    <p className="text-gray-900 font-semibold text-sm">{fact.value}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* Metrics row */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '11+',  label: 'Schools live on our platform' },
                { value: '800+', label: 'Active users across products' },
              ].map((m) => (
                <div
                  key={m.label}
                  className="bg-white border border-gray-100 rounded-2xl p-5 text-center"
                >
                  <div className="text-3xl font-black text-[#00a8e8] mb-1">{m.value}</div>
                  <div className="text-xs text-gray-500 font-medium leading-snug">{m.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
