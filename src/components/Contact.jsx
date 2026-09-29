// src/components/Contact.jsx
//
// Form submission is handled through a single isolated function: submitContactForm().
// To wire up a real backend or email service, update ONLY that function.
// The form UI, validation, and state management do not need to change.
//
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Mail,
  Building2,
  User,
  MessageSquare,
  MapPin,
  Phone,
  MessageCircle,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

// ─── Submission abstraction ────────────────────────────────────────────────
//
// Replace this function body when a backend endpoint or email service is ready.
// It receives the validated form data and must return:
//   { ok: true }               on success
//   { ok: false, error: string } on failure
//
async function submitContactForm(data) {
  // TODO: Replace with real API call, e.g.:
  //
  // const res = await fetch('/api/contact', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data),
  // });
  // if (!res.ok) return { ok: false, error: 'Server error. Please try again.' };
  // return { ok: true };
  //
  // For now we simulate network latency so the UI behaves correctly.
  await new Promise((resolve) => setTimeout(resolve, 900));
  // Return success. When a real endpoint exists, remove this line.
  return { ok: true };
}

// ─── Field validation ──────────────────────────────────────────────────────

function validate(data) {
  const errors = {};
  if (!data.name.trim()) errors.name = 'Name is required.';
  if (!data.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!data.message.trim()) errors.message = 'Message is required.';
  return errors;
}

// ─── Contact info ──────────────────────────────────────────────────────────

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'idealsolutionsupt@gmail.com',
    href: 'mailto:idealsolutionsupt@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+234 814 296 5634',
    href: 'tel:+2348142965634',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+234 814 296 5634',
    href: 'https://wa.me/2348142965634',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Ibadan, Nigeria',
    href: null,
  },
];

// ─── Field component ───────────────────────────────────────────────────────

const Field = ({ icon: Icon, label, id, error, children }) => (
  <div>
    <label
      htmlFor={id}
      className="flex items-center gap-2 text-gray-700 font-semibold text-sm mb-1.5"
    >
      <Icon className="w-4 h-4 text-[#00a8e8]" />
      {label}
    </label>
    {children}
    {error && (
      <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
        <AlertCircle className="w-3 h-3" />
        {error}
      </p>
    )}
  </div>
);

// ─── Main component ────────────────────────────────────────────────────────

const EMPTY_FORM = { name: '', email: '', organization: '', message: '' };

const Contact = () => {
  const [formData, setFormData]     = useState(EMPTY_FORM);
  const [errors, setErrors]         = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    const fieldErrors = validate(formData);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitContactForm(formData);
      if (result.ok) {
        setSubmitStatus('success');
        setFormData(EMPTY_FORM);
        setErrors({});
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 border ${
      errors[field] ? 'border-red-400' : 'border-gray-200'
    } rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00a8e8] focus:border-transparent transition-all bg-white`;

  return (
    <section id="contact" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <p className="text-[#00a8e8] text-lg font-semibold mb-2">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Have a system worth building?
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Tell us what you are trying to build. We will respond to understand the problem
            before talking about solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              const content = (
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-200 group">
                  <div className="w-10 h-10 rounded-xl bg-[#00a8e8]/10 border border-[#00a8e8]/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#00a8e8]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-0.5">{info.label}</p>
                    <p className="text-white font-semibold text-sm">{info.value}</p>
                  </div>
                </div>
              );

              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  {info.href ? (
                    <a href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </motion.div>
              );
            })}

            <div className="pt-4 text-gray-500 text-sm leading-relaxed">
              We typically respond within one business day.
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {submitStatus === 'success' ? (
              <div className="bg-white/5 border border-emerald-500/30 rounded-2xl p-10 text-center">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle className="w-8 h-8 text-emerald-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message received</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  We will review your message and get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitStatus(null)}
                  className="btn-secondary text-sm px-6 py-2.5"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5"
              >
                {/* Name */}
                <Field icon={User} label="Full Name" id="name" error={errors.name}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass('name')}
                    placeholder="Your full name"
                    autoComplete="name"
                  />
                </Field>

                {/* Email */}
                <Field icon={Mail} label="Email" id="email" error={errors.email}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass('email')}
                    placeholder="your.email@example.com"
                    autoComplete="email"
                  />
                </Field>

                {/* Organization (optional) */}
                <Field icon={Building2} label="Organisation (optional)" id="organization" error={errors.organization}>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className={inputClass('organization')}
                    placeholder="Company, school, or institution"
                    autoComplete="organization"
                  />
                </Field>

                {/* Message */}
                <Field icon={MessageSquare} label="Message" id="message" error={errors.message}>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClass('message')} resize-none`}
                    rows={5}
                    placeholder="Describe the problem you are trying to solve or the system you want to build."
                  />
                </Field>

                {/* Submission error */}
                {submitStatus === 'error' && (
                  <div className="flex items-start gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    Something went wrong. Please try again or reach out directly via email.
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
