import React from "react";
import hero from '../pics/house-cleaning.jpg'
import "../CSS/home.css";
// import Button from "./btn";
import {  NavLink } from "react-router-dom";


export const HomeContent = () => {
const homeContentsDetail = [
	{
	id: 1,
	Description: `Professional and affordable cleaning services in Indianapolis and its surroundings`,
	author: "Stravinsky Anglade",
	
	},
	{
	id: 2,
	Description: `In need of a cleaning services for your home or office?`,
	author: "Stravinsky Anglade",
	
	},
    {
	id: 3,
	Description: `Your search ends here, please click the button below to book your service?`,
	author: "Stravinsky Anglade",
	
	},
];

const myStyle={
    // backgroundImage: `url(${hero})`,    
    backgroundImage:`linear-gradient( rgba(8, 8, 8, 0.85), rgba(0, 15, 80, 0.675)), url("${hero}")`,
    height:'100vh',
    // marginTop:'-70px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};

// const handleClick=()=>{
//     return <NavLink to= '/bookNow'>BookNow</NavLink>
// }
return (
	<div>    
        <header className="home-container">
            <div className="title-container" >        
                <div className="background-wrapper" style={myStyle}>
                {/* <img src={hero} alt="cleaning" /> */}
                </div>
                <div className="subtitle">
                {homeContentsDetail.map(({ id, Description }) => (
                    <p key={id}> {Description} </p>         
                ))}
                <button type="button" className="btn btn-main">
                    <NavLink to= '/bookNow'>Book Now</NavLink>
                </button>
                
                {/* <button type="button">Call now</button> */}
                </div>
            {/* <div className="subtitle">
                <button type="button">Book now</button>
                <button type="button">Call now</button>
            </div> */}
            </div>
        </header>
            
    </div>
);
};

// export default Posts;
