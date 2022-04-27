import React from "react";




function Navigation(){
    return(
    <nav className="navbar">
    <div className="logo">OMINI</div>
    <div  className="nav-items">
    <ul className="lists">
        <li> <a className="nav-li" href="index.html"> Home </a> </li>
        <li> <a className="nav-li" href="index.html"> About </a> </li>
        <li> <a className="nav-li" href="index.html"> Products </a> </li>
        <li> <a className="nav-li" href="index.html"> Contact </a> </li>
        
    </ul>
    </div>
    </nav>
    );
}
export default Navigation;