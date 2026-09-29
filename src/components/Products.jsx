// src/components/Products.jsx
//
// Screenshot placeholder constants — swap these paths for real screenshots when available.
// Each constant maps to a specific product interface.
//
export const PRODUCT_SCREENSHOTS = {
  PORTAL_DASHBOARD: '/assets/screenshots/portal-dashboard.png',
  CBT_EXAM_INTERFACE: '/assets/screenshots/cbt-exam-interface.png',
  SUITE_DASHBOARD: '/assets/screenshots/suite-dashboard.png',
  SALESHUB_DASHBOARD: '/assets/screenshots/saleshub-dashboard.png',
  CARE_DASHBOARD: '/assets/screenshots/care-dashboard.png',
};

import { motion } from 'framer-motion';
import {
  GraduationCap,
  HeartPulse,
  BarChart2,
  CheckCircle,
  Link2,
  CircleDot,
} from 'lucide-react';

// ─── Education Ecosystem ───────────────────────────────────────────────────

const educationProducts = [
  {
    id: 'cbt',
    name: 'iDEAL CBT',
    tagline: 'Computer-Based Testing Platform',
    status: 'Live',
    screenshot: PRODUCT_SCREENSHOTS.CBT_EXAM_INTERFACE,
    screenshotAlt: 'iDEAL CBT exam interface screenshot',
    features: [
      'Create and manage exams and question banks',
      'Run supervised exam sessions for students',
      'Automated grading, results, and reporting',
      'Manage students, staff, and classes',
      'Subscription-based access for schools',
    ],
  },
  {
    id: 'portal',
    name: 'iDEAL Portal',
    tagline: 'Multi-Tenant School Management Platform',
    status: 'Live',
    screenshot: PRODUCT_SCREENSHOTS.PORTAL_DASHBOARD,
    screenshotAlt: 'iDEAL Portal school dashboard screenshot',
    features: [
      'Results, report cards, and timetables',
      'Admissions, assignments, and teaching resources',
      'Fee management and student payment collection',
      'Each school gets its own branded portal and domain',
      'Separate portals for students, staff, and parents',
    ],
  },
  {
    id: 'suite',
    name: 'iDEAL Suite',
    tagline: 'Central Education Ecosystem Control Platform',
    status: 'Live',
    screenshot: PRODUCT_SCREENSHOTS.SUITE_DASHBOARD,
    screenshotAlt: 'iDEAL Suite management dashboard screenshot',
    features: [
      'Central management of schools, users, and subscriptions',
      'Platform-level configuration and operations',
      'Issues each student a Universal ID (UIN)',
      'A student\'s UIN is recognised across CBT and Portal',
      'Schools can adopt products independently — students don\'t need to re-register',
    ],
  },
];

// ─── Standalone Products ───────────────────────────────────────────────────

const standaloneProducts = [
  {
    id: 'care',
    name: 'iDEAL Care',
    tagline: 'Multi-Tenant Healthcare Operations Platform',
    status: 'In Development',
    screenshot: PRODUCT_SCREENSHOTS.CARE_DASHBOARD,
    screenshotAlt: 'iDEAL Care dashboard screenshot',
    icon: HeartPulse,
    accentColor: 'from-rose-500 to-pink-500',
    description:
      'A healthcare operations platform built for care facilities. It handles the full operational picture — from patient intake through to billing — in a single, secure, multi-tenant system.',
    features: [
      'Patient registration and admission management',
      'Care plans, assessments, and clinical notes',
      'Billing, payments, and subscription management',
      'Appointment scheduling and staff notifications',
      'Secure, isolated data per facility',
    ],
  },
  {
    id: 'saleshub',
    name: 'iDEAL SalesHub',
    tagline: 'Sales Operations and Commission Management Platform',
    status: 'Live',
    screenshot: PRODUCT_SCREENSHOTS.SALESHUB_DASHBOARD,
    screenshotAlt: 'iDEAL SalesHub dashboard screenshot',
    icon: BarChart2,
    accentColor: 'from-sky-500 to-cyan-500',
    description:
      'A platform that brings structure to distributed sales operations. Marketers record sales, leads review and approve them, commissions are calculated automatically, and every action is tracked — replacing spreadsheets and informal coordination.',
    features: [
      'Sales recording with approval and rejection workflows',
      'Refund handling with full audit trail',
      'Automatic commission and KPI calculation per marketer',
      'Role-based access for marketers, leads, and admins',
      'Email and in-app notifications on key events',
    ],
  },
];

