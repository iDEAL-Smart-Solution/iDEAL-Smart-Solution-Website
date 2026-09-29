// src/components/HowWeBuild.jsx
import { motion } from 'framer-motion';
import {
  Search,
  GitMerge,
  Code2,
  FlaskConical,
  Rocket,
  RefreshCw,
} from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Understand',
    description:
      'We start by mapping the business problem — the workflows, the users, the edge cases, the constraints. We do not start writing code until we understand what the software actually needs to do.',
  },
  {
    number: '02',
    icon: GitMerge,
    title: 'Architect',
    description:
      'We design the system before we build it — data models, authorization boundaries, integration points, and how components communicate. Architecture decisions made here shape everything that follows.',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Build',
    description:
      'We build iteratively with clean, maintainable code. We use the right tools for the problem — not the trendiest stack. Security, performance, and long-term readability are considered from the first commit.',
  },
  {
    number: '04',
    icon: FlaskConical,
    title: 'Validate',
    description:
      'We test functionality against real requirements. Where appropriate, we write automated unit and integration tests. We treat edge cases as first-class concerns, not afterthoughts.',
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Deploy',
    description:
      'We ship to production using CI/CD pipelines, containerised environments, and structured release processes. Deployment is repeatable, not manual.',
  },
  {
    number: '06',
    icon: RefreshCw,
    title: 'Improve',
    description:
      'Software is never done. We stay involved — monitoring, iterating, adding features, and refactoring as the business evolves. We care about the system after it goes live.',
  },
];

const HowWeBuild = () => {
  return (
    <section id="how-we-build" className="py-24 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20"
        >
          <p className="text-[#00a8e8] text-lg font-semibold mb-2">How We Build</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Engineering for real operational use
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            We care about business workflows, architecture, integrations, security, testing, and
            long-term maintainability — not just delivering a working demo.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/10">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-gray-900 p-8 group hover:bg-gray-800/60 transition-colors duration-300"
              >
                {/* Number + Icon */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-4xl font-black text-white/10 group-hover:text-[#00a8e8]/20 transition-colors tabular-nums">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#00a8e8]/10 group-hover:border-[#00a8e8]/20 transition-all duration-300">
                    <Icon className="w-5 h-5 text-[#00a8e8]" strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00a8e8] transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <p className="text-gray-400 text-base max-w-xl leading-relaxed">
            This process applies whether we are building a two-week internal tool or a
            multi-year enterprise platform. The rigour scales with the complexity.
          </p>
          <a href="#contact" className="btn-primary whitespace-nowrap flex-shrink-0">
            Start a Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeBuild;
