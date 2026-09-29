// src/components/WhatWeBuild.jsx
import { motion } from 'framer-motion';
import {
  Globe,
  LayoutDashboard,
  CreditCard,
  GraduationCap,
  HeartPulse,
  Building2,
} from 'lucide-react';

const capabilities = [
  {
    icon: Globe,
    title: 'Web Applications',
    description:
      'Full-stack web applications built for real operational use — not just to look good in a browser. We cover frontend, backend, APIs, and deployment.',
    accent: 'from-sky-500 to-cyan-400',
  },
  {
    icon: LayoutDashboard,
    title: 'Business Management Systems',
    description:
      'Systems that run day-to-day operations: workflow automation, role-based access, approvals, reporting, and integrations with existing tools.',
    accent: 'from-blue-500 to-indigo-500',
  },
  {
    icon: CreditCard,
    title: 'FinTech & Payment Platforms',
    description:
      'Payment-enabled applications with subscription management, commission engines, refund handling, and webhook-secured payment provider integrations.',
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    icon: GraduationCap,
    title: 'Education Technology',
    description:
      'Multi-tenant school platforms, computer-based testing systems, result management, timetabling, and admission workflows — deployed at scale.',
    accent: 'from-violet-500 to-purple-500',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare Technology',
    description:
      'Clinical and care operations software covering patient management, admissions, assessments, billing, and scheduling — built with security and compliance in mind.',
    accent: 'from-rose-500 to-pink-500',
  },
  {
    icon: Building2,
    title: 'Custom Enterprise Software',
    description:
      'Purpose-built platforms for organisations with complex requirements: multi-tenant architecture, strict authorization models, integrations, and long-term maintainability.',
    accent: 'from-orange-500 to-amber-500',
  },
];

const WhatWeBuild = () => {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <p className="section-subtitle">What We Build</p>
          <h2 className="section-title">
            Software systems that run real operations
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            We design and build production software across a wide range of domains.
            Every engagement starts with understanding the business problem — not picking a technology.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                {/* Top accent bar */}
                <div
                  className={`absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r ${cap.accent} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cap.accent} flex items-center justify-center mb-6 shadow-sm`}
                >
                  <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00a8e8] transition-colors">
                  {cap.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {cap.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-12 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <p className="text-gray-600 text-lg max-w-xl">
            Have a project that doesn't fit neatly into a category? We work across
            industries and build to your specific requirements.
          </p>
          <a
            href="#contact"
            className="btn-primary whitespace-nowrap"
          >
            Start a Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeBuild;
