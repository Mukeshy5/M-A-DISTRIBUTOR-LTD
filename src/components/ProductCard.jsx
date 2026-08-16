import { Link, useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleInquiry = () => {
    navigate('/inquiry', {
      state: {
        productName: product.name,
        category: product.category,
      },
    });
  };

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>

      <div className="product-content">
        <h3>{product.name}</h3>
        <span className="product-category">{product.category}</span>
        <p>{product.description}</p>

        <div className="product-actions">
          <Link to={`/products/${product.id}`} className="secondary-button">
            View Details
          </Link>
          <button type="button" className="primary-button" onClick={handleInquiry}>
            Inquiry
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
