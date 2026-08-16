import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle.jsx';

const details = [
  { label: 'Company Name', value: 'M&A DISTRIBUTOR LTD' },
  { label: 'Company Number', value: '12922043' },
  { label: 'Company Status', value: 'Active' },
  { label: 'Company Type', value: 'Private Limited Company' },
  { label: 'Incorporated', value: '2 October 2020' },
  { label: 'Registered Office', value: '39 Landseer Avenue, London, England, E12 6JE' },
];

const categories = [
  'Clothing',
  'Kitchen Replenishment',
  'Groceries',
  'Decorative Items',
];

const reasons = [
  'Diverse Product Range',
  'Distribution Focus',
  'Professional Service',
  'Customer-Oriented Approach',
];

const AboutUs = () => {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-eyebrow">About our company</span>
          <h1>About M&amp;A DISTRIBUTOR LTD</h1>
          <p>Building reliable distribution solutions across diverse product categories.</p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container">
          <SectionTitle
            title="Company Overview"
            text="M&A DISTRIBUTOR LTD is a UK private limited company operating as a distributor across multiple product categories. The business focuses on product variety, reliable distribution, business relationships, customer requirements, professional service and multi-category supply support."
          />

          <div className="details-grid">
            {details.map((detail) => (
              <div key={detail.label} className="detail-card">
                <span>{detail.label}</span>
                <strong>{detail.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing alt-bg">
        <div className="container">
          <SectionTitle title="Our Product Categories" text="The company handles customer-facing supply across four main categories." />
          <div className="category-list-grid">
            {categories.map((category) => (
              <div key={category} className="list-card">
                <h3>{category}</h3>
                <p>
                  {category === 'Clothing' && 'Clothing and apparel-related products.'}
                  {category === 'Kitchen Replenishment' && 'Kitchen and household replenishment products.'}
                  {category === 'Groceries' && 'Everyday grocery and essential products.'}
                  {category === 'Decorative Items' && 'Decorative and home-related products.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container">
          <SectionTitle title="Why Choose Us" text="A business approach centred on customer access, product variety and dependable distribution support." />

          <div className="feature-grid">
            {reasons.map((reason) => (
              <div key={reason} className="feature-card">
                <h3>{reason}</h3>
                <p>
                  {reason === 'Diverse Product Range' && 'Products across multiple everyday categories.'}
                  {reason === 'Distribution Focus' && 'Designed around supplying products efficiently.'}
                  {reason === 'Professional Service' && 'Business-focused communication and inquiry handling.'}
                  {reason === 'Customer-Oriented Approach' && 'Product information and inquiries should be easy for customers to access.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-box">
          <div>
            <span className="section-eyebrow">Ready to connect</span>
            <h2>Discuss product needs, distribution requirements or partnership opportunities.</h2>
          </div>
          <Link to="/inquiry" className="primary-button">
            Make an Inquiry
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
