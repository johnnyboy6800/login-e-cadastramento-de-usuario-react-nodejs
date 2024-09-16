import React from "react";
import './style.css'
import { Link } from "react-router-dom";



function TopBar() {
   
         return (      
            <div id="div1">
            <div className="topnav">
                <Link to='/'>Home</Link>
                <Link to='/usuario_page'>minha conta</Link>
                </div>
            </div>
           
         )
   
    
}

export default TopBar;