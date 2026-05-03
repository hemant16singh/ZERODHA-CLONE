// import React from 'react';
// function LeftSection({imageURL,
//     productName,
//     productDescription,
//     tryDemo,
//     learnMore,
//     googlePlay,
//     appStore,
// }) {
//     return ( 
//         <div className='container mt-5'>
//             <div className='row'>
//                 <div className='col-6'>
//                     {/* image hmara prop se arha toh isee double cout me nhi likhe ge  */}
//                     <img src={imageURL} />
//                 </div>
                
//                 <div className='col-6 p-5 mt-5'>
//                     <h1>{productName}</h1>
//                     <p>{productDescription}</p>
               
//                 <div>
//                     <a href={tryDemo}>Try Demo</a>
//                     <a href={learnMore} style={{marginLeft:"50px"}}>Learn More</a>
//                 </div>
//                 <div className='mt-3'>
//                     <a href={googlePlay}>
//                         <img src='media/images/googlePlayBadge.svg'/></a>
//                     <a href={appStore}>
//                         <img src='media/images/appstoreBadge.svg' style={{marginLeft:"50px"}}/></a>
                    
//                 </div>
//                 </div>
//             </div>
//         </div>
//      );
// }

// export default LeftSection;



import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* LEFT SIDE IMAGE */}
        <div className="col-6">
          <img src={imageURL} alt="product" style={{ width: "100%" }} />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          {/* LINKS SECTION */}
          <div>
            {tryDemo && (
              <a href={tryDemo}>
                Try Demo
              </a>
            )}

            {learnMore && (
              <a
                href={learnMore}
                style={{ marginLeft: "50px" }}
              >
                Learn More
              </a>
            )}
          </div>

          {/* STORE BADGES */}
          <div className="mt-3">
            {googlePlay && (
              <a href={googlePlay}>
                <img
                  src="media/images/googlePlayBadge.svg"
                  alt="Google Play"
                />
              </a>
            )}

            {appStore && (
              <a href={appStore}>
                <img
                  src="media/images/appstoreBadge.svg"
                  alt="App Store"
                  style={{ marginLeft: "50px" }}
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;