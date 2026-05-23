function Step({ number, title, text }) {
  return (
    <article className="step">
      <p className="stepNumber">{number}</p>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export default Step;