import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle={
        color:"white"
    }
    return (
        <div>
            <nav className="navbar ">
                    <h1>
                        <Link  style ={navStyle} to="/">Logo</Link>
                    </h1>
                        <ul className="nav-link">
                        <li> <Link  style ={navStyle} to="/about">About</Link></li>
                            <Link style ={navStyle} to="/shop"><li>Shop</li></Link>
                            <Link style ={navStyle} to="/cntact"><li>Contact</li></Link>
                        </ul>
            </nav>
        </div>

    )
}

export default Nav
