const SectionTitle = ({ eyebrow, title, text }) => {
  return (
    <div className="section-title-wrap">
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
};

export default SectionTitle;
