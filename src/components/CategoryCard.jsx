import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ title, description, image, category }) => {
  const navigate = useNavigate();

  return (
    <article className="category-card">
      <div className="category-image-wrap">
        <img src={image} alt={title} className="category-image" />
      </div>
      <div className="category-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <button
          type="button"
          className="secondary-button"
          onClick={() => navigate(`/products?category=${encodeURIComponent(category)}`)}
        >
          View {title === 'Kitchen Replenishment' ? 'Kitchen Products' : title === 'Clothing' ? 'Clothing' : title === 'Groceries' ? 'Groceries' : 'Decorative Items'}
        </button>
      </div>
    </article>
  );
};

export default CategoryCard;
