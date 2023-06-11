import React from 'react'
// import React, { useEffect } from "react";
import {useState} from 'react';
import '../CSS/faqForm.css'

   const faqDisplay = (faq) => {


  return (
    <div>
            {Object.values(faq).map((keyName, index) => (
            <div key={index}>                
                    <div className='title-question'>{keyName.title}</div>
                    <div><p className='faq-description'>{keyName.description}</p></div>
            </div>
        ))}
        </div>
  );
}

const faqDetails = {
        benskya: {
            benskyaQuestion:{
                q1:{
                    title: 'what Benskya means?',
                    description:'Yes, we are insured and bonded.'
                },
                q2:{
                    title: 'Why you choose this name?',
                    description:'Currently we work 50 miles radius from indianapolis which implies all indianapolis and surrounding cities.'
                },
            },
            
        },
        service: {
            serviceQuestion:{
                q1:{
                    title: 'Are you insured?',
                    description:'Yes, we are insured and bonded.'
                },
                q2:{
                    title: 'what is your market delimitation?',
                    description:'Currently we work 50 miles radius from indianapolis which implies all indianapolis and surrounding cities.'
                },
            },
            
        },
        booking: {
            bookingQuestion:{
                q1:{
                    title: 'How do I book?',
                    description:'You can book online by clicking on our book online button or call us.'
                },
                q2:{
                    title: 'How many people will come to my house?',
                    description:'Currently we work 50 miles radius from indianapolis which implies all indianapolis and surrounding cities.'
                },
            },
            
        }, 
        cancellation: {
            cancellationQuestion:{
                q1:{
                    title: 'Can I cancel a booking?',
                    description:'You can book online by clicking on our book online button or call us.'
                },
                q2:{
                    title: 'How late can I cancel a booking without penality?',
                    description:'Currently we work 50 miles radius from indianapolis which implies all indianapolis and surrounding cities.'
                },
            },
            
        }, 
        price: {
            priceQuestion:{
                q1:{
                    title: 'How can I pay?',
                    description:'You can book online by clicking on our book online button or call us.'
                },
                q2:{
                    title: 'Can I pay with cash?',
                    description:'Currently we work 50 miles radius from indianapolis which implies all indianapolis and surrounding cities.'
                },
            },
            
        },
        cleaner: {
            cleanerQuestion:{
                q1:{
                    title: 'Do your cleaners qualified',
                    description:'You can book online by clicking on our book online button or call us.'
                },
                q2:{
                    title: 'How many people will come to my house?',
                    description:'Currently we work 50 miles radius from indianapolis which implies all indianapolis and surrounding cities.'
                },
            },
            
        },      
         
            
    };
    // console.log(faqDetails.service.serviceQuestion.q1.title)
const briefDesc = {
    benskya: 'Benskya is a family owned company operating in Indianapolis and surrounding cities offering high quality home cleaning to home owners'
}


const question = 'Explore questions ->'
    export const FaqForm = () => {
        const [isVisible, setisVisible] = useState(false);
        const [isParam, setisParam] = useState();
    // const ref = React.useRef(null);
    // console.log(ref)
    

    const visibilityToggle = event => {    
        setisVisible(visible => !visible);
    
    };

    const updateParam = (myObject) => {
        
        setisParam(previousParam => myObject)
        console.log('from updateparam',isParam)
        
            
    }

    



  return (
    <div>
        <div className='faq-container'>
            <div className='faq-title-container'>
                <div className='faqCategory' id="faqDetails.service.serviceQuestion" onClick={ () =>{visibilityToggle(); updateParam(faqDetails.benskya.benskyaQuestion)}} >            
                    <h1>About Benskya</h1> 
                    <p className='briefDesc'>{briefDesc.benskya}</p>
                    <p>{question}</p>

                </div>
                <div className='faqCategory' id="faqDetails.service.serviceQuestion" onClick={ () =>{visibilityToggle(); updateParam(faqDetails.service.serviceQuestion)}} >            
                    <h1>Service</h1> 
                </div>
                <div className='faqCategory' id="faqDetails.service.serviceQuestion" onClick={ () =>{visibilityToggle(); updateParam(faqDetails.booking.bookingQuestion)}} >            
                    <h1>Booking</h1> 
                </div>
                <div className='faqCategory' id="faqDetails.service.serviceQuestion" onClick={ () =>{visibilityToggle(); updateParam(faqDetails.cancellation.cancellationQuestion)}} >            
                    <h1>Cancellation</h1> 
                </div>
                <div className='faqCategory' id="faqDetails.service.serviceQuestion" onClick={ () =>{visibilityToggle(); updateParam(faqDetails.price.priceQuestion)}} >            
                    <h1>Billing</h1> 
                </div>
                <div className='faqCategory' id="faqDetails.service.serviceQuestion" onClick={ () =>{visibilityToggle(); updateParam(faqDetails.cleaner.cleanerQuestion)}} >            
                    <h1>Cleaner</h1> 
                </div>
            </div>


        
    </div>
        <div className='faq-container'>
            <div className='faq-title-container'>                                         
                    {isVisible && faqDisplay(isParam)}        
            </div>
            
        </div>

    </div>
    
    
  )
}


