
import React from "react";

// import background from '../pics/house-cleaning.jpg'
import background from '../pics/benjaskya.png'
import { CallToAction } from "../Components/callToAction";
import { Section } from "../Components/section";
import { HeadContent } from "../Components/headContent";

import '../CSS/home.css';
import { WhyBenskya } from "../Components/whyBenskya";
import hero from '../pics/benjaskya.png'

const introMsg = 'Professional, affordable, insured and bonded cleaning services in Indianapolis and surroundings'
const imageBacground = <img src={hero} alt="Logo" />
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
    <div className="main-container">     
      
        <div>
            <HeadContent text={introMsg} pic={imageBacground}/>            
        </div>
        <div>
          <CallToAction />
        </div>       
        <div>
          <Section  arrayObject= {sectionOne} imgUrl={background}/>  
        </div>
        
        <div>
          <WhyBenskya />
        </div> 
        
        
    </div>
  );
};
  
export default Home;