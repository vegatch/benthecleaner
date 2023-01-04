import {  NavLink } from "react-router-dom";
import '../CSS/navbar.css'
import logo from '../pics/logo.png'



export default function Navbar() {
  return (
    
    <div className='nav-container '>
        <div className='nav-left'>
                        <NavLink end to= '/'><img src={logo} alt="Benskya Logo" /></NavLink>
        </div>
        <div className='nav-right'>
            <ul className='header'>
                <li><NavLink end to= '/'>Home</NavLink></li>
                <li><NavLink to= '/About' >About</NavLink></li>
                <li><NavLink to= '/bookNow'>BookNow</NavLink></li>
                <li><NavLink to= '/contactUs'>Contact</NavLink></li>  
                <li className="phone"><a href="tel:7862472127">786-247-2127</a></li>                      
            </ul>
            
        </div>
    </div>
  )
}
