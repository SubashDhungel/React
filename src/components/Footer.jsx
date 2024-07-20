import React from "react";

const Footer = (props) => {
  return (
    <div>
    <div className='xx' style={{ backgroundColor: props.mode === "dark" ? "#0f102c" : 'pink'}}>
      <footer className=" text-center " style={{ backgroundColor: props.mode === "dark" ? "#0f102c" : 'aliceblue'}}>
        {/* Grid container */}
        <div className="container p-4 pb-0" style={{ backgroundColor: props.mode === "dark" ? "#0f102c" : 'aliceblue'}}>
          {/* Section: Social media */}
          <section className="mb-4 rounded-2" style={{ backgroundColor: props.mode === "dark" ? "#060859" : 'white'}}>
            {/* Facebook */}
            <a data-mdb-ripple-init className="btn text-white btn-floating m-1" style={{ backgroundColor: "#3b5998" }} href="#!"role="button">
              <i className="fab fa-facebook-f"></i>
            </a>

            {/* Twitter */}
            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#55acee" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>

            {/* Google */}
            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#dd4b39" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-google"></i>
            </a>

            {/* Instagram */}
            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#ac2bac" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>

            {/* Linkedin */}
            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#0082ca" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            {/* Github */}
            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#333333" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
          {/* Section: Social media */}
        </div>
        {/* Grid container */}

        {/* Copyright */}
        <div className={`text-center p-3 text-${props.mode==='dark'?'light':'dark'}`} style={{ backgroundColor: props.mode === "dark" ? "#0f102c" : 'aliceblue'}}>
          © 2020 Copyright:
          <a className={`m-8 text-${props.mode==='dark'?'light':'dark'}`}  href="">
            MDBootstrap.com
          </a>
        </div>
        {/* Copyright */}
      </footer>
    </div>
    </div>
  );
};

export default Footer;
