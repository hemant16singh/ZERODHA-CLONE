// import React from "react";
// import {Link} from "react-router-dom";
// function Navbar() {
//   return (
    
//       <nav className="navbar navbar-expand-lg border-bottom" style={{backgroundColor:"#FFF"}}>
//         <div class="container p-2">
//           <Link class="navbar-brand" to="/">
//             <img src="media/images/logo.svg" style={{width:"25%"}} alt="Logo" />
//           </Link>
//           <button
//             class="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
//             <form class="d-flex" role="search">
//              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//               <li class="nav-item">
//                 <Link class="nav-link active" aria-current="page" to="/signup">
//                   Signup
//                 </Link>
//               </li>
//               <li class="nav-item">
//                 <Link class="nav-link active" aria-current="page" to="/about">
//                   About
//                 </Link>
//               </li>
//               <li class="nav-item">
//                 <Link class="nav-link active" aria-current="page" to="/product">
//                   Product
//                 </Link>
//               </li>
//               <li class="nav-item">
//                 <Link class="nav-link active" aria-current="page" to="/pricing">
//                   Pricing
//                 </Link>
//               </li>
//               <li class="nav-item">
//                 <Link class="nav-link active" aria-current="page" to="/support">
//                   Support
//                 </Link>
//               </li>
              
//             </ul>
//             </form>
//           </div>
//         </div>
//       </nav>
    
//   );
// }

// export default Navbar;






import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom sticky-top"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container py-2">

        {/* LOGO */}
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            alt="Logo"
            className="img-fluid"
            style={{ width: "140px" }}
          />
        </Link>

        {/* TOGGLER BUTTON */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAV ITEMS */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >

          <ul className="navbar-nav mb-2 mb-lg-0 text-center">

            <li className="nav-item">
              <Link className="nav-link px-3" to="/signup">
                Signup
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3" to="/product">
                Product
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3" to="/pricing">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link px-3" to="/support">
                Support
              </Link>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;