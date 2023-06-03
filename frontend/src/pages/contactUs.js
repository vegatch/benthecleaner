import React, { useRef } from 'react'
import { HomeContent } from "../Components/homeContent";
import background from '../pics/house-cleaning.jpg'
import emailjs from "emailjs-com";

const contactStyle = {
   page:{
    with:"100%",
    // boxSizing:"border-box"
   },
   flexContaine: {
    display: "flex",    
    width: "70%",
    justifyContent: "space-between",
    // alignItems:"center",
    // boxShadow: "0 0 3px 2px #cec7c759",
    // margin: "0 2rem",
    // padding: 20,
    // borderRadius: '1rem',
    margin:"auto",
  },
  leftContainer:{
    width: "72%",
  },
  rightContainer:{
    width: "25%",
  },

  rightElement:{
    margin: "0 0 2rem 0"
  }, 
  importantText:{
    fontSize: "1.8rem",
    fontWeight: "bold",
    marginBottom: "1rem"

  },
  form:{
    width:"100%",
    
  },
  input:{
    boxSizing:"border-box",
    paddingLeft:".2rem",
    marginBottom:"1rem",
    with:"100%"
  },
  textarea:{
    // fontSize: "0.8rem",
    // letterSpacing: "1px",
    // padding: "10px",
    // maxWidth: "100%",
    // lineWeight: "1.5",
    // borderRadius: "1rem",
    border: "1px solid ligthgray",
    // boxShadow: "1px 1px 1px #999",
    // height:"10rem",
    // with:"100%",
    boxSizing:"border-box",
    width: "100%",
    backgroundColor:"inherit"
    
  },
  label: {
    display: "block",
    marginBottom: "1rem",
}
}

const Contact = () => {
  const form = useRef();
    const sendEmail =(e) =>{
        e.preventDefault();

        emailjs.sendForm(
            // `${process.env.REACT_APP_SERVICE_ID}`,
            // process.env.REACT_APP_TEMPLATE_ID,
            "service_h9iq583",
            "template_zvi6kcy",
            form.current,
            "aX7cT6vMfpAbYT1QC"
            // `${process.env.REACT_APP_KEY_ID}`
        ).then(
            result => console.log(result.text),
            error => console.log(error.text)
        );
    };

    return(

        <div style={contactStyle.page}>
        <div>
          <HomeContent text='Ben is my man' photo={background}/>
        </div>

            {/* <div>Get in touch</div> */}
            <div style={contactStyle.flexContaine}>
                <div style={contactStyle.leftContainer}>
                  <div>
                    <p style={contactStyle.importantText}> Let's Connect</p>
                    <p> Please fill out this form and we will get back with you ASAP</p>
                  </div>
                  <div >
                     <form ref={form} onSubmit={sendEmail} style={contactStyle.form}>
                      <label>Name</label>
                      <input type="text" name="user_name" style={contactStyle.input}/>
                      <label>Email</label>
                      <input type="email" name="user_email" style={contactStyle.input}/>
                      <label>Phone number</label>
                      <input type="text" name="phone_number" style={contactStyle.input}/>
                      <label style={contactStyle.label}>Message</label>
                      <textarea name="message" cols="30" rows="15" style={contactStyle.textarea}/>
                      {/* <input type="submit" value="Send" /> */}
                      <button> send</button>
                  </form>
                  </div>
                </div>
                <div style={contactStyle.rightContainer}>
                   <div style={contactStyle.rightElement}>
                      <p>Contact us:</p>
                      <p>
                        For any question regarding our service. 
                        Please email us at benskyateam@gmail.com 
                      </p>
                   </div>
                   <div style={contactStyle.rightElement}>
                      <p>Call us:</p>
                      <p>786-247-2127</p>
                   </div>
                </div>
            </div>
        </div>
          
    )
};
  
export default Contact;