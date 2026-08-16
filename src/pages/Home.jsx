import { Link } from 'react-router-dom';
import CategoryCard from '../components/CategoryCard.jsx';
import ProductCard from '../components/ProductCard.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import products, { categories } from '../data/products.js';

const categoryMedia = {
  'Clothing': 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
  'Kitchen Replenishment': 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80',
  'Groceries': 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80',
  'Decorative Items': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
};

const featureCards = [
  { title: 'Diverse Product Range', text: 'Products across multiple everyday categories.' },
  { title: 'Distribution Focus', text: 'Designed around supplying products efficiently.' },
  { title: 'Professional Service', text: 'Business-focused communication and inquiry handling.' },
  { title: 'Customer-Oriented Approach', text: 'Product information and inquiries are easy to access.' },
];

const companyDetails = [
  { label: 'Company Type', value: 'Private Limited Company' },
  { label: 'Status', value: 'Active' },
  { label: 'Established', value: '2 October 2020' },
  { label: 'Registered Office', value: 'London, England' },
];

const categoryItems = [
  {
    title: 'Clothing',
    description: 'Explore clothing products suitable for everyday use and different customer requirements.',
    image: products.find((product) => product.category === 'Clothing')?.image,
    category: 'Clothing',
  },
  {
    title: 'Kitchen Replenishment',
    description: 'Practical kitchen and household replenishment products for everyday requirements.',
    image: products.find((product) => product.category === 'Kitchen Replenishment')?.image,
    category: 'Kitchen Replenishment',
  },
  {
    title: 'Groceries',
    description: 'Everyday grocery and essential consumer products supplied through our distribution network.',
    image: products.find((product) => product.category === 'Groceries')?.image,
    category: 'Groceries',
  },
  {
    title: 'Decorative Items',
    description: 'Decorative products designed to add style and visual appeal to homes and spaces.',
    image: products.find((product) => product.category === 'Decorative Items')?.image,
    category: 'Decorative Items',
  },
];

const Home = () => {
  const featuredProducts = products.filter((product) => product.featured).slice(0, 3);

  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="section-eyebrow">Reliable distribution partner</span>
            <h1>Reliable Distribution Across Everyday Product Categories</h1>
            <p>
              M&amp;A DISTRIBUTOR LTD supplies a diverse range of products across clothing,
              kitchen replenishment, groceries and decorative items.
            </p>
            <div className="hero-actions">
              <Link to="/products" className="primary-button">
                Explore Products
              </Link>
              <Link to="/inquiry" className="secondary-button">
                Make an Inquiry
              </Link>
            </div>
          </div>

          <div className="hero-visual" aria-label="Business distribution operations overview">
            <div className="visual-card large">
              <img src={products.find((product) => product.category === 'Kitchen Replenishment')?.image} alt="Kitchen distribution products" />
            </div>
            <div className="visual-card small">
              <img src={products.find((product) => product.category === 'Decorative Items')?.image} alt="Decorative product display" />
            </div>
            <div className="visual-card small alt">
              <img src={products.find((product) => product.category === 'Clothing')?.image} alt="Clothing distribution range" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container">
          <SectionTitle
            eyebrow="Company overview"
            title="About M&amp;A DISTRIBUTOR LTD"
            text="M&amp;A DISTRIBUTOR LTD is an active private limited company incorporated in the United Kingdom. The company focuses on product distribution across multiple everyday consumer categories, providing customers and business partners with access to a diverse range of products."
          />

          <div className="info-grid">
            {companyDetails.map((detail) => (
              <div key={detail.label} className="info-card">
                <span>{detail.label}</span>
                <strong>{detail.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing alt-bg">
        <div className="container">
          <SectionTitle title="Product Categories" text="A focused range of products to support everyday consumer demand." />
          <div className="category-grid">
            {categoryItems.map((category) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                description={category.description}
                image={category.image}
                category={category.category}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container">
          <SectionTitle title="Featured Products" text="A selection of products highlighting our distribution focus." />
          <div className="product-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing alt-bg">
        <div className="container">
          <SectionTitle title="Why Choose Us" text="A dependable business-focused approach to product supply and customer relationships." />
          <div className="feature-grid">
            {featureCards.map((item) => (
              <div key={item.title} className="feature-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-box">
          <div>
            <span className="section-eyebrow">Business inquiry</span>
            <h2>Looking for products or distribution opportunities?</h2>
          </div>
          <Link to="/inquiry" className="primary-button">
            Send an Inquiry
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
