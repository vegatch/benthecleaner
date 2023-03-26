import React, {useReducer, useState, useEffect} from "react";
import "../CSS/bookingNowForm.css";

// import { useState, useRef } from 'react'
// import { useRef } from "react";
// import React, { useState } from "react";

import "../CSS/book.css";

const times = ['Please select a time','8:00 AM', '11:00 AM', '1:00 PM']

const cleaningTypes = ['Please select your cleaning option', 'Standard Cleaning', 'Deep Cleaning', 'Move In / Move Out']

// console.log(roomsNumber.indexOf(roomsNumber))

const formReducer = (state, event)=>{
  return{
    ...state,
    [event.name]: event.value
  }

}
export function BookNowForm() {
  const [formData, setFormData] = useReducer(formReducer, {bedroom:0, bathroom:0})
  const [submitting, setSubmitting] = useState(false);
  const [total, setTotal] = useState(0)
  
  
    


  const handleSubmit = (e) =>{
    e.preventDefault();
    setSubmitting(true);
    
    setTimeout(()=>{
      setSubmitting(false);
     
    }, 5000)
  }

  const handleChange = (event) =>{
    setFormData({
      name:event.target.name,
      value:event.target.value
    })     

    
  }


  // const quote = () =>{
  //   let room = Number(formData.bedroom)
  //   let bath = Number(formData.bathroom)
  //   let sum = (room * 50) + (bath * 20)
  //   console.log(sum)
  //   setTotal(sum)    
  // }

  useEffect(() => {
    
    const quote = () =>{
      let room ;
      let bath ;
      let sum =0;
      
      setTotal(()=>{
        if( formData.bedroom === 'N/A' ){
        room = 0
        bath = Number(formData.bathroom)
        sum = (room * 50) + (bath * 20)
        console.log(sum)
        return sum
      }
      
      if( formData.bathroom === 'N/A'){
          bath = 0
        room = Number(formData.bedroom)
        sum = (room * 50) + (bath * 20)
        console.log(sum)
        return sum
      }
      if( formData.bedroom !== 'N/A' &&  formData.bathroom !== 'N/A' ){
        bath = Number(formData.bathroom)  
        room = Number(formData.bedroom)
        sum = (room * 50) + (bath * 20)
        console.log(sum)
        return sum
      }
      })  
    

  };
    quote();
    
  }, [formData])


  
 
  return(
    
    <div>
    console.log(formData)
        {submitting &&
       <div>
         You are submitting the following:
         <ul>
           {Object.entries(formData).map(([name, value]) => (
             <li key={name}><strong>{name}</strong>:{value.toString()}</li>
           ))}
         </ul>
       </div>
      }
      <form onSubmit={handleSubmit}>
      <fieldset className="fieldset-container">
        <legend className="legend">Personal Information:</legend>
        <div className="flex-form-container first-row">
          <div className="form-control box1">
            <label>
              <p> First Name</p>
              <input 
                name="firstName"
                placeholder="enter your first name"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-control box2">
            <label>
              <p> Middle Name</p>
              <input 
                name="middleName"
                placeholder="enter your middle name"
                onChange={handleChange}
              />
            </label>
          </div>
          {/* <div className="form-control box12"></div> */}
          <div className="form-control box3">
            <label>
              <p> Last Name</p>
              <input 
                name="lastName"
                placeholder="enter your last name"
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        {/* second row */}
        <div className="flex-form-container second-row">
          <div className="form-control box4">
            <label>
              <p> Email</p>
              <input 
                name="email"
                placeholder="enter your email"
                onChange={handleChange}
              />
            </label>
          </div>
          {/* <div className="form-control box10"></div>
          <div className="form-control box11"></div> */}
          <div className="form-control box5">
            <label>
              <p> Phone Number</p>
              <input 
                name="phoneNumber"
                placeholder="enter your phone number"
                onChange={handleChange}
              />
            </label>
          </div>
          
        </div>
        {/* Third row */}
        <div className="flex-form-container third-row">
          <div className="form-control box6">
            <label>
              <p> Street Number & Name</p>
              <input 
                name="streetName"
                placeholder="enter your street number and name"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-control box7">
            <label>
              <p> City</p>
              <input 
                name="city"
                placeholder="enter your city"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-control box8">
            <label>
              <p> State</p>
              <input 
                name="state"
                placeholder="enter your state"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-control box9">
            <label>
              <p> Zip code</p>
              <input 
                name="zipCode"
                placeholder="enter your zip code"
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
      </fieldset >
      {/* Information about the property */}
      <fieldset className="fieldset-container">
      <legend className="legend"> Property Information:</legend>
      
      
     <div className="flexContainer">
      <div className="flex-element"> 
        <label>
        <p>Number of rooms</p>
            <select name="bedroom" onChange={handleChange}>
              <option value='N/A'> Please select # of rooms</option>
              <option value= "1">One </option>
              <option value= "2">Two </option>
              <option value= "3">Three </option>
              <option value= "4">Four </option>
              <option value= "5">Five </option>
              <option value= "6">Six </option>
            </select>
        </label>
      </div>

        <div className="flex-element">     
          <label>
            <p>Number of bathrooms</p> 
            <select name="bathroom" onChange={handleChange}>
              <option value='N/A'> Please select # of rooms</option>
              <option value= "1">One </option>
              <option value= "2">Two </option>
              <option value= "3">Three </option>
              <option value= "4">Four </option>
              <option value= "5">Five </option>
              <option value= "6">Six </option>
            </select>
          </label>         
        </div>

     </div>
      </fieldset>
      <fieldset className="fieldset-container">
        <legend className="legend">Cleaning Option and frequency</legend>
        <div className="flexContainer">
          <div className="flex-element"> 
            <label>
              Cleaning type:
              <select name='cleaningType' onChange={handleChange}>
                    {
                      cleaningTypes.map( (cleaningType, index) => 
                       <option key={index}>{cleaningType}</option> )
                    }
              </select>
            </label>             
          </div>
          <div className="flex-element"> 
          {
           (formData.cleaningType ==='Standard Cleaning' && <p>Starndard cleaning text</p>) ||
            (formData.cleaningType ==='Deep Cleaning' && <p>Deep cleaning text</p>) ||
            (formData.cleaningType ==='Move In / Move Out' && <p>Move in / move out cleaning text</p>)
          }

      </div>
      </div>
      <div onChange={handleChange} className="flexContainer radio-container">    
          <input type="radio" value="1" name="cleaningFrequency" id="radio1"/>
          <label for="radio1">One time</label>

          <input type="radio" value="0.20" name="cleaningFrequency" id="radio2"/>
          <label for="radio2">Weekly</label>

          <input type="radio" value="0.15" name="cleaningFrequency" id="radio3"/>
          <label for="radio3">Biweekly</label>

          <input type="radio" value="0.10" name="cleaningFrequency" id="radio4"/>
          <label for="radio4">Monthly</label>
        
      </div>
      </fieldset>

      <fieldset>
        <legend>Add on</legend>
        <div>
          <label>
            <input />
          </label>
        </div>
      </fieldset>
      <div>
        <label>
          total
          <input
          
            value= {isNaN(total) ? 0 : total } readOnly/>
        </label>
      </div>
      <div className="flexContainer">
          <div className="flex-element"> 
            <label>
              Date:
              <input 
                name="selectDate"
                onChange={handleChange}
                type='date'
              />
            </label>
          </div>
          {
            formData.selectDate  ? 
            <div className="flex-element"> 
            <label>
              Time:
              <select name='selectTime' onChange={handleChange}>
                    {
                      times.map( (time, index) => 
                       <option key={index}>{time}</option> )
                    }
              </select>
            </label>             
          </div>
          : ''
          }
       
      </div>
      <button type="Submit">Submit</button>
      


      </form>
    </div>
  )
}