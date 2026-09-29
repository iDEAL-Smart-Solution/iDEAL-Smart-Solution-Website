import { ArrowUpRight } from 'lucide-react';

const areas = [
  { number: '01', name: 'Education', detail: 'Exams, school operations and a connected student identity.', image: '/assets/screenshots/portal-dashboard.png', alt: 'iDEAL Portal school operations interface', status: 'Education ecosystem · Live' },
  { number: '02', name: 'Healthcare', detail: 'Patient and care operations, designed as a connected workflow.', image: null, alt: '', status: 'iDEAL Care · In development' },
  { number: '03', name: 'Business & Sales', detail: 'Sales activity, approvals, commissions and operational reporting.', image: '/assets/screenshots/saleshub-dashboard.png', alt: 'iDEAL SalesHub operations interface', status: 'iDEAL SalesHub · Live' },
];

const Industries = () => (
  <section id="industries" className="industries-section">
    <div className="section-wrap"><div className="section-kicker"><span>03</span><span>Where the systems work</span><span className="kicker-line" /></div><div className="industries-heading"><h2>Different work.<br /><em>Real systems.</em></h2><p>We work across domains, bringing the same care for workflow, people and the realities of operating software.</p></div>
      <div className="industry-stories">{areas.map((area) => <article className={`industry-story ${area.image ? '' : 'industry-story-care'}`} key={area.number}><div className="industry-copy"><span>{area.number} / {area.status}</span><h3>{area.name}</h3><p>{area.detail}</p></div>{area.image ? <div className="industry-image"><img src={area.image} alt={area.alt} loading="lazy" /><ArrowUpRight size={20} /></div> : <div className="industry-care-flow"><span>Patient</span><i>→</i><span>Assessment</span><i>→</i><span>Care</span><i>→</i><span>Billing</span></div>}</article>)}</div>
      <p className="industry-note">Our work spans payment-enabled platforms, enterprise operations, and custom software beyond these examples.</p>
    </div>
  </section>
);

export default Industries;
