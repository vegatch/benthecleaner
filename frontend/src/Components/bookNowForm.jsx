import React from "react";
// import { useState, useRef } from 'react'
// import { useRef } from "react";
// import React, { useState } from "react";

import "../CSS/book.css";

export function BookNowForm() {
  const [formValue, setFormValue] = React.useState({
    bedroom: 0,
    bathroom: 0,
    deepClean: "false",
    
  });
//   const [checked, setChecked] = React.useState(false);
  const bedroomNum = React.useRef(0);
  const bathroomNum = React.useRef(0);
  const deepClean = React.useRef(false);
//   ----------------------------------------------
  const [frequence, setFrequence] = React.useState(false)
    const handleOnceChange = () => {
        setFrequence('Once');
    };
    const handleWeeklyChange = () => {
        setFrequence('Weekly');
    };
    const handleBiWeeklyChange = () => {
        setFrequence('BiWeekly');
    };
    const handleMonthlyChange = () => {
        setFrequence('Monthly');
    };
// --------------------------------------------------
  const calculateQuote = (e) =>{
        
        console.log(bedroomNum.current.value)
        console.log(bathroomNum.current.value)
  }
//   const handleCheck = e =>{
//     setChecked(!checked);
//   }
  const handleChange = (event) => {
    
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,        
      };
    });
    console.log('handlechange bed', bedroomNum.current.value)
    console.log('handlechange bath', bathroomNum.current.value)
    console.log('handlechange deepclean', event.target.value)
  };

  const { bedroom, bathroom } = formValue;

  return (
    <div>
        <div>
            <label>
                bedroom
                <input 
                type="number" 
                name="bedroom" 
                id="bedroom"
                ref={bedroomNum}
                min="0" 
                onChange={handleChange} 
                onMouseLeave={calculateQuote}
                value={bedroom} />
            </label>
        </div>

        <div>
            <label>
                Deep clean
                <select name="deepClean"
                value={deepClean} onChange={handleChange} >
                    <option value="N/A">Please select your choice</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>  
            </label>
        
        </div>
        
       <div>
            <label>
                bathroom
                <input 
                type="number" 
                name="bathroom" 
                id="bathroom"
                ref={bathroomNum}
                min="0" 
                onChange={handleChange} 
                value={bathroom} />
            </label>
        </div>
        
        {/* <div>
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
        </div> */}
        <div>
            <RadioButton
                label="One time"
                value={frequence === 'Once'}
                onChange={handleOnceChange}
            />
            <RadioButton
                label="Weekly"
                value={frequence === 'Weekly'}
                onChange={handleWeeklyChange}
            />
            <RadioButton
                label="Biweekly"
                value={frequence === 'BiWeekly'}
                onChange={handleBiWeeklyChange}
            />
            <RadioButton
                label="Monthly"
                value={frequence === 'Monthly'}
                onChange={handleMonthlyChange}
            />
        </div>
        
    </div>
  );
}

const RadioButton = ({ label, value, onChange }) => {
  return (
    <label>
      <input type="radio" checked={value} onChange={onChange} />
      {label}
    </label>
  );
};

// const Checkbox = ({ label, value, onChange }) => {
//   return (
//     <label>
//       {label}
//       <input type="checkbox" checked={value} onChange={onChange} />
//     </label>
//   );
// };

// export const calculateQuote =() =>{
//     let bedroomNum = document.querySelector('#bedroom').value
//     let bathroomNum = document.querySelector('#bathroom')
//     let deepClean = document.querySelector('#deepClean')
//     let bathroomPrice = 30;
//     let bedroomPrice = 0;
//     let bedroomTotalPrice = 0
//     let standardCleanPrice = 0
//     let cleanPrice = 0
//     let basePrice = 100;    

//     if(bedroomNum > 0 &&  bedroomNum < 3){
//         bedroomPrice = 20
//         bedroomTotalPrice = bedroomPrice * bedroomNum
//     }else if(bedroomNum === 3){
//         bedroomPrice = 24
//         bedroomTotalPrice = bedroomPrice * bedroomNum
//     }
//     else if(bedroomNum === 4){
//         bedroomPrice = 28
//         bedroomTotalPrice = bedroomPrice * bedroomNum
//     }
//     else if(bedroomNum === 5){
//         bedroomPrice = 30
//         bedroomTotalPrice = bedroomPrice * bedroomNum
//     }
//     else if(bedroomNum === 6){
//         bedroomPrice = 34
//         bedroomTotalPrice = bedroomPrice * bedroomNum
//     }
//     else{
//         bedroomPrice = 36
//         bedroomTotalPrice = bedroomPrice * bedroomNum
//     }
//     // let bedroomTotalPrice = bedroomPrice * bedroomNum
//     let bathroomTotalPrice = bathroomPrice * bathroomNum
//     standardCleanPrice = basePrice + bedroomTotalPrice + bathroomTotalPrice
    
//     cleanPrice = deepClean === true ? standardCleanPrice + 100 : standardCleanPrice;
    
//     console.log('Cleaning price',cleanPrice)
//     return  cleanPrice


// }
// calculateQuote()