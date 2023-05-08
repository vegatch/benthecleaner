import React from 'react'
import {  NavLink } from "react-router-dom";
import "../CSS/home.css";
import Hero from '../pics/house-cleaning.jpg'
import { Button } from "../Components/button";

const HeroMsg = props => <p>{props.text}</p>


const myStyle={     
    backgroundImage:`linear-gradient( rgba(8, 8, 8, 0.85), rgba(0, 15, 80, 0.675)), url("${Hero }")`,
    height:'75vh',     
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};


export const  HeadContent = (props) => {
  return (
    <div>
        <header className="home-container">
            <div className="title-container" >
                <div className="background-wrapper" style={myStyle}>
                    
                </div>
                <div className="subtitle">
                    <div className="motto">                        
                        <HeroMsg text = {props.text} />                        
                    </div>
                    <div>
                        <NavLink to= '/bookNow'>
                            <Button
                                id={"btnBookingNow"}
                                type={"button"}
                                value={"Book online now"}                     
                            />
                        </NavLink>                        
                    </div>

                </div>

            </div>

        </header>

    </div>
  )
}
