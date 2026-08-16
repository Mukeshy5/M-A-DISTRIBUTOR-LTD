import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>M&amp;A DISTRIBUTOR LTD</h3>
          <p>
            Professional product distribution across diverse consumer categories.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/inquiry">Inquiry</Link></li>
          </ul>
        </div>

        <div>
          <h4>Product Categories</h4>
          <ul className="footer-links">
            <li>Clothing</li>
            <li>Kitchen Replenishment</li>
            <li>Groceries</li>
            <li>Decorative Items</li>
          </ul>
        </div>

        <div>
          <h4>Company Details</h4>
          <ul className="footer-links">
            
            <li>Private Limited Company</li>
            <li>Active</li>
            <li>London, England</li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        © 2026 M&amp;A DISTRIBUTOR LTD. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
