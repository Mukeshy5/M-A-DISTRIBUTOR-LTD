import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryCard from '../components/CategoryCard.jsx';
import ProductCard from '../components/ProductCard.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import products, { categories } from '../data/products.js';

const categoryMedia = {
  'Clothing': 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
  'Kitchen Replenishment': 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80',
  'Decorative Items': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
};

const featureCards = [
  { title: 'Diverse Product Range', text: 'Products across multiple everyday categories.' },
  { title: 'Distribution Focus', text: 'Designed around supplying products efficiently.' },
  { title: 'Professional Service', text: 'Business-focused communication and inquiry handling.' },
  { title: 'Customer-Oriented Approach', text: 'Product information and inquiries are easy to access.' },
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
    title: 'Decorative Items',
    description: 'Decorative products designed to add style and visual appeal to homes and spaces.',
    image: products.find((product) => product.category === 'Decorative Items')?.image,
    category: 'Decorative Items',
  },
  {
    title: 'All Products',
    description: 'Browse our complete catalogue of products across all available categories.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=900&q=80',
    category: 'All',
  },
];

const Home = () => {
  const featuredProducts = products.filter((product) => product.featured).slice(0, 3);
  const [heroImages, setHeroImages] = useState([]);

  useEffect(() => {
    const imagePool = products.map(p => ({ image: p.image, alt: p.name }));
    // Set initial images
    setHeroImages([
      imagePool[0 % imagePool.length],
      imagePool[1 % imagePool.length],
      imagePool[2 % imagePool.length],
    ]);

    const interval = setInterval(() => {
      const shuffled = [...imagePool].sort(() => 0.5 - Math.random());
      setHeroImages(shuffled.slice(0, 3));
    }, 5000); // Change images every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="section-eyebrow">Reliable distribution partner</span>
            <h1>Reliable Distribution Across Everyday Product Categories</h1>
            <p>
              M&amp;A DISTRIBUTOR LTD supplies a diverse range of products across clothing,
              kitchen replenishment and decorative items.
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
              {heroImages[0] && <img src={heroImages[0].image} alt={heroImages[0].alt} />}
            </div>
            <div className="visual-card small">
              {heroImages[1] && <img src={heroImages[1].image} alt={heroImages[1].alt} />}
            </div>
            <div className="visual-card small alt">
              {heroImages[2] && <img src={heroImages[2].image} alt={heroImages[2].alt} />}
            </div>
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
