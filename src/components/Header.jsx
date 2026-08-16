import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about-us', label: 'About Us' },
  { to: '/contact-us', label: 'Contact Us' },
  { to: '/inquiry', label: 'Inquiry' },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="M&A Distributor Ltd home">
          <span className="brand-mark">M&amp;A</span>
          <span className="brand-text">DISTRIBUTOR LTD</span>
        </Link>

        <button
          className="mobile-toggle"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`main-nav ${mobileOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/inquiry" className="primary-button header-cta" onClick={() => setMobileOpen(false)}>
          Make an Inquiry
        </Link>
      </div>
    </header>
  );
};

export default Header;
