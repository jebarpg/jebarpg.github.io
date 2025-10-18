import { faGithub, faMedium } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {
  faEnvelope,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ContactProps {
  data: {
    address: string;
    phone: string;
    email: string;
    linkedin: string;
    github: string;
    medium: string;
  };
}

const Contact = (props: ContactProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div id="contact" style={{ width: "80%" }}>
        {" "}
        {/* controls overall width */}
        <div className="container" style={{ textAlign: "center" }}>
          <div
            className="contact-info"
            style={{
              margin: "0 auto",
              maxWidth: "600px", // wider column
            }}
          >
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <FontAwesomeIcon icon={faMapMarker} size="1x" color="red" />{" "}
                  Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <FontAwesomeIcon icon={faPhone} size="1x" color="black" />{" "}
                  Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <FontAwesomeIcon icon={faEnvelope} size="1x" color="black" />{" "}
                  Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>

          <div className="social" style={{ marginTop: "40px" }}>
            <ul
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                listStyleType: "none",
                gap: "40px", // more space between icons
                padding: 0,
                margin: 0,
              }}
            >
              <li>
                <a href={props.data ? props.data.linkedin : "/"}>
                  <FontAwesomeIcon icon={faLinkedin} size="5x" color="blue" />
                </a>
              </li>
              <li>
                <a href={props.data ? props.data.github : "/"}>
                  <FontAwesomeIcon icon={faGithub} size="5x" color="black" />
                </a>
              </li>
              <li>
                <a href={props.data ? props.data.medium : "/"}>
                  <FontAwesomeIcon icon={faMedium} size="5x" color="black" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
