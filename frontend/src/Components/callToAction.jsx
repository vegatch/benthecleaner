import React from 'react'
import {  NavLink } from "react-router-dom";
import { Button } from "../Components/button";
import Phone from "../Components/phone";

const actionCall = 'Your search for home cleaning service near me ends here.'
export const CallToAction = (props) => {
  return (
    <div className='actionCall-wrapper'>
        <p>{actionCall}</p>
        <div className='btn-container'>
            <div className='divButton'>
                
                <div>
                    <Button
                        id={"btnPhone"}
                        type={"button"}
                        // value={"Call us now"}
                        value = {<Phone />}
                    />
                </div>
                
            </div>
            <div>                
                <NavLink to= '/bookNow'>
                            <Button
                                id={"btnBooking"}
                                type={"button"}
                                value={"Get quote or book online now"}                     
                            />
                </NavLink>  
            </div>

        </div>
    </div>
  )
}
