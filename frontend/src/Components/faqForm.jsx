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
                    <div><p className='faq-answer'>{keyName.description}</p></div>
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
                    title: 'Service?',
                    description:'Yes, we are insured and bonded.'
                },
                q2:{
                    title: 'Are you insured?',
                    description:'Yes, we are insured and bonded.'
                },
                q3:{
                    title: 'where are you operating?',
                    description:'Currently we operate in indianapolis, Greenwood, Plainfield, Fishers, Beech Grove, Carmel, and Avon.'
                },
                q4:{
                    title: 'why should I choose you?',
                    description:'Our approach and methodolgy makes us differnt from our competitor. We believe in making you smile by cleaning your house with all the cares and details deserved '
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
    
            console.log('from updatepara2',faqDetails.service.hasOwnProperty('service'));    
            console.log('just curious',Object.entries(faqDetails.service))
        
const briefDesc = {
    benskya: 'Benskya is a family owned company operating in Indianapolis and surrounding cities offering high quality home cleaning to home owners'
    ,service: 'We offer all kinds of residential cleaning and strive everyday to go beyond and above your expectation. We will make you happy. Believe us.'
    ,booking: 'Our booking service is pretty straightforward and easy to use. In the booking section you can also automatically retrieve your personal quote'
    ,cancellation:`We offer a wide a wide range of ways to cancel a booking. And we do all of this, to put you in the dtiver seat whenever dealing with us.`
    ,price:`Every home can be professionally cleaned with us.For this, we offer imbeatable prices which makes us indeaniably the most affordable residential cleaning in the  market`
    ,cleaner:`Our cleaners are passionate professionals with great sense of details.Your satisfaction is 100% guaranteed`
    
}


const question = 'Explore questions -->'
export const FaqForm = () => {
        const [isVisible, setisVisible] = useState(false);
        const [isParam, setisParam] = useState();
        const [section, setSection] = useState();
    // const ref = React.useRef(null);
    // console.log(ref)
    

    const visibilityToggle = event => {    
        setisVisible(visible => !visible);
    
    };

    const updateParam = (myObject) => {
        
        setisParam(previousParam => myObject)  
        // setSection(previousParam => myObject)  
        setSection( 
            ()=>{
            if(isParam !== undefined){
            if(isParam.q1.title.includes('Benskya')){
                setSection(previousParam => 'Benskya')
            }
            else if(isParam.q1.title.includes('service')){
                setSection(previousParam => 'Service')
            }
            else{
                setSection(null)
            }
            console.log('from updateparam',isParam.q1.title)  
        }
        })
        console.log('from updateparam',isParam)  
        
        
    }

    const visibilityFalse = () =>{
        setisVisible(false)
    }

    const faqSection = (isParam) =>{
        
        // if(isParam){
        //     if(isParam.q1.title ==='what Benskya means?'){
        //         return 'Benskya'
        //     }
        // }
        // if(isParam !== undefined)
        // if(isParam.toString() === "faqDetails.benskya.benskyaQuestion"){
        //     return 'Benskya'
        // }else if(isParam.toString() ===  "faqDetails.service.serviceQuestion"){
        //     return 'Service'
        // }else if(isParam.toString().includes('booking')){
        //     return 'booking'
        // }else if(isParam.toString().includes('cancellation')){
        //     return 'cancellation'
        // }else if(isParam.toString().includes('price')){
        //     return 'price'
        // }else if(isParam.toString().includes('cleaner')){
        //     return 'cleaner'
        // }   
//  if(isParam !== undefined){
//      switch(isParam) {
//     case isParam.q1.includes('benkya'):
//       return 'Benskya'
//     case isParam.q1.title.includes('service'):
//       return 'Service'
//     case isParam.q1.title.includes('booking'):
//       return 'Booking'

//     default:
//       return null
//   }
//  }
   
 
    }
    console.log(faqSection('isparam',isParam))


  return (
    <div>
        <div className={isVisible ?  'faq-hide' :'faq-container' }>
            <div className='faq-title-container'>
                <div className='faqCategory' id="faqDetails.service.serviceQuestion" onClick={ () =>{visibilityToggle(); updateParam(faqDetails.benskya.benskyaQuestion)}} >            
                    <h1 className='highlightWord'>About Benskya</h1> 
                    <p className='briefDesc'>{briefDesc.benskya}</p>
                    <p className='highlightWord'>{question}</p>

                </div>
                <div className='faqCategory' id="faqDetails.service.serviceQuestion" onClick={ () =>{visibilityToggle(); updateParam(faqDetails.service)}} >            
                    <h1>Service</h1> 
                    <p className='briefDesc'>{briefDesc.service}</p>
                    <p>{question}</p>
                </div>
                <div className='faqCategory' id="faqDetails.service.serviceQuestion" onClick={ () =>{visibilityToggle(); updateParam(faqDetails.booking.bookingQuestion)}} >            
                    <h1>Booking</h1> 
                    <p className='briefDesc'>{briefDesc.booking}</p>
                    <p>{question}</p>
                </div>
                <div className='faqCategory' id="faqDetails.service.serviceQuestion" onClick={ () =>{visibilityToggle(); updateParam(faqDetails.cancellation.cancellationQuestion)}} >            
                    <h1>Cancellation</h1> 
                    <p className='briefDesc'>{briefDesc.cancellation}</p>
                    <p>{question}</p>
                </div>
                <div className='faqCategory' id="faqDetails.service.serviceQuestion" onClick={ () =>{visibilityToggle(); updateParam(faqDetails.price.priceQuestion)}} >            
                    <h1>Billing</h1> 
                    <p className='briefDesc'>{briefDesc.price}</p>
                    <p>{question}</p>
                </div>
                <div className='faqCategory' id="faqDetails.service.serviceQuestion" onClick={ () =>{visibilityToggle(); updateParam(faqDetails.cleaner.cleanerQuestion)}} >            
                    <h1>Cleaner</h1> 
                    <p className='briefDesc'>{briefDesc.cleaner}</p>
                    <p>{question}</p>
                </div>
            </div>


        
        </div>
        <div className='faq-container'>
            <div className={isVisible ? 'faq-title-container' : 'faq-hide'}>      
                <div className='flex'>
                    <div>
                        {/* <h1>Service </h1> */}
                        <h1>{section}</h1>
                    </div> 
                    <div>
                        <p className='returnToFaq' onClick={visibilityFalse}>Return to FAQ home page</p>
                    </div>  
                </div>
                <div>
                    {isVisible && faqDisplay(isParam)}    
                    {/* {faqSection(isParam)} */}
                </div>  
                                              
            </div>
            
        </div>

    </div>
    
    
  )
}


