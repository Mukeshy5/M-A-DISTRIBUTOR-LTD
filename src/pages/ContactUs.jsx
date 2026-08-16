import { useState } from 'react';

const initialState = {
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

const ContactUs = () => {
  const [formData, setFormData] = useState(initialState);
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
    setFormData(initialState);
    setErrors({});
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-eyebrow">Reach out</span>
          <h1>Contact M&amp;A DISTRIBUTOR LTD</h1>
          <p>We welcome customer and business enquiries across our product categories.</p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container contact-layout">
          <div className="contact-info-block">
            <h2>M&amp;A DISTRIBUTOR LTD</h2>
            <div className="address-block">
              <h3>Registered Office</h3>
              <p>
                39 Landseer Avenue
                <br />
                London
                <br />
                England
                <br />
                E12 6JE
              </p>
            </div>
            <p>
              <strong>Company Number:</strong> 12922043
            </p>
          </div>

          <form className="form-card" onSubmit={handleSubmit} noValidate>
            <div className="form-row two-col">
              <div className="field-wrap">
                <label htmlFor="fullName">Full Name</label>
                <input id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} />
                {errors.fullName && <span className="field-error">{errors.fullName}</span>}
              </div>

              <div className="field-wrap">
                <label htmlFor="companyName">Company Name</label>
                <input id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} />
              </div>
            </div>

            <div className="form-row two-col">
              <div className="field-wrap">
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>

              <div className="field-wrap">
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
              </div>
            </div>

            <div className="field-wrap">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" value={formData.subject} onChange={handleChange} />
            </div>

            <div className="field-wrap">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} />
              {errors.message && <span className="field-error">{errors.message}</span>}
            </div>

            <button type="submit" className="primary-button full-width-button">
              Send Message
            </button>

            {submitted && (
              <p className="success-message">
                Thank you for contacting M&amp;A DISTRIBUTOR LTD.
                Your message has been received successfully.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
