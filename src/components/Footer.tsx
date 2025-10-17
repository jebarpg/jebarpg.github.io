const Footer = () => {
  return (
    <footer className="text-center mt-5">
      <p style={{ fontSize: "12px", color: "#888" }}>
        Photo by{" "}
        <a href="https://unsplash.com/@nordwood?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          NordWood Themes
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/person-wearing-watch-near-laptop-kRNZiGKtz48?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </p>
      <div className="container text-center">
        <p>&copy; 2025. Design by {"Jeb Bradwell"}</p>
      </div>
    </footer>
  );
};

export default Footer;
