import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Header extends Component {
    render() {
        return (
         <header>

             <div className="logo">
                 <img src="./images/infinity.png" />

             </div>
             <span>
                 move.
             </span>

             <nav>
                 <ul>
                     <li className="first">
                         <Link to="/">HOME</Link>

                     </li>
                     <li>
                         <Link to="/products">PRODUCTS</Link>

                     </li>
                     <li className="last">
                         <Link to="/contact">CONTACT</Link>
                     </li>

                 </ul>
             </nav>

         </header>
    );
    }
}

export default Header;
