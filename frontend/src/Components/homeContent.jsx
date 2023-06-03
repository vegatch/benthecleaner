import React from "react";
import {  NavLink } from "react-router-dom";
import "../CSS/home.css";
import Button from "./btn";




export const HomeContent = (props) => {


return (
    <div className="title-container" >
        <div className="background"
        style={{
          backgroundImage: `url(${props.photo})`
        }}>
            <div className="background"
            style={{
            linearGradient:"(180deg, rgba(255, 255, 255, 0.03) 50%, rgba(0, 0, 0, 0.9) 100%)",
            // linearGradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)),
            }}>
                 <div className="subtitle">
                    <div className="motto">                        
                        <p className="motto-text"> {props.text}</p>                     
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

        </div>
    </div>
    )          
};

