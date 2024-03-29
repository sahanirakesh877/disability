import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container-fluid w-100  footerw">
        <footer
          className="text-center text-lg-start text-dark py-5 footerw"
         
        >
          {/* Section: Links  */}
          <section className>
            <div className="container text-center text-md-start ">
              {/* Grid row */}
              <div className="row mt-3">
                {/* Grid column */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* Content */}
                  <div className="logo text-center ">
            <img src="/logocare.png" alt="" />
          </div>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold">Products</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                  />
                  <p>
                    <a href="#!" className="text-dark">
                      MDBootstrap
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">
                      MDWordPress
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">
                      BrandFlow
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">
                      Bootstrap Angular
                    </a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold">Useful links</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                  />
                  <p>
                    <a href="#!" className="text-dark">
                      Your Account
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">
                      Become an Affiliate
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">
                      Shipping Rates
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-dark">
                      Help
                    </a>
                  </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                  />
                  <p>
                    <i className="fas fa-home mr-3" /> New York, NY , US
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3" /> info@example.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3" /> + 01 234 567 88
                  </p>
                  <p>
                    <i className="fas fa-print mr-3" /> + 01 234 567 89
                  </p>
                </div>
                {/* Grid column */}
              </div>
              {/* Grid row */}
            </div>
          </section>
          {/* Section: Links  */}

          <section
            className="d-flex justify-content-between p-4 text-white lastfooter"
            style={{ backgroundColor: "#21D192" }}
          >
            <div className="me-5">
              <span>Get connected with us on social networks:</span>
            </div>

            <div>
              <a href className="text-white me-4">
                <i className="fab fa-facebook-f" />
              </a>
              <a href className="text-white me-4">
                <i className="fab fa-twitter" />
              </a>
              <a href className="text-white me-4">
                <i className="fab fa-google" />
              </a>
              <a href className="text-white me-4">
                <i className="fab fa-instagram" />
              </a>
              <a href className="text-white me-4">
                <i className="fab fa-linkedin" />
              </a>
             
            </div>
          </section>
        </footer>
      </div>
    </>
  );
};

export default Footer;
