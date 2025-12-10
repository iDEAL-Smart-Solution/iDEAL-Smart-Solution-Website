import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-36 px-4 bg-slate-50">
      {/* Tech Motion Graphics Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <svg className="absolute w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Grid Lines */}
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#00a8e8" strokeWidth="0.1" opacity="0.5"/>
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />

          {/* Animated Data Paths */}
          <motion.path
            d="M0 20 Q 25 20 40 40 T 80 40 T 100 60"
            fill="none"
            stroke="#00a8e8"
            strokeWidth="0.3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M0 60 Q 30 60 50 40 T 100 20"
            fill="none"
            stroke="#00a8e8"
            strokeWidth="0.3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 5, delay: 1, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Circuit Nodes */}
          {[
            { cx: 10, cy: 20 }, { cx: 90, cy: 80 }, 
            { cx: 20, cy: 80 }, { cx: 80, cy: 20 },
            { cx: 50, cy: 10 }, { cx: 50, cy: 90 }
          ].map((node, i) => (
            <motion.circle
              key={i}
              cx={node.cx}
              cy={node.cy}
              r="1"
              fill="#00a8e8"
              initial={{ opacity: 0.3, scale: 1 }}
              animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
              transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
            />
          ))}

          {/* Connecting Lines for Nodes */}
          <motion.path
            d="M10 20 L 20 80 L 50 90 L 90 80 L 80 20 L 50 10 Z"
            fill="none"
            stroke="#00a8e8"
            strokeWidth="0.1"
            strokeDasharray="1 1"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </svg>
        
        {/* Floating Hexagons */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`hex-${i}`}
            className="absolute border border-[#00a8e8]/20"
            style={{
              width: '100px',
              height: '115px',
              left: `${10 + i * 35}%`,
              top: `${20 + (i % 2) * 40}%`,
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20 + i * 5, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center bg-blue-50 border border-blue-200 rounded-full px-6 py-2 mb-6">
            <span className="text-[#00a8e8] font-medium text-sm">✨ Building Digital Solutions Across Industries</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 mb-6">
            Building Innovative & Affordable{' '}
            <span className="text-[#00a8e8]">Digital Solutions</span>
            <br />
            for Schools & Businesses in Africa
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mt-6 max-w-4xl mx-auto leading-relaxed">
            From education technology (CBT & school portals) to enterprise solutions and healthcare innovations — we build custom software that transforms businesses and institutions across Africa.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="btn-primary text-lg px-10 py-4 whitespace-nowrap">
            Request a Demo
          </button>
          <button className="btn-secondary text-lg px-10 py-4">
            Learn More
          </button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-20 flex flex-wrap justify-center gap-12 text-center"
        >
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#00a8e8]">5+</div>
            <div className="text-gray-600 font-medium">Schools Live</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#00a8e8]">400+</div>
            <div className="text-gray-600 font-medium">Active Users</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#00a8e8]">100%</div>
            <div className="text-gray-600 font-medium">Uptime</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[#00a8e8] rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-[#00a8e8] rounded-full"
          />
        </div>
      </motion.div> */}
    </section>
  );
};

export default Hero;