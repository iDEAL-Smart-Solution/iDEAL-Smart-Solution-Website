import { ArrowUpRight } from 'lucide-react';

const capabilities = [
  ['Business platforms.', 'Software for the processes an organisation depends on.'],
  ['Enterprise systems.', 'Purpose-built systems shaped around complex operations.'],
  ['Multi-tenant applications.', 'Distinct organisations, working securely on shared platforms.'],
  ['Payment-enabled software.', 'Payments, subscriptions, refunds and commissions in the workflow.'],
  ['Education technology.', 'Tools for exams, school administration and student records.'],
  ['Healthcare software.', 'Connected operational workflows for care environments.'],
  ['Sales and operations systems.', 'Clear processes for approvals, performance and follow-through.'],
];

const WhatWeBuild = () => (
  <section id="solutions" className="capabilities-section">
    <div className="section-wrap capabilities-layout">
      <div className="capabilities-intro"><div className="section-kicker"><span>02</span><span>What we build</span></div><h2>Software for<br />the <em>real world.</em></h2><p>We start with the work that needs to happen. Then we build the system around it.</p></div>
      <div className="capability-list">{capabilities.map(([title, description], i) => <a href="#contact" className="capability-row" key={title}><span className="cap-index">0{i + 1}</span><div><h3>{title}</h3><p>{description}</p></div><ArrowUpRight size={20} /></a>)}</div>
    </div>
  </section>
);

export default WhatWeBuild;
