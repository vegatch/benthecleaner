import {  NavLink } from "react-router-dom";
// import Home from '../pages/home';
// import About from '../pages/aboutUs';



export default function Navbar() {
  return (
    // <nav>
    //   <Link to="/">Home </Link>
    //   <Link to="/bookNow">Book Now</Link>
    //   <Link to="/Services">Book Now</Link>
    //   <Link to="/about">About</Link>
    // </nav>
    <div className='navigation '>
                    <div className='nav-logo'>
                        <NavLink end to= '/'>The Cleaner</NavLink>
                    </div>
                    <ul className='header'>
                        <li><NavLink end to= '/'>Home</NavLink></li>
                        <li><NavLink to= '/About' >About</NavLink></li>
                        <li><NavLink to= '/bookNow'>BookNow</NavLink></li>
                        <li><NavLink to= '/contactUs'>Contact</NavLink></li>                        
                    </ul>
                </div>
  )
}
