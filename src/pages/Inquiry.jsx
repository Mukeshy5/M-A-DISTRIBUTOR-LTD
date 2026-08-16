const Inquiry = () => {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-eyebrow">Business enquiry</span>
          <h1>Product Inquiry</h1>
          <p>Please send us an email with your requirements, and we will follow up with the appropriate information.</p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container inquiry-layout">
          <div className="form-card inquiry-form">
            <h3>Send Us an Email for Your Inquiry</h3>
            <p>For any product inquiries, wholesale requests, or partnership opportunities, please send an email to the address below. We will respond to your request shortly.</p>
            <a href="mailto:operations@mandadistributorltd.co.uk" className="primary-button full-width-button" style={{ textDecoration: 'none', textAlign: 'center', display: 'block' }}>Send Inquiry Email</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Inquiry;
