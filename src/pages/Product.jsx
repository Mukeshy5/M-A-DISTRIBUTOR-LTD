import { useMemo, useState } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import products, { categories } from '../data/products.js';

const Product = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const selectedCategory = searchParams.get('category') || 'All';

  const selectedProduct = useMemo(
    () => products.find((product) => String(product.id) === String(id)),
    [id],
  );

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  if (selectedProduct) {
    return (
      <section className="container product-detail-page">
        <div className="detail-header">
          <Link to="/products" className="back-link">
            ← Back to Products
          </Link>
        </div>

        <div className="detail-layout">
          <div className="detail-image-wrap">
            <img src={selectedProduct.image} alt={selectedProduct.name} className="detail-image" />
          </div>

          <div className="detail-content">
            <span className="section-eyebrow">{selectedProduct.category}</span>
            <h1>{selectedProduct.name}</h1>
            <p className="detail-description">{selectedProduct.description}</p>

            <div className="detail-meta">
              <strong>Category:</strong> {selectedProduct.category}
            </div>

            <div className="detail-features">
              <h3>Key Features</h3>
              <ul>
                {selectedProduct.details.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              className="primary-button"
              onClick={() =>
                navigate('/inquiry', {
                  state: {
                    productName: selectedProduct.name,
                    category: selectedProduct.category,
                  },
                })
              }
            >
              Make an Inquiry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-eyebrow">Product catalogue</span>
          <h1>Products</h1>
          <p>Browse a curated selection of products across our key supply categories.</p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container">
          <SectionTitle title="Category Filter" text="Narrow products by the categories relevant to your requirements." />

          <div className="filter-bar">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSearchParams({ category })}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
