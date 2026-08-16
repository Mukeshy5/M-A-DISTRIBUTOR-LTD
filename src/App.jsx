import { Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Product from './pages/Product.jsx';
import AboutUs from './pages/AboutUs.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Inquiry from './pages/Inquiry.jsx';

const App = () => {
  return (
    <div className="app-shell">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/inquiry" element={<Inquiry />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;