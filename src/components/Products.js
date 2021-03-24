import React from "react";
import "./Styles.css";

const Products = () => {
  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4 mt-5 mb-3">
          <div className="col">
            <div className="card shadow-lg">
              <figure>
                <img
                  src="images/PS5.jpg"
                  className="card-img-top"
                  alt="..."
                  style={{ height: "200px" }}
                />
              </figure>
              <div className="card-body">
                <h5 className="card-title">PS5</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <figure>
                <img
                  src="images/asus.jpg"
                  className="card-img-top"
                  alt="..."
                  style={{ height: "200px" }}
                />
              </figure>
              <div className="card-body shadow-lg">
                <h5 className="card-title">Asus ROG G752 </h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <figure>
                <img
                  src="images/BlackWidow-2019-usp02-mobile.jpg"
                  className="card-img-top"
                  alt="..."
                  style={{ height: "200px" }}
                />
              </figure>
              <div className="card-body shadow-lg">
                <h5 className="card-title">Ecommerce</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <figure>
                <img
                  src="images/1.0.0.jpg"
                  className="card-img-top"
                  alt="..."
                  style={{ height: "200px" }}
                />
              </figure>
              <div className="card-body shadow-lg">
                <h5 className="card-title">Card title</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <figure>
                <img
                  src="images/xboxonex_featured.jpg"
                  className="card-img-top"
                  alt="..."
                  style={{ height: "200px" }}
                />
              </figure>
              <div className="card-body shadow-lg">
                <h5 className="card-title">X-Box</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <figure>
                <img
                  src="images/apple-iphone-12-concept_158711095630.jpg"
                  className="card-img-top"
                  alt="..."
                  style={{ height: "200px" }}
                />
              </figure>
              <div className="card-body shadow-lg">
                <h5 className="card-title">I-phone 12</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <figure>
                <img
                  src="images/bs6-hero-xpulse-200-rear-three-quarter-1b39.png"
                  className="card-img-top"
                  alt="..."
                  style={{ height: "200px" }}
                />
              </figure>
              <div className="card-body shadow-lg">
                <h5 className="card-title">Hero X-pulse 200</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <figure>
                <img
                  src="images/1.png"
                  className="card-img-top"
                  alt="..."
                  style={{ height: "200px" }}
                />
              </figure>
              <div className="card-body shadow-lg">
                <h5 className="card-title">HEAD PHONE </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
