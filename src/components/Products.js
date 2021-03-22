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
                  src="images/nisan mobile.jpg"
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
                  src="..."
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
                  src="..."
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
                  src="..."
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
                  src="..."
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
                  src="..."
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
        </div>
      </div>
    </>
  );
};

export default Products;
