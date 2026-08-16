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
