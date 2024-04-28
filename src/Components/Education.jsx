export default function Education({ place, degree, year, desc }) {
  return (
    <div>
      <br />
      <h3>{place}</h3>
      <h5>
        {degree} | {year}
      </h5>
      <ul>
        {desc.map((item,index)=> (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
