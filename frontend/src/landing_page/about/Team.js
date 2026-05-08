// import React from "react";
// function Team() {
//   return (
//     <div className="container">
//       <div className="row p-3 mt-5 border-top">
//         <h1 className=" text-center">People</h1>
//       </div>

//       <div
//         className="row p-3 text-muted"
//         style={{ lineHeight: "1.8", fontSize: "1.2em" }}
//       >
//         <div className="col-6 p-5 text-center">
//           <img
//             src="media/images/nithinKamath.jpg"
//             style={{ borderRadius: "100%", width: "50%" }}
//           />
//           <h4 className="mt-5">Nitin kamath</h4>
//           <h6>Founder, CEO</h6>
//         </div>
//         <div className="col-6 p-5">
//           <p>
//             Nithin bootstrapped and founded Zerodha in 2010 to overcome the
//             hurdles he faced during his decade long stint as a trader. Today,
//             Zerodha has changed the landscape of the Indian broking industry.
//           </p>
//           <p>
//             He is a member of the SEBI Secondary Market Advisory Committee
//             (SMAC) and the Market Data Advisory Committee (MDAC).
//           </p>
//           <p> Playing basketball is his zen.</p>
//           <p>Connect on <a href="">Homepage</a> /<a href="">TradingQnA</a> /<a href="">Twitter</a> </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Team;



import React from "react";

function Team() {
  return (
    <div className="container">

      {/* HEADING */}
      <div className="row py-3 mt-5 border-top">
        <div className="col-12">
          <h1 className="text-center">People</h1>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div
        className="row text-muted align-items-center"
        style={{ lineHeight: "1.8", fontSize: "1.1em" }}
      >

        {/* LEFT SECTION */}
        <div className="col-lg-6 col-md-12 p-lg-5 p-3 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="img-fluid"
            style={{
              borderRadius: "50%",
              width: "250px",
              height: "250px",
              objectFit: "cover",
            }}
          />

          <h4 className="mt-4">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>

        {/* RIGHT SECTION */}
        <div className="col-lg-6 col-md-12 p-lg-5 p-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>
            Connect on{" "}
            <a
              href="https://zerodha.com"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              Homepage
            </a>{" "}
            /{" "}
            <a
              href="https://tradingqna.com"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              TradingQnA
            </a>{" "}
            /{" "}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              Twitter
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Team;