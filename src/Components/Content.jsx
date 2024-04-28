
export default function Content({title, description, year}) {
  return (
    <div>
      <br />
      <h3>{title}</h3>
      <h5>{year}</h5>
      <ul>
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
