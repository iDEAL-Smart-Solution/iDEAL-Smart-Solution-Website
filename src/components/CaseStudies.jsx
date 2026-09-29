// src/components/CaseStudies.jsx
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

// ─── Case study data ───────────────────────────────────────────────────────
//
// Structure: Problem → Solution → Key Workflows → Engineering Capabilities → Result
// Do not fabricate testimonials, customer names, or numerical outcomes.
//
const caseStudies = [
  {
    id: 'education-ecosystem',
    label: 'Education Technology',
    product: 'iDEAL Education Ecosystem',
    accent: 'from-violet-500 to-purple-600',
    accentLight: 'bg-violet-50 border-violet-100 text-violet-700',
    problem:
      'Schools were running exams on paper, managing results in spreadsheets, and had no unified view of student records across academic and administrative functions. Each school operated in isolation with no standardised tooling.',
    solution:
      'We built three interconnected platforms — a CBT exam platform, a multi-tenant school management portal, and a central Suite that manages identity, subscriptions, and platform-level operations. They are designed to work together but can also be adopted independently.',
    workflows: [
      'Exam creation, session management, grading, and result publication',
      'Student admission, fee payment, and report card generation',
      'Per-school branded portals with their own domain',
      'A single student UIN recognised across CBT and Portal',
      'Staff management, timetabling, and teaching resources',
    ],
    engineering: [
      'Multi-tenant architecture with per-school data isolation',
      'Three separate React SPAs sharing one ASP.NET Core API',
      'Paystack school subaccounts for payment processing',
      'Cloudflare R2 file storage',
      'Role-based authorization across student, staff, parent, and admin roles',
      'GitHub Actions CI/CD with VPS deployment',
    ],
    result:
      'The ecosystem is live across 11+ schools with over 800 active users. Schools that adopt one product can onboard additional products without re-registering their students.',
  },
  {
    id: 'saleshub',
    label: 'Sales Operations',
    product: 'iDEAL SalesHub',
    accent: 'from-sky-500 to-cyan-600',
    accentLight: 'bg-sky-50 border-sky-100 text-sky-700',
    problem:
      'A sales organisation needed to track distributed marketer activity, enforce an approval workflow for recorded sales, calculate commissions accurately on the server, and deliver timely notifications — without relying on manual spreadsheets or informal coordination.',
    solution:
      'We built SalesHub, a dedicated sales operations platform covering the full lifecycle from sale recording through to commission payout and KPI reporting. It serves marketers, distributors, marketing leads, and administrators in distinct role-separated workflows.',
    workflows: [
      'Marketers record sales; leads review and approve or reject',
      'Refunds are logged with full audit trail',
      'Commission and KPI calculations run server-side on approval',
      'Email and in-app notifications on key status changes',
      'Admin dashboard with operational reporting',
    ],
    engineering: [
      '.NET 10 / ASP.NET Core backend with React + TypeScript frontend',
      'PostgreSQL with Entity Framework Core',
      'Hangfire for background job processing',
      'JWT authentication with refresh token rotation',
      'ASP.NET Identity for user management',
      'OpenAPI / Scalar documentation',
    ],
    result:
      'SalesHub is live and in active use, replacing manual tracking and informal coordination with a single, auditable platform.',
  },
];

// ─── Card component ────────────────────────────────────────────────────────

const CaseStudyCard = ({ cs, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.12, duration: 0.6 }}
    className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
  >
    {/* Header bar */}
    <div className={`h-1.5 bg-gradient-to-r ${cs.accent}`} />

    <div className="p-8 md:p-10">
      {/* Label + product name */}
      <div className="flex items-center gap-3 flex-wrap mb-6">
        <span
          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${cs.accentLight}`}
        >
          {cs.label}
        </span>
        <h3 className="text-xl font-bold text-gray-900">{cs.product}</h3>
      </div>

      {/* Problem → Solution */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
            The Problem
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">{cs.problem}</p>
        </div>
        <div>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
            Our Approach
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">{cs.solution}</p>
        </div>
      </div>

      {/* Workflows + Engineering side by side */}
      <div className="grid md:grid-cols-2 gap-8 mb-8 pt-6 border-t border-gray-100">
        <div>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
            Key Workflows
          </p>
          <ul className="space-y-2">
            {cs.workflows.map((w) => (
              <li key={w} className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle
                  className="w-4 h-4 text-[#00a8e8] flex-shrink-0 mt-0.5"
                  strokeWidth={2}
                />
                {w}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
            Engineering Capabilities
          </p>
          <ul className="space-y-2">
            {cs.engineering.map((e) => (
              <li key={e} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00a8e8] flex-shrink-0 mt-1.5" />
                {e}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Result */}
      <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
          Result
        </p>
        <p className="text-gray-700 text-sm leading-relaxed">{cs.result}</p>
      </div>
    </div>
  </motion.div>
);

// ─── Section ───────────────────────────────────────────────────────────────

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <p className="section-subtitle">Case Studies</p>
          <h2 className="section-title">Problems we have solved</h2>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            Each case study shows the problem, how we approached it, the workflows we built,
            the engineering decisions we made, and what the result was.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col gap-10">
          {caseStudies.map((cs, i) => (
            <CaseStudyCard key={cs.id} cs={cs} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 pt-10 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <p className="text-gray-600 max-w-xl">
            Have a problem that needs a software system? We'd like to understand it.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary inline-flex items-center gap-2 group whitespace-nowrap"
          >
            Start a Project
            <ArrowRight
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              strokeWidth={2.5}
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
