import React from 'react';
import {Link} from 'react-router-dom';

function Footer(){

    return(
        <div className="container-fluid footer text-center">
            <p className="text-center text-white">Follow us</p>
            <Link className="" to=""> <i className="fa fa-whatsapp "></i></Link>
           <Link className="" to=""> <i className="fa fa-facebook "></i></Link>
            <Link className="" to=""><i className="fa fa-instagram "></i></Link>
            <Link className="" to=""><i className="fa fa-twitter "></i></Link>
           <Link className="" to=""><i className="fa fa-telegram "></i></Link>

        <p className="copy text-center mt-5">Dezexchange &copy; 2021 </p>
      </div>
    )
}

export default Footer;