// ─── Screenshot Placeholder ────────────────────────────────────────────────

const ScreenshotPlaceholder = ({ alt }) => (
  <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center gap-3 text-center p-6">
    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
      <CircleDot className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
    </div>
    <p className="text-xs text-gray-400 font-medium">{alt}</p>
    <p className="text-[10px] text-gray-300">Screenshot coming soon</p>
  </div>
);

// ─── Status Badge ──────────────────────────────────────────────────────────

const StatusBadge = ({ status }) => {
  const isLive = status === 'Live';
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
        isLive
          ? 'text-emerald-700 bg-emerald-50 border-emerald-200'
          : 'text-amber-600 bg-amber-50 border-amber-200'
      }`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${isLive ? 'bg-emerald-500' : 'bg-amber-500'}`} />
      {status}
    </span>
  );
};

// ─── Education Product Card ────────────────────────────────────────────────

const EducationProductCard = ({ product, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
  >
    {/* Screenshot */}
    <div className="h-48 bg-gray-50 border-b border-gray-100 overflow-hidden">
      <img
        src={product.screenshot}
        alt={product.screenshotAlt}
        className="w-full h-full object-cover object-top"
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }}
      />
      <div style={{ display: 'none' }} className="w-full h-full">
        <ScreenshotPlaceholder alt={product.screenshotAlt} />
      </div>
    </div>

    {/* Content */}
    <div className="p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#00a8e8] transition-colors">
            {product.name}
          </h4>
          <p className="text-sm text-gray-500 mt-0.5">{product.tagline}</p>
        </div>
        <StatusBadge status={product.status} />
      </div>

      <ul className="space-y-2">
        {product.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
            <CheckCircle className="w-4 h-4 text-[#00a8e8] flex-shrink-0 mt-0.5" strokeWidth={2} />
            {f}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

// ─── Standalone Product Card ───────────────────────────────────────────────

const StandaloneProductCard = ({ product, index }) => {
  const Icon = product.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
    >
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Screenshot */}
        <div className="h-64 lg:h-auto bg-gray-50 border-b lg:border-b-0 lg:border-r border-gray-100 overflow-hidden">
          <img
            src={product.screenshot}
            alt={product.screenshotAlt}
            className="w-full h-full object-cover object-top"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div style={{ display: 'none' }} className="w-full h-full">
            <ScreenshotPlaceholder alt={product.screenshotAlt} />
          </div>
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col">
          <div className="flex items-start gap-3 mb-4">
            <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${product.accentColor} flex items-center justify-center flex-shrink-0`}>
              <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h4 className="text-xl font-bold text-gray-900 group-hover:text-[#00a8e8] transition-colors">
                  {product.name}
                </h4>
                <StatusBadge status={product.status} />
              </div>
              <p className="text-sm text-gray-500 mt-0.5">{product.tagline}</p>
            </div>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-5">{product.description}</p>

          <ul className="space-y-2">
            {product.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-[#00a8e8] flex-shrink-0 mt-0.5" strokeWidth={2} />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Main Section ──────────────────────────────────────────────────────────

const Products = () => {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20"
        >
          <p className="section-subtitle">Our Products</p>
          <h2 className="section-title">
            Software we build and operate ourselves
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            Beyond client work, iDEAL builds and runs its own products. These systems solve real
            operational problems and demonstrate the depth of what we can build.
          </p>
        </motion.div>

        {/* ── iDEAL Education ───────────────────────────────── */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-start gap-4 mb-10 p-6 bg-violet-50 border border-violet-100 rounded-2xl"
          >
            <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-6 h-6 text-violet-600" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap mb-1">
                <h3 className="text-2xl font-bold text-gray-900">iDEAL Education Ecosystem</h3>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-violet-200 text-violet-700">
                  <Link2 className="w-3 h-3" />
                  Interconnected Platform
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                CBT, Portal, and Suite are not three separate products — they form one integrated
                education ecosystem. A student registered once through Suite can use both CBT and
                Portal without registering again, even if a school adopts the products at different
                times. Each school gets its own branded portal, while identity and subscriptions
                are managed centrally.
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationProducts.map((p, i) => (
              <EducationProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>

        {/* ── Standalone Products ───────────────────────────── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-1">Additional Products</h3>
            <p className="text-gray-500 text-sm">
              Products beyond education that demonstrate the breadth of what iDEAL builds.
            </p>
          </motion.div>

          <div className="flex flex-col gap-8">
            {standaloneProducts.map((p, i) => (
              <StandaloneProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
