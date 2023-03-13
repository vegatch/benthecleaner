import React, {useReducer, useState, useEffect} from "react";
import "../CSS/bookingNowForm.css";
// import { useState, useRef } from 'react'
// import { useRef } from "react";
// import React, { useState } from "react";

import "../CSS/book.css";

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
    }, 2000)
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
      
      if( formData.bathroom === 'N/A' ){
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
      <fieldset className="personal-container">
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
      <fieldset className="personal-container">
      <legend className="legend"> Property Information:</legend>
      <div>
        <label>
          Choose your cleaning need
          <select name="cleaningType" onChange={handleChange}>
            <option value="N/A">Please your choice</option>
            <option>Standard cleaning</option>
            <option>Deep cleaning</option>
            <option>Move in/ Move out cleaning</option>
            <option>One hour cleaning</option>
          </select>
        </label>
      </div>
      <div>

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
      
      <div>
        <label>
          <p>Number of bathrooms</p>          
          <select name="bathroom" onChange={handleChange} >
              <option value='N/A'> Please select # of bath</option>
              <option value= "1">One </option>
              <option value= "2">Two </option>
              <option value= "3">Three </option>
              <option value= "4">Four </option>
              <option value= "5">Five </option>
              <option value= "6">Six </option>
            </select>
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
      <button type="Submit">Submit</button>
      


      </form>
    </div>
  )
}