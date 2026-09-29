// src/components/Hero.jsx
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32 px-4 bg-slate-50"
    >
      {/* ── Background: subtle tech grid + animated paths ─────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <svg
          className="absolute w-full h-full opacity-[0.12]"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* Grid */}
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#00a8e8" strokeWidth="0.15" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />

          {/* Animated data paths — restrained, single pass */}
          <motion.path
            d="M0 30 Q 30 30 45 50 T 100 50"
            fill="none"
            stroke="#00a8e8"
            strokeWidth="0.25"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          />
          <motion.path
            d="M0 70 Q 40 70 55 50 T 100 30"
            fill="none"
            stroke="#00a8e8"
            strokeWidth="0.25"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 6, delay: 1.5, repeat: Infinity, ease: 'linear' }}
          />

          {/* Node pulses */}
          {[
            { cx: 15, cy: 30 }, { cx: 85, cy: 70 },
            { cx: 50, cy: 15 }, { cx: 50, cy: 85 },
          ].map((n, i) => (
            <motion.circle
              key={i}
              cx={n.cx}
              cy={n.cy}
              r="0.8"
              fill="#00a8e8"
              initial={{ opacity: 0.2 }}
              animate={{ opacity: [0.2, 0.8, 0.2], r: [0.8, 1.4, 0.8] }}
              transition={{ duration: 3.5, delay: i * 0.7, repeat: Infinity }}
            />
          ))}

          {/* Connector polygon */}
          <motion.path
            d="M15 30 L 50 15 L 85 30 L 85 70 L 50 85 L 15 70 Z"
            fill="none"
            stroke="#00a8e8"
            strokeWidth="0.08"
            strokeDasharray="2 2"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.25, 0.1] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </svg>

        {/* Two very subtle rotating hexagons for depth */}
        {[0, 1].map((i) => (
          <motion.div
            key={i}
            className="absolute border border-[#00a8e8]/10"
            style={{
              width: 160 + i * 80,
              height: 185 + i * 92,
              left: `${18 + i * 42}%`,
              top: `${25 + i * 30}%`,
              clipPath: 'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 30 + i * 10, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </div>

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Label badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-blue-50 border border-blue-200 rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00a8e8] mr-2.5 animate-pulse" />
            <span className="text-[#00a8e8] font-semibold text-sm tracking-wide">
              Software Development &amp; Product Company
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-gray-900 mb-6"
        >
          We design, build and{' '}
          <br className="hidden sm:block" />
          operate{' '}
          <span className="text-[#00a8e8]">software systems</span>
          <br className="hidden sm:block" />
          for businesses and institutions.
        </motion.h1>

        {/* Supporting statement */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          From multi-tenant platforms and payment-integrated systems to education and
          healthcare software — we build production software that runs real operations.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            className="btn-primary text-base px-8 py-3.5 flex items-center gap-2 group"
            onClick={() => scrollTo('contact')}
          >
            Start a Project
            <ArrowRight
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              strokeWidth={2.5}
            />
          </button>
          <button
            className="btn-secondary text-base px-8 py-3.5"
            onClick={() => scrollTo('products')}
          >
            Explore Our Products
          </button>
        </motion.div>

        {/* Verified capability pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-3 text-sm text-gray-500"
        >
          {[
            'Production Software',
            'Multi-Tenant Platforms',
            'Payment Integrations',
            'CI/CD Deployment',
            '11+ Schools · 800+ Users',
          ].map((pill) => (
            <span
              key={pill}
              className="px-4 py-1.5 bg-white border border-gray-200 rounded-full shadow-sm font-medium"
            >
              {pill}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────────────── */}
      <motion.button
        aria-label="Scroll down"
        onClick={() => scrollTo('solutions')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 hover:text-[#00a8e8] transition-colors"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-6 h-6" strokeWidth={1.5} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
