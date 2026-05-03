// import React from 'react';
// function RightSection(
//     {imageURL,
//     productName,
//     productDescription,
//     learnMore
// }) {
//     return ( 
//         <div className='container mt-5'>
//             <div className='row'>
                
                
//                 <div className='col-6 p-5 mt-5'>
//                     <h1>{productName}</h1>
//                     <p>{productDescription}</p>
               
//                 <div>
                    
//                     <a href={learnMore} >Learn More</a>
//                 </div>
                
//                 </div>
//                 <div className='col-6'>
//                     {/* image hmara prop se arha toh isee double cout me nhi likhe ge  */}
//                     <img src={imageURL} />
//                 </div>
//             </div>
//         </div>
     
//      );
// }

// export default RightSection;


import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        
        {/* LEFT CONTENT */}
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <div>
            {learnMore && (
              <a href={learnMore}>
                Learn More
              </a>
            )}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="col-6">
          <img src={imageURL} alt="product" style={{ width: "100%" }} />
        </div>

      </div>
    </div>
  );
}

export default RightSection;