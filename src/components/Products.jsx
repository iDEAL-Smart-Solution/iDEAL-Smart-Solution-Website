import { ArrowUpRight } from 'lucide-react';

const products = [
  { name: 'iDEAL CBT', note: 'Computer-based testing', status: 'Live', image: '/assets/screenshots/cbt-exam-interface.png', alt: 'CBT exam interface' },
  { name: 'iDEAL Portal', note: 'Multi-tenant school management', status: 'Live', image: '/assets/screenshots/portal-dashboard.png', alt: 'Portal school dashboard' },
  { name: 'iDEAL Suite', note: 'Central ecosystem management', status: 'Live', image: '/assets/screenshots/suite-dashboard.png', alt: 'Suite management dashboard' },
];

const Products = () => (
  <section id="products" className="products-section">
    <div className="section-wrap">
      <div className="section-kicker"><span>01</span><span>Products we operate</span><span className="kicker-line" /></div>
      <div className="products-heading"><h2>Built for the work<br />that <em>matters.</em></h2><p>Our products are working systems, shaped by the people and organisations who use them every day.</p></div>
      <div className="ecosystem-flow" aria-label="The education ecosystem connects CBT, Portal and Suite through one student identity">
        <span className="flow-label">THE EDUCATION ECOSYSTEM</span>
        <div className="flow-track"><span>CBT</span><i /><span>Portal</span><i /><span>Suite</span><b>One student identity · UIN</b></div>
      </div>
      <div className="education-products">
        {products.map((product, i) => <article className={`product-panel product-panel-${i + 1}`} key={product.name}>
          <div className="product-image"><img src={product.image} alt={product.alt} loading="lazy" /><span className="product-number">0{i + 1}</span><span className="product-state"><i />{product.status}</span></div>
          <div className="product-meta"><div><h3>{product.name}</h3><p>{product.note}</p></div><ArrowUpRight size={20} aria-hidden="true" /></div>
        </article>)}
      </div>
      <div className="product-footnote"><span>One ecosystem, designed to work together.</span><span>Schools can adopt each product independently; student identity travels with them.</span></div>

      <article className="sales-story">
        <div className="sales-copy"><div className="section-kicker"><span>02</span><span>Sales operations · Live</span></div><h3>From sale<br />to <em>signal.</em></h3><p>SalesHub gives a distributed sales team a shared, auditable way to record activity, approve sales and track performance.</p><div className="workflow-line"><span>Sale</span><i>→</i><span>Approval</span><i>→</i><span>Commission</span><i>→</i><span>KPI</span><i>→</i><span>Notification</span></div></div>
        <div className="sales-image"><img src="/assets/screenshots/saleshub-dashboard.png" alt="iDEAL SalesHub operations dashboard" loading="lazy" /><span>iDEAL SalesHub / Operations</span></div>
      </article>

      <article className="care-story"><div className="care-top"><div><div className="section-kicker"><span>03</span><span>Healthcare · In development</span></div><h3>Care, coordinated.</h3></div><p>iDEAL Care is being built to bring care operations into one connected workflow, from the first patient interaction through day-to-day administration.</p></div>
        <div className="care-flow" aria-label="Care workflow: Patient, Assessment, Care, Scheduling, Billing">{['Patient','Assessment','Care','Scheduling','Billing'].map((step, i) => <div className="care-step" key={step}><span>0{i + 1}</span><strong>{step}</strong><i /></div>)}</div>
      </article>
    </div>
  </section>
);

export default Products;
