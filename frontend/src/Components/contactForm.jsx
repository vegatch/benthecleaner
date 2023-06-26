
import React, { useState } from 'react'
// import { HomeContent } from "../Components/homeContent";
// import background from '../pics/house-cleaning.jpg'
// import emailjs from "emailjs-com";
import { HiMail } from 'react-icons/hi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { ImLocation } from 'react-icons/im';


const contactStyle = {
   page:{
    width:"90%",
    margin:'0 auto',
    
   },
   flexContaine: {
    display: "flex",    
    width: "100%",    
    margin:"auto",
    alignItems:'center',
  },
  leftContainer:{
    width: "50%",
    padding: '2rem'
  },
  rightContainer:{
    width: "50%",
    padding: '2rem'
  },

  leftElementFlex:{
    margin: "1rem 0",
    display: "flex",    
    width: "100%",   
    alignItems:"center" ,
    
  }, 
  favImage:{
    margin:"0 1rem 0 0",
    fontSize: "2rem",
  },
  importantText:{
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "2rem"

  },
  form:{
    width:"100%",
    margin:'1rem 0',
    boxSizing:"border-box",
    border:'.1rem solid lightgray',
    padding:'2rem',
    borderRadius:'2rem'
    
  },
  input:{
    boxSizing:"border-box",
    paddingLeft:".2rem",
    marginBottom:"1rem",
    with:"100%"
  },
  textarea:{
    border: "1px solid ligthgray",
    boxSizing:"border-box",
    width: "100%",
    backgroundColor:"inherit"
    
  },
  label: {
    display: "block",
    marginBottom: "1rem",
  },
  btn:{
    width: "100%",
    height:"3rem",
    borderRadius: ".5rem",
    outline: "0",
    color:'white',
    fontSize:'1.4rem',
    border: "0",    
    backgroundColor: "#ff6e40",   
    cursor:"pointer",
  },
  
  
}

export const ContactForm = () => {
  // const form = useRef();

  const [messageState, setMessageState] = useState({
   client_name: "",
   client_email: "",
   phone_number:'',
   message: "",
 });

 const handleChange = (e) => {
   setMessageState((prevState) => ({
     ...prevState,
     [e.target.name]: e.target.value,
   }));
 }
    const submitEmail = async (e) => {
   e.preventDefault();
   console.log({ messageState });
   const response = await fetch("http://localhost:3001/send", {
     method: "POST",
     headers: {
       "Content-type": "application/json",
     },
     body: JSON.stringify({ messageState }),
     
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
       setMessageState({
          client_name: "",
          client_email: "",
          phone_number:'',
          message: "",
       });
     });
 };

    return(

        <div style={contactStyle.page}>
            <div style={contactStyle.flexContaine}>
                <div style={contactStyle.leftContainer}>
                    <div>
                        <p style={contactStyle.importantText}>Let's have a conversation</p>
                    </div>
                   <div style={contactStyle.leftElementFlex}>                     
                      <div>
                       <HiMail style={contactStyle.favImage}/>
                      </div>
                      <div>
                       <p>benskyallc@gmail.com</p>
                      </div>
                   </div>
                   <div style={contactStyle.leftElementFlex}>                      
                      <div >
                       <BsFillTelephoneFill style={contactStyle.favImage}/>
                      </div>
                      <div>
                       <p>786-247-2127</p>
                      </div>
                   </div>
                   <div style={contactStyle.leftElementFlex}>                      
                      <div>
                       <ImLocation style={contactStyle.favImage}/>
                      </div>
                      <div>
                       <p>Indianapolis, IN</p>
                      </div>
                   </div>
                </div>
                <div style={contactStyle.rightContainer}>
                  
                  <div >
                     <form  onSubmit={submitEmail} style={contactStyle.form}>
                      <label>Name</label>
                      <input 
                        type="text" 
                        name="client_name" 
                        onChange={handleChange} 
                        value={messageState.client_name}
                        style={contactStyle.input} 
                        required/>
                      <label>Email</label>
                      <input 
                        type="email" 
                        name="client_email" 
                        onChange={handleChange} 
                        value={messageState.client_email}
                        style={contactStyle.input} required/>
                      <label>Phone number</label>
                      <input 
                        type="text" 
                        name="phone_number" 
                        onChange={handleChange} 
                        value={messageState.phone_number}
                        style={contactStyle.input} required/>
                      <label style={contactStyle.label}>Message</label>
                      <textarea 
                        name="message" 
                        cols="30" 
                        rows="15" 
                        onChange={handleChange} 
                        value={messageState.message}
                        style={contactStyle.textarea} required/>
                      
                      <button style={contactStyle.btn}> Send us your message</button>
                  </form>
                  </div>
                </div>
                
            </div>
        </div>
          
    )
};
  

