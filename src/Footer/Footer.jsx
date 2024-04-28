import { AWARDS } from "../data";
import './Footer.css'
export default function Footer() {
  return (
    <footer  className="row justify-content-md-center">
      <div className="col col-lg-2">
        <h4>Skills: </h4>
        <ul>
          <li>Project Management</li>
          <li>Software Development</li>
          <li>Budgeting and Cost Analysis</li>
          <li>Enterprise Resource Planning</li>
          <li>Staff and User Training</li>
          <li>Process Improvement</li>
        </ul>
      </div>
      <div className="col-md-auto">
        <h4>Awards:</h4>
        <ul>
          {AWARDS.map((item) => (
            <li key={item.award}>{item.award}</li>
          ))}
        </ul>
      </div>
      <div className="col col-lg-2">
        <h4>References: </h4>
        <h6>Estelle Darcy - Wardiere Inc. / CTO</h6>
        <p>Phone: 123-456-7890</p>
        <h6>Harper Richard - Wardiere Inc. / CEO</h6>
        <p>Phone: 123-456-7890</p>
      </div>
    </footer>
  );
}
