// import React from 'react';
// function Stats() {
//     return ( 
//         <div className='container p-3'>
//             <div className='row p-5'>
//                 <div className='col-6 p-5'>
//                     <h1 className='mb-5 fs-2' >Trust with confidence</h1>  
//                     <h2 className=' fs-4'>Customer-first always</h2>
//                     <p className='tect-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                   
//                     <h2 className=' fs-4'>No spam or gimmicks</h2>
//                     <p className='tect-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                   
//                     <h2 className=' fs-4'>The Zerodha universe</h2>
//                     <p className='tect-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                   
//                     <h2 className=' fs-4'>Do better with money</h2>
//                     <p className='tect-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
//                 </div>
//                 <div className='col-6 p-5'>
//                     <img src='media/images/ecosystem.png' style={{width:"95%"}}/>
//                     <div className='text-center'>
//                         <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore our products <i class="fa-sharp fa-solid fa-right-long"></i></a>
//                         <a href=''className='mx-5' style={{textDecoration:"none"}}>Try kite demo <i class="fa-sharp fa-solid fa-right-long"></i></a>
//                     </div>

//                 </div>
//             </div></div>
//      );
// }

// export default Stats;



import React from "react";
import { Link } from "react-router-dom";

function Stats() {
  return (
    <div className="container py-3">
      <div className="row align-items-center">

        {/* LEFT CONTENT */}
        <div className="col-lg-6 col-md-12 p-lg-5 p-3">
          <h1 className="mb-4 fs-2">Trust with confidence</h1>

          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            of equity investments and contribute to 15% of daily retail exchange volumes in India.
          </p>

          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, gamification, or annoying push notifications.
            High quality apps that you use at your pace.
          </p>

          <h2 className="fs-4">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem of fintech services.
          </p>

          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we help you manage money better.
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="col-lg-6 col-md-12 text-center p-lg-5 p-3">
          <img
            src="media/images/ecosystem.png"
            alt="ecosystem"
            className="img-fluid"
            style={{ maxWidth: "95%" }}
          />

          <div className="mt-4 d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
            <Link
              to="/product"
              style={{ textDecoration: "none" }}
            >
              Explore our products{" "}
              <i className="fa-sharp fa-solid fa-right-long"></i>
            </Link>

            <Link
              to="/demo"
              style={{ textDecoration: "none" }}
            >
              Try kite demo{" "}
              <i className="fa-sharp fa-solid fa-right-long"></i>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Stats;