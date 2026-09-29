import { ArrowDownRight, ArrowRight } from 'lucide-react';

const Hero = () => (
  <section id="home" className="hero-stage">
    <div className="hero-inner">
      <div className="hero-copy">
        <p className="eyebrow"><span className="live-dot" /> Software, in operation <span className="eyebrow-rule" /> Ibadan · Nigeria</p>
        <h1>We build<br className="mobile-break" /> <span className="hero-brand-word">software</span><br />that <em>runs</em> real<br className="mobile-break" /> businesses.</h1>
        <div className="hero-lower">
          <p className="hero-description">We design, build and operate the systems behind education, healthcare and business operations.</p>
          <div className="hero-actions">
            <a className="button-dark" href="#contact">Start a project <ArrowRight size={17} /></a>
            <a className="text-link" href="#products">Meet the products <ArrowDownRight size={16} /></a>
          </div>
        </div>
      </div>
      <div className="hero-art" aria-label="Live product interfaces from iDEAL Portal, Suite and CBT">
        <div className="hero-art-label"><span>01 / 04</span><span>Systems in production</span></div>
        <div className="hero-screen screen-back"><img src="/assets/screenshots/suite-dashboard.png" alt="iDEAL Suite management dashboard" /></div>
        <div className="hero-screen screen-front"><img src="/assets/screenshots/portal-dashboard.png" alt="iDEAL Portal school dashboard" /></div>
        <div className="hero-screen screen-small"><img src="/assets/screenshots/cbt-exam-interface.png" alt="iDEAL CBT exam interface" /></div>
        <div className="hero-art-caption"><span className="caption-index">A</span><span>Connected platforms.<br /><strong>One student identity.</strong></span><span className="caption-line" /></div>
      </div>
      <div className="hero-foot"><span>01 — 06</span><span>Independent products. Shared systems thinking.</span><span>Scroll to explore <ArrowDownRight size={15} /></span></div>
    </div>
  </section>
);

export default Hero;
