const ContactUs = () => {
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
            <div className="address-block">
              <h3>Email</h3>
              <p>
                <a href="mailto:operations@mandadistributorltd.co.uk">operations@mandadistributorltd.co.uk</a>
              </p>
            </div>
            {/* New map block */}
            <div className="map-block">
              <h3>Our Location</h3>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9063080000003!2d-0.0543632842308947!3d51.5173549796358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a701d5b0f5b1%3A0x1a2b3c4d5e6f7a8b!2s39%20Landseer%20Ave%2C%20London%20E12%206JE%2C%20UK!5e0!3m2!1sen!2suk!4v1678912345678!5m2!1sen!2suk"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="M&A Distributor Ltd Location"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="form-card">
            <h3>Send Us an Email</h3>
            <p>For any inquiries, please send us an email. We will get back to you as soon as possible.</p>
            <a href="mailto:operations@mandadistributorltd.co.uk" className="primary-button full-width-button" style={{ textDecoration: 'none', textAlign: 'center', display: 'block' }}>Send Email</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
