
import React from "react";
import {  NavLink } from "react-router-dom";
import background from '../pics/house-cleaning.jpg'
import { HomeContent } from "../Components/homeContent";
import { ActionContent } from "../Components/actionContent";
import '../CSS/home.css';

const sectionOne = [
 {
	id: 1,
	Description: `

Benskya is a family owned cleaning company operating in Indianapolis and surroundings cities offering residential cleaning, commercial cleaning and car detailing services.
  `,
	author: "Stravinsky Anglade",
	
	},
  {
    id: 2,
	  Description:`Benskya is fully insured, bonded and more importantly does his job with passion, professionalism and care. 
`
  },
  {
    id: 3,
	  Description:`Our great sense of details will make your property look like new as we will thoroughly clean all the area included in your service package.`
  },
  {
    id: 4,
	  Description:`At Benskya, we understand that your time and money are crucial
     in deciding to hire a cleaner. With this in mind, we offer flexible booking schedule
     , unbeatable price and excellent service which simply said makes us the best ever cost-effective choice for your property.
`
  },

]
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
        <div className="section-flex">
            <div className="home-section-left">
              {sectionOne.map(({ id, Description }) => (
                    <p key={id}> {Description} </p>         
                ))}
            </div>
            <div className="home-section-right">
               <img className="section-img" src={background} alt='cleaning supplies'/>
            </div>
        </div>
        
    </div>
  );
};
  
export default Home;