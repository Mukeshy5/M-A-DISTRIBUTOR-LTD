import { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

const inquiryTypes = [
  'Product Inquiry',
  'Wholesale Inquiry',
  'Distribution Inquiry',
  'Bulk Order',
  'Partnership Inquiry',
  'General Inquiry',
];

const initialState = {
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  country: '',
  city: '',
  productName: '',
  category: '',
  quantity: '',
  inquiryType: 'Product Inquiry',
  message: '',
};

const Inquiry = () => {
  const location = useLocation();
  const selectedProduct = location.state || {};

  const defaultValues = useMemo(
    () => ({
      ...initialState,
      productName: selectedProduct.productName || '',
      category: selectedProduct.category || '',
    }),
    [selectedProduct],
  );

  const [formData, setFormData] = useState(defaultValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.fullName.trim()) nextErrors.fullName = 'Full name is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = 'A valid email address is required.';
    }
    if (!formData.phone.trim()) nextErrors.phone = 'Phone number is required.';
    if (!formData.message.trim()) nextErrors.message = 'Message is required.';

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateForm();

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setFormData(defaultValues);
    setErrors({});
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-eyebrow">Business enquiry</span>
          <h1>Product Inquiry</h1>
          <p>Tell us about your requirements and we will follow up with the appropriate information.</p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container inquiry-layout">
          <form className="form-card inquiry-form" onSubmit={handleSubmit} noValidate>
            <div className="form-section">
              <h3>Customer Information</h3>
              <div className="form-row two-col">
                <div className="field-wrap">
                  <label htmlFor="fullName">Full Name *</label>
                  <input id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} />
                  {errors.fullName && <span className="field-error">{errors.fullName}</span>}
                </div>

                <div className="field-wrap">
                  <label htmlFor="companyName">Company Name</label>
                  <input id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} />
                </div>
              </div>

              <div className="form-row three-col">
                <div className="field-wrap">
                  <label htmlFor="email">Email Address *</label>
                  <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>

                <div className="field-wrap">
                  <label htmlFor="phone">Phone Number *</label>
                  <input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                  {errors.phone && <span className="field-error">{errors.phone}</span>}
                </div>

                <div className="field-wrap">
                  <label htmlFor="country">Country</label>
                  <input id="country" name="country" value={formData.country} onChange={handleChange} />
                </div>
              </div>

              <div className="form-row two-col">
                <div className="field-wrap">
                  <label htmlFor="city">City</label>
                  <input id="city" name="city" value={formData.city} onChange={handleChange} />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3>Product Information</h3>
              <div className="form-row two-col">
                <div className="field-wrap">
                  <label htmlFor="productName">Product Name</label>
                  <input id="productName" name="productName" value={formData.productName} onChange={handleChange} />
                </div>

                <div className="field-wrap">
                  <label htmlFor="category">Product Category</label>
                  <input id="category" name="category" value={formData.category} onChange={handleChange} />
                </div>
              </div>

              <div className="form-row two-col">
                <div className="field-wrap">
                  <label htmlFor="quantity">Quantity Required</label>
                  <input id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} />
                </div>

                <div className="field-wrap">
                  <label htmlFor="inquiryType">Inquiry Type</label>
                  <select id="inquiryType" name="inquiryType" value={formData.inquiryType} onChange={handleChange}>
                    {inquiryTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3>Message</h3>
              <div className="field-wrap">
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Please provide your requirements..."
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && <span className="field-error">{errors.message}</span>}
              </div>
            </div>

            <button type="submit" className="primary-button full-width-button">
              Submit Inquiry
            </button>

            {submitted && (
              <p className="success-message">
                Thank you for your inquiry. We will review your request and respond shortly.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default Inquiry;
