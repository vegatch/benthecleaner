import React, {useReducer, useState, useEffect} from "react";
import "../CSS/bookingNowForm.css";

// import { useState, useRef } from 'react'
// import { useRef } from "react";
// import React, { useState } from "react";

import "../CSS/book.css";

const times = ['Please select a time','8:00 AM', '11:00 AM', '1:00 PM']

const cleaningTypes = [
  'Please select your cleaning option', 
'Standard Cleaning', 
'Deep Cleaning', 
'Move In / Move Out',
'Post construction'
]

const cleaningDescription = {
  "standard": "Standard cleaning description text to be displayed here",
  "Deep": "Deep cleaning description text to be displayed here",
  "MoveInOut": "Move in / Move out cleaning description text to be displayed here",
  "PostConstruction": "After construction cleaning description text to be displayed here"
}
 


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
  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0)
  const [selected, setSelected] = useState(1)
  
  
    


  const handleSubmit = (e) =>{
    e.preventDefault();
    setSubmitting(true);
    
    setTimeout(()=>{
      setSubmitting(false);
     
    }, 10000)
  }

  const handleChange = (event) =>{
  //  const target = event.target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   const name = target.name;
     setSelected(event.target.value)
    setFormData({
      name:event.target.name,      
      // value:event.target.value || event.target.checked
      value: event.target.type === 'checkbox' ? event.target.checked : event.target.value
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
      let room = Number(formData.bedroom);
      let bath = Number(formData.bathroom);
      // let frequency = Number(formData.cleaningFrequency)
      // let deep = formData.cleaningType ==='Deep Cleaning'
      // let moveInOut = formData.cleaningType ==='Move In / Move Out'
      // let afterContruction = formData.cleaningType ==='Post construction'

      let cleaningType = 0
      if(formData.cleaningType ==='Deep Cleaning'){
          cleaningType = 100
      }else if(formData.cleaningType ==='Move In / Move Out'){
          cleaningType = 150
      }else if(formData.cleaningType ==='Post construction'){
        cleaningType = 200
      }else{
        cleaningType = 0
      }

      let frequency = 1
      if(formData.cleaningFrequency !== 1){
        frequency = Number(formData.cleaningFrequency)
      }
      
      
      setSubTotal(() => {
        return (room * 50) + (bath * 30) + cleaningType 
      })

      
      
      
     // let subTotal = (room * 50) + (bath * 30) + cleaningType 
      let sum =  subTotal * frequency

      setTotal(sum)
      // setTotal(()=>{
      //   if( formData.bedroom === 'N/A' ){
      //   room = 0
      //   bath = Number(formData.bathroom)
      //   sum = (room * 50) + (bath * 20)
      //   console.log(sum)
      //   return sum
      // }
      
      // if( formData.bathroom === 'N/A'){
      //     bath = 0
      //   room = Number(formData.bedroom)
      //   sum = (room * 50) + (bath * 20)
      //   console.log(sum)
      //   return sum
      // }
      // if( formData.bedroom !== 'N/A' &&  formData.bathroom !== 'N/A' ){
      //   bath = Number(formData.bathroom)  
      //   room = Number(formData.bedroom)
      //   sum = (room * 50) + (bath * 20)
      //   console.log(sum)
      //   return sum
      // }
      // })  
    

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
              <option value= '0'> Please select # of rooms</option>
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
              <option value='0'> Please select # of rooms</option>
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
           (formData.cleaningType ==='Standard Cleaning' && <p>{cleaningDescription.standard}</p>) ||
            (formData.cleaningType ==='Deep Cleaning' && <p>{cleaningDescription.Deep}</p>) ||
            (formData.cleaningType ==='Move In / Move Out' && <p>{cleaningDescription.MoveInOut}</p>) ||
            (formData.cleaningType ==='Post construction' && <p>{cleaningDescription.PostConstruction}</p>)
          }

      </div>
      </div>
      <div onChange={handleChange} checked={selected === '1'} className="flexContainer radio-container">    
          <input type="radio" value="1" name="cleaningFrequency" id="radio1"  />
          <label htmlFor="radio1">One time</label>

          <input type="radio" value="0.8" name="cleaningFrequency" id="radio2"/>
          <label htmlFor="radio2">Weekly (-20%)</label>

          <input type="radio" value="0.85"  name="cleaningFrequency" id="radio3"/>
          <label htmlFor="radio3">Biweekly (-15%)</label>

          <input type="radio" value="0.9"   name="cleaningFrequency" id="radio4"/>
          <label htmlFor="radio4">Monthly (-10%)</label>
        
      </div>
      </fieldset>
      {
        formData.cleaningType ==='Standard Cleaning' ? 
         <fieldset className="fieldset-container">
        <legend className="legend">Extra service</legend>
        <div className="extraContainer">
          <div className="extraLeft">
          <div className="checkedContainer">
            <div className="elementLeft">
                <div className="leftContainer">
                  <label htmlFor="oven">Inside the oven</label>
                  <input 
                    name="oven"
                    type="checkbox" 
                    onChange={handleChange}
                  />
                </div>
            </div>
            <div className="elementRight">
              {
              formData.oven  && 
                
                <label>
                  # of oven
                  <input 
                    type="number"
                    name="numberOfOven"              
                    onChange={handleChange}
                  />
                </label>
            }
            </div>
            
          </div>
          <div className="checkedContainer">
            <div className="elementLeft">
                <div className="leftContainer">
                  <label htmlFor="fridge">Inside the fridge</label>
                  <input 
                    name="fridge"
                    type="checkbox" 
                    onChange={handleChange}
                  />
                </div>
            </div>
            <div className="elementRight">
              {
              formData.fridge  && 
                
                <label>
                  # of fridge
                  <input 
                    type="number"
                    name="numberOfFridge"              
                    onChange={handleChange}
                  />
                </label>
            }
            </div>
            
          </div>
          <div className="checkedContainer">
            <div className="elementLeft">
                <div className="leftContainer">
                  <label htmlFor="window">Inside the window</label>
                  <input 
                    name="window"
                    type="checkbox" 
                    onChange={handleChange}
                  />
                </div>
            </div>
            <div className="elementRight">
              {
              formData.window   && 
                
                <label>
                  # of window
                  <input 
                    type="number"
                    name="numberOfWindow"              
                    onChange={handleChange}
                  />
                </label>
            }
            </div>
            
          </div>
          </div>
          <div className="extraRight"></div>

        </div>
      </fieldset>
      :''
      }
     
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