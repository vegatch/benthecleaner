import React, {useReducer, useState, useEffect} from "react";
import {idGenerator} from "./idGenetarion";
import "../CSS/bookingNowForm.css";
import logo from '../pics/logo.png'



import "../CSS/book.css";

const HideDiv = {
   display:'none'

}

const ShowDiv = {
   display:'block'
   
}
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
 

const initialState = {
  firstName:'',
          middleName:'',
          lastName:'',
          email:'',
          phoneNumber:'',
          streetName:'',
          city:'',
          state:'',
          zipCode:'',
          bedroom:0,
          bathroom:0,
          cleaningType:'Please select your cleaning option',
          cleaningFrequency:'',
          oven:'',
          fridge:'',
          window:'',
          fan:'',
          laundry:'',
          cleaningDate:'',
          cleaningTime:'Please select a time',
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
  // const [formData, setFormData] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0)
  // const [discount, setDiscount] = useState(0)
  // const [tip, setTip] = useState(0)
  
  
    


  // const handleSubmit = (e) =>{
  //   e.preventDefault();
  //   setSubmitting(true);
    
  //   setTimeout(()=>{
  //     setSubmitting(false);
     
  //   }, 10000)
  // }

     const handleSubmit = async (e) => {
   e.preventDefault();
    setSubmitting(true);
   console.log({ formData });
   const response = await fetch("http://localhost:3001/quoteRequest", {
     method: "POST",
     headers: {
       "Content-type": "application/json",
     },
     body: JSON.stringify({ formData }),
     
   })
     .then((res) => res.json())
     .then(async (res) => {
       const resData = await res;
       console.log(resData);
       console.log(response);
       if (resData.status === "success") {
         alert("Message Sent");
       } else if (resData.status === "fail") {
         alert("Message failed to send");
       }
     })
     .then(() => {
      //  setFormData({
      //     firstName:'',
      //     middleName:'',
      //     lastName:'',
      //     email:'',
      //     phoneNumber:'',
      //     streetName:'',
      //     city:'',
      //     state:'',
      //     zipCode:'',
      //     bedroom:0,
      //     bathroom:0,
      //     cleaningType:'Please select your cleaning option',
      //     cleaningFrequency:'',
      //     oven:'',
      //     fridge:'',
      //     window:'',
      //     fan:'',
      //     laundry:'',
      //     cleaningDate:'',
      //     cleaningTime:'Please select a time',
      //  });
      setFormData(initialState)
        setSubmitting(false);
     });
 };

  const handleChange = (event) =>{
    setFormData({
      name:event.target.name,      
      value: event.target.type === 'checkbox' ? event.target.checked : event.target.value
    })      
  }

  
  const bedroomString = formData.bedroom === '1' || formData.bedroom === 0 ? 'bedroom': 'bedrooms' 
  const bathroomString = formData.bathroom === '1' || formData.bathroom === 0 ? 'bathroom': 'bathrooms' 

  useEffect(() => {
    
    const quote = () =>{
     
      let bath = Number(formData.bathroom);
      let oven = ''
      if(formData.oven === true){
        oven = isNaN(formData.numberOfOven) ? 0:  Number(formData.numberOfOven) * 40 
      }else{
        formData.numberOfOven = 0
        oven = 0
      }

      let fridge = ''
      if(formData.fridge === true){
        fridge = isNaN(formData.numberOfFridge) ? 0:  Number(formData.numberOfFridge) * 40 
      }else{
        fridge = 0
      }

      let window = ''
      if(formData.window === true){
        window = isNaN(formData.numberOfWindow) ? 0:  Number(formData.numberOfWindow) * 5 
      }else{
        window = 0
      }
      
      let fan = ''
      if(formData.fan === true){
        fan = isNaN(formData.numberOfFans) ? 0:  Number(formData.numberOfFans) * 5 
      }else{
        fan = 0
      }
      
      let laundry = ''
      if(formData.laundry === true){
        laundry = isNaN(formData.numberOfLaundry) ? 0:  Number(formData.numberOfLaundry) * 35 
      }else{
        laundry = 0
      }


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
      
      let discount = isNaN(formData.cleaningFrequency) ? 1 : formData.cleaningFrequency
      
      let sum = priceByRoom + (bath * 30) + priceSquareFeet + oven + fridge  + window + fan + laundry + cleaningType 
      
      setSubTotal((prev) => {
        console.log('In Subtotal',sum)
        return sum

      })
      
      
      setTotal((prev)=>{  
        console.log('sum In Settotal',sum)    
        console.log('subtotal In setTotal',subTotal)      
            
        return Math.round(Number(sum * discount))
      })     
     
    

  };

    quote();
    
  }, [formData])

  const myDate = new Date()

  const dateToClean = new Date(formData.cleaningDate )


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
  ${myDate.getDate()}-${month(myDate.getMonth())}-${myDate.getFullYear()}`;

 const sheduledCleaning = `
  ${dateToClean.getUTCDate()}-${month(dateToClean.getUTCMonth())}-${dateToClean.getUTCFullYear()}`;

  


      let frequencyString = ''
      
      if(formData.cleaningFrequency ==='1'){
          frequencyString = 'One time'
      }else if(formData.cleaningFrequency ==='0.8'){
          frequencyString = 'Weekly'
      }else if(formData.cleaningFrequency ==='0.85'){
        frequencyString = 'Biweekly'
      }else if(formData.cleaningFrequency ==='0.9'){
        frequencyString = 'Monthly'
      }else{
        frequencyString = 'N/A'
      }

       let discountString = '';
      if(formData.cleaningFrequency ==='1'){
          discountString = '0%'
      }else if(formData.cleaningFrequency ==='0.8'){
          discountString = '20%'
      }else if(formData.cleaningFrequency ==='0.85'){
          discountString = '15%'
      }else if(formData.cleaningFrequency ==='0.9'){
          discountString = '10%'
      }else{
        discountString = '0%'
      }
     
      
      
  return(

    <div className="book-container">     
      {/* <header className="head-page">
          <p>i am the head page</p>
      </header> */}
      <div className="form-section-container">
        <section className="section-left">
          
          <h1 className="headpage">Please complete your cleaning Booking</h1>
           <div>
    {/* {console.log(formData)} */}
      {/* {submitting &&
       <div>
         your booking is submitted
         <ul>
           {Object.entries(formData).map(([name, value]) => (
             <li key={name}><strong>{name}</strong>:{value.toString()}</li>
           ))}
         </ul>
       </div>
      } */}
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
              <p> Street #  & Name</p>
              <input 
                name="streetName"
                placeholder="street number and name"
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
      </fieldset>
      
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
      {/* <div className="flex-element">     
          <label>
              <p>Square footage og the property</p>
              <input 
                name="squareFootage"
                placeholder="enter the square footage of your property"
                type='integer'
                onChange={handleChange}
              />
            </label>     
        </div> */}


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
      <div onChange={handleChange}  defaultChecked className="flexContainer radio-container">    
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
                    defaultValue={0}
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
                  <label htmlFor="window">Inside the window (+$5)</label>
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
                  <label htmlFor="laundry">Load of laundry (+$35)</label>
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
     
      {/* <div>
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
      </div> */}
      <fieldset className="fieldset-container">
        <legend className="legend">Schedule your time</legend>
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

      </fieldset>
      
      <button type="Submit">Submit</button>

      <div className="quote">
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
                    <p>Quote number: {idGenerator(5)}</p>
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
              <div className="table_raw subTotal_Row">
                <div className="table_left">
                   <p>                    
                    Subtotal
                   </p>                    
                </div>                
                <div className="table_right">
                  <p>{subTotal}</p>
                </div>

              </div>
              <div className="table_raw">
                <div className="table_left">
                  
                  {discountString === '0%' ? <p style={HideDiv}></p> : <p style={ShowDiv}>Discount </p>}
                                    
                </div>                
                <div className="table_right">
                  {discountString === '0%' ? <p style={HideDiv}></p> : <p style={ShowDiv}>{discountString}</p>}
                </div>

              </div>
              <div className="table_raw">
                <div className="table_left">
                   <p>                    
                    Grand Total
                   </p>                    
                </div>                
                <div className="table_right">
                   <p>{total}</p>     
                    {/* {isNaN(total) ? 'subtotal': {total}}          */}
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
        {/* <section className="section-middle"></section> */}
        <section className="section-right">
          <div className="right-top right-box">            
            <p>Top</p>
          </div>
          <div className="booking-summary-container">
            <div className="right-box">            
            <p>Booking Summary</p>            
          </div>
          <div className="right-box booking-detail">            
            <div className="quoteSummary">
              <div className="quoteLeft">
                Cleaning requested:
              </div>
              <div className="quoteRight">
                {formData.cleaningType}
              </div>              
            </div>  
            <div className="quoteSummary">
              <div className="quoteLeft">
                Property:
              </div>
              <div className="quoteRight">
                {formData.bedroom } {bedroomString} and {formData.bathroom} {bathroomString}
              </div>              
            </div>  
            <div className="quoteSummary">
              <div className="quoteLeft">
                Frequency:
              </div>
              <div className="quoteRight">
                {frequencyString}
              </div>              
            </div>  
            <div className="quoteSummary">
              <div className="quoteLeft">
                Cleaning Date:
              </div>
              <div className="quoteRight">
                {sheduledCleaning} at {formData.cleaningTime}
              </div>              
            </div>  

          </div>
          <div className="right-box totalSummary" >            
            <div className="quoteLeft">
                Total:
              </div>
              <div className="quoteRight">
                $ {total}
              </div>             
          </div>
          </div>
          
          
        </section>
      </div>
    </div>
    



    
   
  )
}


// const idGenerator = (lengthOfId) => {    
//     const myVariable = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~@!#$%^&*()_+:"?><|[]{}';
//     let numberOfChar = 0
//     let myId = ''
//     while (numberOfChar < lengthOfId) {
//       myId += myVariable.charAt(Math.floor(Math.random() * myVariable.length));
//       numberOfChar += 1;
//     }
//     return Date.now() +'-'+ myId ;
// }

// console.log('myId',idGenerator(5));