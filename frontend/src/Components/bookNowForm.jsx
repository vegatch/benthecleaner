import React, {useReducer, useState, useEffect} from "react";
import "../CSS/bookingNowForm.css";
import logo from '../pics/logo.png'

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
  // const [discount, setDiscount] = useState(0)
  // const [tip, setTip] = useState(0)
  
  
    


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
    //  setSelected(event.target.value)
    setFormData({
      name:event.target.name,      
      // value:event.target.value || event.target.checked
      value: event.target.type === 'checkbox' ? event.target.checked : event.target.value
    })      
  }

  
  const bedroomString = formData.bedroom === '1' || formData.bedroom === 0 ? 'bedroom': 'bedrooms' 
  const bathroomString = formData.bathroom === '1' || formData.bathroom === 0 ? 'bathroom': 'bathrooms' 

  useEffect(() => {
    
    const quote = () =>{
     
      let bath = Number(formData.bathroom);
      let oven = isNaN(formData.numberOfOven) ? 0:  Number(formData.numberOfOven) * 40
      let fridge = isNaN(formData.numberOfFridge) ? 0:  Number(formData.numberOfFridge) * 40
      let window = isNaN(formData.numberOfWindow) ? 0:  Number(formData.numberOfWindow) * 10


      let priceByRoom = 0

       if(formData.bedroom === '0'){
          priceByRoom = 0
       }else if(formData.bedroom === '1'){
          priceByRoom = 120
       }else if(formData.bedroom === '2'){
          priceByRoom = 140
       }else if(formData.bedroom === '3'){
          priceByRoom = 175
       }else if(formData.bedroom === '4'){
          priceByRoom = 212
       }else if(formData.bedroom === '5'){
          priceByRoom = 260
       }else if(formData.bedroom === '6'){
          priceByRoom = 300
       }

      let cleaningType = 0
      if(formData.cleaningType ==='Deep Cleaning'){
          cleaningType = 100
      }else if(formData.cleaningType ==='Move In / Move Out'){
          cleaningType = 150
      }else if(formData.cleaningType ==='Post construction'){
        cleaningType = 220
      }else{
        cleaningType = 0
      }

      let priceSquareFeet = Number(formData.squareFootage) > 1000 ?  Math.round((formData.squareFootage - 1000) * 0.04) : 0
      
      let discount = formData.cleaningFrequency   
      
      let sum = priceByRoom + (bath * 30) + priceSquareFeet + oven + fridge  + window + cleaningType 
      
      setSubTotal((prev) => {
        console.log('In Subtotal',sum)
        return sum

      })
      

      
      setTotal((prev)=>{  
        console.log('sum In Settotal',sum)    
        console.log('subtotal In setTotal',subTotal)          
        return sum * discount
      })     
     
    

  };

    quote();
    
  }, [formData])

  const myDate = new Date()

  const dateToClean = new Date(formData.cleaningDate)


  let month = (month)=>{
    switch(month){
    case 0:
      return "Jan";
    case 1:
      return "Feb";
    case 2:
      return "Mar";
    case 3:
      return "Apr";
    case 4:
      return "May";
    case 5:
      return "Jun";
    case 6:
      return "Jul";
    case 7:
      return "Aug";
    case 8:
      return "Sep";
    case 9:
      return "Oct";
    case 10:
      return "Nov";
    case 11:
      return "Dec";
    default:
      return 'n/a';
  }
}
  const myCurrentDate = `
  ${myDate.getDate()}-
  ${month(myDate.getMonth())}-
  ${myDate.getFullYear()}`;

 const sheduledCleaning = `
  ${dateToClean.getDate()}-
  ${month(dateToClean.getMonth())}-
  ${dateToClean.getFullYear()}`;
  return(

    <div className="main-container">     
      <header className="head-page">
          <p>i am the head page</p>
      </header>
      <div className="book-flex-container">
        <section className="section-left">
          <p>i am the left section in the page</p>
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
      <div className="flex-element">     
          <label>
              <p>Square footage og the property</p>
              <input 
                name="squareFootage"
                placeholder="enter the square footage of your property"
                type='integer'
                onChange={handleChange}
              />
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
      <div onChange={handleChange} value = '1' defaultChecked className="flexContainer radio-container">    
          <input type="radio" value='1' defaultChecked name="cleaningFrequency" id="radio1"  />
          <label htmlFor="radio1">One time</label>

          <input type="radio" value="0.8" name="cleaningFrequency" id="radio2"/>
          <label htmlFor="radio2">Weekly (-20%)</label>

          <input type="radio" value="0.85"  name="cleaningFrequency" id="radio3"/>
          <label htmlFor="radio3">Biweekly (-15%)</label>

          <input type="radio" value="0.9"   name="cleaningFrequency" id="radio4"/>
          <label htmlFor="radio4">Monthly (-10%)</label>
        
      </div>
      </fieldset>
      {/* {
        formData.cleaningType ==='Standard Cleaning' ?  */}
         <fieldset className="fieldset-container">
        <legend className="legend">Extra service</legend>
        <div className="extraContainer">
          <div className="extraLeft">
          <div className="checkedContainer">
            <div className="elementLeft">
                <div className="leftContainer">
                  <label htmlFor="oven">Inside the oven (+$40)</label>
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
                    min = '0'
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
                  <label htmlFor="fridge">Inside the fridge (+$40)</label>
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
                    min = '0'
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
                    min = '0'
                    name="numberOfWindow"              
                    onChange={handleChange}
                  />
                </label>
            }
            </div>
            
          </div>
          </div>
          <div className="checkedContainer">
            <div className="elementLeft">
                <div className="leftContainer">
                  <label htmlFor="window">Ceiling fans (+$5)</label>
                  <input 
                    name="fan"
                    type="checkbox" 
                    onChange={handleChange}
                  />
                </div>
            </div>
            <div className="elementRight">
              {
              formData.fan   && 
                
                <label>
                  # of ceiling fans
                  <input 
                    type="number"
                    name="numberOfFans"    
                    min = '0'          
                    onChange={handleChange}
                  />
                </label>
            }
            </div>
            
          </div>
          <div className="checkedContainer">
            <div className="elementLeft">
                <div className="leftContainer">
                  <label htmlFor="window">Load of laundry (+$35)</label>
                  <input 
                    name="laundry"
                    type="checkbox" 
                    onChange={handleChange}
                  />
                </div>
            </div>
            <div className="elementRight">
              {
              formData.laundry   && 
                
                <label>
                  # of laundry load 
                  <input 
                    type="number"
                    defaultValue='0'
                    name="numberOfLaundry"    
                    min = '0'          
                    onChange={handleChange}
                  />
                </label>
            }
            </div>
            
          </div>
          <div className="extraRight"></div>

        </div>
      </fieldset>
      {/* :''
      } */}
     
      <div>
        {/* <label>
          total
          <input
          
            value= {isNaN(total) ? 0 : total } readOnly/>
        </label> */}
        <label>
          Subtotal
          <input value={subTotal} readOnly/>
        </label>
        <label>
          discount
          <input value={isNaN(formData.cleaningFrequency) ? 0 : formData.cleaningFrequency } readOnly/>
        </label>
        <label>
          Total
          <input value= {isNaN(total) ? 0 : total } readOnly/>
        </label>
      </div>
      <div className="flexContainer">
          <div className="flex-element"> 
            <label>
              Date:
              <input 
                name="cleaningDate"
                onChange={handleChange}
                type='date'
              />
            </label>
          </div>
          {
            formData.cleaningDate  ? 
            <div className="flex-element"> 
            <label>
              Time:
              <select name='cleaningTime' onChange={handleChange}>
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

      <div className="quato">
          <div className="quote-header">
            <div className="firstRow">
              <div className="firstRowLeft">
                <img alt="benska logo" src={logo}/>
                <p>Benskya Cleaning Services</p>
                <p>www.benskyacleaningservices.com</p>
                <p>(786) 247-2127</p>

              </div>
              <div className="firstRowRight">
                  <p> Benskya Quotation</p>
                  <p> Residential Cleaning Services</p>

              </div>

            </div>
            <div className="line"> </div>
            <div className="secondRow">
               <div className="secondRowLeftt">
                  <p>Specially quoted for :</p>
                <div className="nameContainer">
                  <p>{formData.firstName} </p>
                  <p>{formData.middleName} </p>
                  <p> {formData.lastName }</p>
                </div>
                <div className="AdressContainer">
                  <p>{formData.streetName} </p>
                  <div className="cityStateContainer">
                    <p>{formData.city} </p>
                    <p> {formData.state }</p>
                    <p> {formData.zipCode }</p>
                  </div>
                </div>
              </div>
              <div className="secondRowRight">
                    <p>Quote number: 001</p>
                    <p>Quote date: {myCurrentDate}</p>
                    <p>Cleaning date:  {sheduledCleaning} at {formData.cleaningTime}</p>
                  
              </div>
            </div>


          </div>
          <div className="quote-body">
            <h1>Quotation - only</h1>
            <div className="quote_table">
              <div className="table_header">
                <div className="tableHeader_left">
                    <p>Description</p>
                </div>                
                <div className="tableHeader_right">
                  <p>Amount</p>
                </div>

              </div>
              <div className="table_raw">
                <div className="table_left">
                   <p>
                    {formData.cleaningType} of a property of {formData.bedroom } {bedroomString} and {formData.bathroom} {bathroomString}
                   </p>
                    
                </div>                
                <div className="table_right">
                  <p>{subTotal}</p>
                </div>

              </div>
            </div>
          </div>
          <div className="quote-footer">

          </div>
        
        <div>
          
        </div>
        <div className="quoteTable">
          

        </div>

      </div>
      


      </form>
    </div>
        </section>
        <section className="section-middle"></section>
        <section className="section-right">
          <div className="right-top">            
            <p>Top</p>
          </div>
          <div className="right-bottom">
            <div className="right-bottom-top">
              <p>Book Summary</p>
            </div>
            <div className="quoteSummary">
              <div className="quoteLeft">
                Cleaning type:
              </div>
              <div className="quoteRight">
                {formData.cleaningType}
              </div>              
            </div>  
            <div className="quoteSummary">
              <div className="quoteLeft">
                frequency:
              </div>
              <div className="quoteRight">
                {formData.cleaningFrequency}
              </div>              
            </div>  

          </div>
        </section>
      </div>
    </div>
    // to add
    
   
  )
}