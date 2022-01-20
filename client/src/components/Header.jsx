import React from 'react';
import {Link} from 'react-router-dom';
import Typed from 'react-typed'

function Header(){


    return(
        <div className="container-fluid p-2 mb-4 header text-center">
        <Link className="logo" to="#" >Dez Exchange</Link>
        <div className="typed ">
        <Typed 
          className="typing"
         strings={['Welcome to Dez Exchange', 'Biggest exchange', 'We are the best']}
         typeSpeed={40} backSpeed={50} loop>
      </Typed>
      </div>
      

    </div>
    )
}

export default Header;