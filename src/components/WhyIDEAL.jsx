// src/components/WhyIDEAL.jsx
import { motion } from 'framer-motion';
import {
  PackageCheck,
  Network,
  GitBranch,
  ShieldCheck,
  Handshake,
} from 'lucide-react';

const differentiators = [
  {
    icon: PackageCheck,
    title: 'We build and operate our own products',
    description:
      'iDEAL CBT, Portal, Suite, Care, and SalesHub are not demos or proofs of concept. They are production systems we design, maintain, and evolve. We apply that same standard to client work.',
  },
  {
    icon: Network,
    title: 'We think in systems, not just screens',
    description:
      'Good software is not just a good-looking UI. We think about data models, authorization boundaries, background processing, integrations, and how the system will behave two years from now.',
  },
  {
    icon: GitBranch,
    title: 'We understand business workflows',
    description:
      'Before we write code, we map the process. Approval chains, edge cases, role-based access, multi-step operations — we model the real workflow, not a simplified version of it.',
  },
  {
    icon: ShieldCheck,
    title: 'We build for real operational use',
    description:
      'Security, data integrity, performance under load, audit trails, and failure handling are not optional extras. They are part of how we build by default.',
  },
  {
    icon: Handshake,
    title: 'We stay involved beyond the launch',
    description:
      'We are not a delivery-and-disappear team. We offer ongoing development, maintenance, and support. Long-term relationships with the systems we build are how we work.',
  },
];

const WhyIDEAL = () => {
  return (
    <section id="why-ideal" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Header */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <p className="section-subtitle">Why iDEAL</p>
            <h2 className="section-title">
              What makes working with us different
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mt-4 mb-8">
              There are many software development teams. Here is what we believe actually
              distinguishes the work we do.
            </p>

            {/* Mini metric */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="text-center min-w-[64px]">
                  <div className="text-3xl font-black text-[#00a8e8] leading-none">11+</div>
                  <div className="text-xs text-gray-500 mt-1 font-medium">Schools Live</div>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <p className="text-sm text-gray-600 leading-relaxed">
                  iDEAL CBT, Portal, and SalesHub are in active production use.
                </p>
              </div>
              <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="text-center min-w-[64px]">
                  <div className="text-3xl font-black text-[#00a8e8] leading-none">800+</div>
                  <div className="text-xs text-gray-500 mt-1 font-medium">Active Users</div>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <p className="text-sm text-gray-600 leading-relaxed">
                  The education ecosystem is deployed across multiple schools with 800+ active users.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — Differentiator list */}
          <div className="space-y-6">
            {differentiators.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.09, duration: 0.5 }}
                  className="flex gap-5 p-6 bg-white border border-gray-100 rounded-2xl hover:border-[#00a8e8]/20 hover:shadow-sm transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#e6f7ff] flex items-center justify-center flex-shrink-0 group-hover:bg-[#00a8e8] transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#00a8e8] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyIDEAL;
