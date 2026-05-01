import React from 'react';
function Awards() {
    return ( 
      
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-6 '>
                            <img src='media/images/largestBroker.Svg' alt='Largest Broker' />
                        </div>
                        <div className='col-6 p-5 '>
                            <h1>Largest stock broker in India</h1>
                            <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all volumes in India daily by trading and investing in:</p>
                            <div className='row'>
                                <div className='col-6'>
                                    <ul>
                                        <li><p>Futures and Options</p></li>
                                        <li><p>Commodity Derivatives</p></li>
                                        <li><p>Currency Derivatives</p></li>
                                    </ul>
                                </div>
                                <div className='col-6 '>
                                    <ul>
                                        <li><p>Equity Delivery</p></li>
                                        <li><p>Equity Intraday</p></li>
                                        <li><p>Mutual Funds</p></li>
                                    </ul>
                                </div>
                            </div>
                            <img src='media\images\pressLogos.png' style={{width:"90%"}}/>
                        </div>
                    </div>
                </div>
            );
        };
     
        

export default Awards;