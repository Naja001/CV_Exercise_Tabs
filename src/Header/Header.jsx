import { MdMargin } from "react-icons/md";
import "./Header.css";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
} from "react-icons/fa";
export default function Header() {
  return (
    <div id="header" className="container-fluid">
    <div className="row justify-content-md-center">
      <div className="col col-lg-7">
        <h1 className="pb-5">Natalija Ojdanic</h1>
        
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          accumsan condimentum felis, id bibendum erat aliquet non. Integer
          enim mauris, ultricies eget euismod a, aliquet ac metus. Duis
          vulputate arcu ut libero efficitur elementum ac et risus. Nulla quis
          erat tempor, dignissim quam in, accumsan enim. Suspendisse at turpis
          velit. Mauris non felis egestas, feugiat enim a, pellentesque purus.
          Fusce consectetur mauris lacus. Donec id commodo eros, ut lobortis
          augue. Suspendisse auctor iaculis velit, sollicitudin lacinia odio
          vehicula quis. Cras maximus lobortis sapien ultrices scelerisque.
          Sed ultricies nisi ut augue elementum, sed dictum erat feugiat.
          Fusce a eleifend lectus, suscipit condimentum nibh. 
        </p>
      </div>
      <div className="col-md-auto">
        <img
          src="https://www.cdm.me/wp-content/uploads/2020/06/Natalija-Ojdanic-Turistiko.jpg"
          width="300px"
          height="auto"
        />
      </div>
    </div>
   
    <div className="contrainer-color">
      <div className="row justify-content-md-center">
        <div className="col col-lg-2 ">
          <p>
            {" "}
            <FaMapMarkerAlt /> 23 Main Street, City, Country
          </p>
        </div>
        <div className="col-md-auto">
          <p>
            {" "}
            <FaEnvelope /> example@example.com
          </p>
        </div>
        <div className="col col-lg-2">
          <p>
            {" "}
            <FaPhone /> +1234567890
          </p>
        </div>
      </div>
    </div>
  </div>
  );
}
