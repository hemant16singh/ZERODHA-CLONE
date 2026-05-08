import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">

        {/* LEFT IMAGE */}
        <div className="col-lg-6 col-md-12 text-center p-3">
          <img
            src="/media/images/largestBroker.svg"
            alt="Largest Broker"
            className="img-fluid"
            style={{ maxWidth: "100%" }}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="col-lg-6 col-md-12 p-lg-5 p-3">
          <h1 className="mb-4">Largest stock broker in India</h1>

          <p className="mb-5 text-muted">
            2+ million Zerodha clients contribute to over 15% of all volumes
            in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6">
              <ul>
                <li><p>Futures and Options</p></li>
                <li><p>Commodity Derivatives</p></li>
                <li><p>Currency Derivatives</p></li>
              </ul>
            </div>

            <div className="col-6">
              <ul>
                <li><p>Equity Delivery</p></li>
                <li><p>Equity Intraday</p></li>
                <li><p>Mutual Funds</p></li>
              </ul>
            </div>
          </div>

          <div className="text-center text-lg-start mt-4">
            <img
              src="/media/images/pressLogos.png"
              alt="Press Logos"
              className="img-fluid"
              style={{ maxWidth: "90%" }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Awards;