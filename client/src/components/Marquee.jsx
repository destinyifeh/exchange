import React from 'react';
import {Link} from 'react-router-dom';
function Marquee(){


    return(
          <>
        <div id="coinmarketcap-widget-marquee" coins="1,1027,825,5426,2010,74,5994,2,12687,8538,5226,52,1839,3718,7064,7186,6210,1966,5805" currency="NGN" theme="light" transparent="true" show-symbol-logo="true"></div>
      
        <div className="">
           <p className="current">Current price</p> 
        </div>

         
        <div className="container-fluid my-4 p-2 content">
            <h4 className="text-center">Trade With Us Today</h4>
          <p className="text-lg-center">The best platform for trading all kinds of Crypto such as Bitcoin, Dogecoin, Ethereum, USDT, XRP, BNB, e.t.c </p>
         <p  className="text-center">We are 247 available</p>
         <div className="d-flex justify-content-center">
            <Link to="" ><i className="fa fa-whatsapp whatsapp"></i></Link>

             <Link to=""><i className="fa fa-instagram mx-2 instagram"></i></Link>
             <Link to=""><i className="fa fa-telegram telegram"></i></Link>

         </div>
       </div>
        </>
    )
}

export default Marquee;