interface AboutProps {
  data: {
    paragraph: string;
    Why: string[];
    Why2: string[];
  };
}

const About = (props: AboutProps) => {
  return (
    <div id="about">
      <div
        className="container"
        style={{
          width: "100%",
          minHeight: "700px", // optional, keeps minimum height
          background: "linear-gradient(to right, #0047AB 20%, white 20%)",
          padding: "40px 0", // some vertical spacing
        }}
      >
        <div className="row align-items-center">
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <img
              src="imgs/about.jpg"
              className="img-fluid"
              alt="Jeb Bradwell"
              style={{ width: "80%", height: "auto" }}
            />
          </div>
          <div className="col-12 col-md-6">
            <div
              className="about-text"
              style={{ color: "black", padding: "40px" }}
            >
              <h2>About Me</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Why Choose Me?</h3>
              <div className="list-style">
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <ul>
                      {props.data
                        ? props.data.Why.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                        : "loading"}
                    </ul>
                  </div>
                  <div className="col-12 col-sm-6">
                    <ul>
                      {props.data
                        ? props.data.Why2.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                        : "loading"}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
