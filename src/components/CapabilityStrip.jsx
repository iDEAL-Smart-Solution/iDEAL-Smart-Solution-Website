// src/components/CapabilityStrip.jsx
import { motion } from 'framer-motion';
import { Server, Layers, CreditCard, GitBranch, ShieldCheck, Database } from 'lucide-react';

const capabilities = [
  { label: 'Production Software', icon: Server },
  { label: 'Multi-Tenant Platforms', icon: Layers },
  { label: 'Payment Integrations', icon: CreditCard },
  { label: 'Business Automation', icon: GitBranch },
  { label: 'Secure by Design', icon: ShieldCheck },
  { label: 'Scalable Architecture', icon: Database },
];

const CapabilityStrip = () => {
  return (
    <section className="py-12 bg-gray-900 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="flex flex-col items-center gap-3 text-center group"
              >
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#00a8e8]/10 group-hover:border-[#00a8e8]/30 transition-all duration-300">
                  <Icon className="w-5 h-5 text-[#00a8e8]" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors leading-tight">
                  {cap.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CapabilityStrip;
