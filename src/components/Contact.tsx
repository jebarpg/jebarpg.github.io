import { faGithub, faMedium } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
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
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul
                  style={{
                    display: "flex",
                    justifyContent: "center", // centers icons horizontally
                    alignItems: "center",
                    listStyleType: "none", // removes bullets
                    gap: "20px", // spacing between icons
                    padding: 0,
                    margin: 0,
                  }}
                >
                  <li>
                    <a href={props.data ? props.data.linkedin : "/"}>
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size="5x"
                        color="blue"
                      />
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.github : "/"}>
                      <FontAwesomeIcon
                        icon={faGithub}
                        size="5x"
                        color="black"
                      />
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.medium : "/"}>
                      <FontAwesomeIcon
                        icon={faMedium}
                        size="5x"
                        color="black"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
