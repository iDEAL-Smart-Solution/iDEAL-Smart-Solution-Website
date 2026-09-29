// src/components/Industries.jsx
import { motion } from 'framer-motion';
import {
  GraduationCap,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Briefcase,
  ArrowRight,
} from 'lucide-react';

const industries = [
  {
    icon: GraduationCap,
    name: 'Education',
    summary:
      'School management platforms, computer-based testing, multi-tenant portals, admissions, fee management, and ecosystem-level integrations.',
    proof: 'iDEAL Education Ecosystem — live across 11+ schools, 800+ users',
    accent: 'bg-violet-50 border-violet-100',
    iconBg: 'bg-violet-100 text-violet-600',
  },
  {
    icon: HeartPulse,
    name: 'Healthcare',
    summary:
      'Patient management, admissions, care operations, billing, scheduling, and clinical workflows — built with tenant-aware authorization and secure data handling.',
    proof: 'iDEAL Care — in active development',
    accent: 'bg-rose-50 border-rose-100',
    iconBg: 'bg-rose-100 text-rose-600',
  },
  {
    icon: Landmark,
    name: 'Financial Technology',
    summary:
      'Payment-integrated platforms, subscription management, refund processing, secure webhook handling, and Paystack subaccount management.',
    proof: 'Integrated in iDEAL Portal, iDEAL Care, and SalesHub',
    accent: 'bg-emerald-50 border-emerald-100',
    iconBg: 'bg-emerald-100 text-emerald-600',
  },
  {
    icon: ShoppingBag,
    name: 'Sales & Commerce',
    summary:
      'Sales recording, distributor and marketer workflows, approval chains, commission calculation, KPI tracking, and notification delivery.',
    proof: 'iDEAL SalesHub — live',
    accent: 'bg-sky-50 border-sky-100',
    iconBg: 'bg-sky-100 text-sky-600',
  },
  {
    icon: Briefcase,
    name: 'Enterprise Operations',
    summary:
      'Business process automation, role-based access control, audit trails, background job processing, file storage, and email delivery infrastructure.',
    proof: 'Applied across all iDEAL products',
    accent: 'bg-amber-50 border-amber-100',
    iconBg: 'bg-amber-100 text-amber-600',
  },
];

const Industries = () => {
  return (
    <section id="industries" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <p className="section-subtitle">Industries</p>
          <h2 className="section-title">
            Where we have shipped software
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            Our work spans multiple industries. These are not hypothetical areas of interest —
            each represents software we have built and operated.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09, duration: 0.5 }}
                className={`border rounded-2xl p-7 ${ind.accent} hover:shadow-md transition-all duration-300 group`}
              >
                {/* Icon */}
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${ind.iconBg}`}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{ind.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{ind.summary}</p>

                {/* Proof line */}
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 border-t border-gray-200/60 pt-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00a8e8] flex-shrink-0" />
                  {ind.proof}
                </div>
              </motion.div>
            );
          })}

          {/* "More" card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: industries.length * 0.09, duration: 0.5 }}
            className="border border-dashed border-gray-300 rounded-2xl p-7 flex flex-col items-start justify-between bg-white hover:border-[#00a8e8] transition-colors duration-300 group"
          >
            <div>
              <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center mb-5 group-hover:bg-[#e6f7ff] transition-colors">
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#00a8e8] transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Your Industry</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We build for problems, not predefined verticals.
                If you have a complex workflow that needs a software system, we want to hear about it.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-6 text-sm font-semibold text-[#00a8e8] inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
            >
              Start a conversation
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
