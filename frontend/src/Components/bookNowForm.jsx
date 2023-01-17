// import React from "react";
import React, { useState } from "react";

import "../CSS/book.css";

export function BookNowForm() {
  const [formValue, setFormValue] = useState({
    bedroom: 0,
    bathroom: 0,
    frequency: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const { bedroom, bathroom, frequency } = formValue;

  return (
    <div>
        <div>
            <label>
                bedroom
                <input 
                type="number" 
                name="bedroom" 
                min="0" 
                onChange={handleChange} 
                value={bedroom} />
            </label>
        </div>

        <div>
            <label>
                bedroom
                <input 
                type="number" 
                name="bedroom" 
                min="0" 
                onChange={handleChange} 
                value={bedroom} />
            </label>
        </div>
        
       <div>
            <label>
                bathroom
                <input 
                type="number" 
                name="bathroom" 
                min="0" 
                onChange={handleChange} 
                value={bathroom} />
            </label>
        </div>
        
        <div>
            <label>
                How often do you want our service
                <select name="frequency" id="frequency" 
                value={frequency} onChange={handleChange} >
                    <option value="N/A">Please select your choice</option>
                    <option value="Once">One time</option>
                    <option value="weekly">Every weeks</option>
                    <option value="biweekly">Every two weeks</option>
                    <option value="monthly">Every four weeks</option>
                </select>
            </label>
        </div>
        <div>
            <div className="frequency-wrapper">
                <label htmlFor="oneTime" className="switch">
                    One time                    
                </label>
                <input name="oneTime" type="checkbox" />
                <span className="slider round"></span>
            </div>
            <div className="frequency-wrapper">
                <label className="switch">
                    Weekly
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
            </div>
            <div className="frequency-wrapper">
                <label className="switch">
                    Bi-weekly
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
            </div>
            <div className="frequency-wrapper">
                <label className="switch">
                    Monthly
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
            </div>
            
        </div>
        
    </div>
  );
}
