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
      <div className="row justify-content-md-center mx-0">
        <div className="col col-lg-7">
          <h1 className="pb-5">Mariana Anderson</h1>
          <h3>Marketing Manager</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pharetra in lorem at laoreet. Donec hendrerit libero eget est
            tempor, quis tempus arcu elementum. In elementum elit at dui
            tristique feugiat. Mauris convallis, mi at mattis malesuada, neque
            nulla volutpat dolor, hendrerit faucibus eros nibh ut nunc.
          </p>
        </div>
        <div className="col-md-auto">
          <img
            src="women.jpg"
            width="300px"
            height="auto"
          />
        </div>
      </div>

      <div className="contrainer-color ">
        <div className="row justify-content-md-center mx-0" style={{ padding: '20px' }}>
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
