import React from "react";
import "../CSS/action.css";
import {  NavLink } from "react-router-dom";


export const ActionContent = () => {


return (
	<div>    
        <div className="text-center"> 
            <p>
                Benskya has the solution for all your cleaning needs.
            </p>
        </div>
        <div>
            <div><p>Please call now for a free and no obligation estimate or to book</p></div>
            <div>
                <NavLink to= '/bookNow'>or Book online Now</NavLink>
            </div>
        </div>
    
            
    </div>
)
};


