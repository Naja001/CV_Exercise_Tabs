import "./Experience.css";
import Content from "./Content.jsx";
import { EDUCATION_DATA, EXPERIENCE_DATA } from "../data.js";
import Education from "./Education.jsx";


export default function Experience() {
  return (
    <div id="experience" className="container">
      <div className="row">
        <h1>Work Experience</h1>
        <ul style={{ listStyle: "none" }}>
          {EXPERIENCE_DATA.map((item) => (
            <li key={item.title}>
              <Content
                title={item.title}
                description={item.desc}
                year={item.year}
              />
            </li>
          ))}
        </ul>
      </div>
      <hr id="line" />
      <div>
        <div className="row">
          <h1>EDUCATIONAL HISTORY</h1>
          <br />
          <ul style={{ listStyle: "none" }}>
            {EDUCATION_DATA.map((item) => (
              <li key={item.place}>
                <Education
                  place={item.place}
                  degree={item.degree}
                  year={item.year}
                  desc={item.desc}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
