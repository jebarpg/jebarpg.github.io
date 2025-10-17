interface HeaderProps {
  data: {
    title: string;
    paragraph: string;
  };
}
const Header = (props: HeaderProps) => {
  const divStyle: React.CSSProperties = {
    backgroundImage: "url('imgs/nordwood-themes-kRNZiGKtz48-unsplash.jpg')",
    height: "400px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const maskStyle: React.CSSProperties = {
    backgroundColor: "rgba(0, 0, 0, 0)",
  };

  return (
    <div className="p-5 text-center bg-image" style={divStyle}>
      <div className="mask" style={maskStyle}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-info">
            <h1 className="mb-3">{props.data.title}</h1>
            <h4 className="mb-3">{props.data.paragraph}</h4>
            <a
              data-mdb-ripple-init
              className="btn btn-outline-dark btn-lg"
              href="#projects"
              role="button"
            >
              Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
