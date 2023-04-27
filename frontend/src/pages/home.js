
import React from "react";
import {  NavLink } from "react-router-dom";
// import background from '../pics/house-cleaning.jpg'
import { HomeContent } from "../Components/homeContent";
import { ActionContent } from "../Components/actionContent";
// import '../CSS/home.css';

const Home = () => {
  return (
    <div>     
      {/* <h1> Welcome to our home page</h1> */}
        <div>
            <HomeContent/>            
        </div>
        <div className="banner">
          <div className="banner-link">
            <NavLink to= '/bookNow'>Book now online</NavLink>
          </div>
          <div className="banner-text">
            <p>Or</p>
          </div>
          <div className="banner-text">
            <p>Call 786-247-2127 to book</p>
          </div>
          
        </div>
        <div>
            <ActionContent/>            
        </div>
    </div>
  );
};
  
export default Home;