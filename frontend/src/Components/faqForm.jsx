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
                    title: 'why doing business with Benskya?',
                    description:'Benkya cleaning Services is a reputable, affordable and honest company opertating in Indianapolis and surrounding cities. On top of that we commit to nake you happy by doing our job with great care and detail'
                },
                q2:{
                    title: 'Does Benskya insured and bonded ?',
                    description:'Benskya is fully insured and bonded.'
                },
            },
            
        },
        service: {
            serviceQuestion:{
                q1:{
                    title: 'What Service you offer?',
                    description:'Benskya offers all kinds of indoor residential cleaning including standard cleaning, deep cleaning, move in/ move out cleaning, post-construction cleaning and more.'
                },
                q2:{
                    title: 'Will I be satisfied with your cleaning?',
                    description:'Yes, we commit 100% to make you satisfy however if you are not satisfied just spot the location that needs to be taken care of and we will send a cleaner to fix it at a convenient time to you at no additional cost '
                },
                q3:{
                    title: 'where are you operating?',
                    description:'Currently we operate in indianapolis, Greenwood, Plainfield, Fishers, Beech Grove, Carmel, and Avon.'
                },
                q4:{
                    title: 'why should I choose you?',
                    description:'Our approach and methodolgy makes us differnt from our competitors. We believe in making in your satisfaction by cleaning your house with all the cares and details deserved '
                },
                q5:{
                    title: 'Is it mandatory to be present for a cleaning?',
                    description:`It's not mandatory to be there for the cleaning process however you are very welcome to be present if you choose to. If you are not going to be there just tell us to get into the house to perform our job. `
                },
                q6:{
                    title: 'What is the difference between your different services?',
                    description:` Our residential cleaning service is divided into standard cleaning, deep cleaning, move in/ move out cleaning, post construction cleaning. Standard cleaning is a basic cleaning services which is suitable for a house that has been professionally deep cleaned in the last three months Deep cleaning as its name implies it's more thourough and more areas are covered in this package than the standard cleaning. Move in / Move out cleaning is a deep cleaning with great details to remove all germs of the previous occupant of the building. Post Construction cleaning is also a deep cleaning with focus to remove all debris left after the construction work.
                    `
                },
                q7:{
                    title: 'Do you clean house with pet?',
                    description:`  Yes, Benskya cleans any residential house regardless of the present of pets or not. Contrary to our competitors, no estra charge will be added if you have pets.
                    `
                },
                q8:{
                    title: 'What is not covered in your service?',
                    description:` Our cleaners are not trained to handle biohazrds and houses infested with insects/rodents. So if any of these apply to your place. Benskya won't be able to ckean ot. Also, our team doesn't equip ladder, so they won't clean from height.Benskya doesn't offer also resurfacing, waxing and refurnishing of floor.
                    `
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

    const visibilityToggle = event => {    
        setisVisible(visible => !visible);    
    };

    const updateParam = (myObject) => {        
        setisParam(previousParam => myObject)       
    }

    const updateSection = (myparam) =>{
        setSection( prevState => myparam)
    }

    const visibilityFalse = () =>{
        setisVisible(false)
    }

    


  return (
    <div>
        <div className={isVisible ?  'faq-hide' :'faq-container' }>
            <div className='faq-title-container'>
                <div className='faqCategory' id="faqDetails.service.serviceQuestion" 
                onClick={ () =>{visibilityToggle(); updateSection('About Benskya'); updateParam(faqDetails.benskya.benskyaQuestion)} } >            
                    <h1 className='highlightWord'>About Benskya</h1> 
                    <p className='briefDesc'>{briefDesc.benskya}</p>
                    <p className='highlightWord'>{question}</p>

                </div>
                <div className='faqCategory' id="faqDetails.service.serviceQuestion" 
                onClick={ () =>{visibilityToggle(); updateSection('Service'); updateParam(faqDetails.service.serviceQuestion)}} >            
                    <h1>Service</h1> 
                    <p className='briefDesc'>{briefDesc.service}</p>
                    <p>{question}</p>
                </div>
                <div className='faqCategory' id="faqDetails.service.serviceQuestion" onClick={ () =>{visibilityToggle(); updateSection('Booking'); updateParam(faqDetails.booking.bookingQuestion)}} >            
                    <h1>Booking</h1> 
                    <p className='briefDesc'>{briefDesc.booking}</p>
                    <p>{question}</p>
                </div>
                <div className='faqCategory' id="faqDetails.service.serviceQuestion" onClick={ () =>{visibilityToggle(); updateSection('Cancellation'); updateParam(faqDetails.cancellation.cancellationQuestion)}} >            
                    <h1>Cancellation</h1> 
                    <p className='briefDesc'>{briefDesc.cancellation}</p>
                    <p>{question}</p>
                </div>
                <div className='faqCategory' id="faqDetails.service.serviceQuestion" onClick={ () =>{visibilityToggle(); updateSection('Billing'); updateParam(faqDetails.price.priceQuestion)}} >            
                    <h1>Billing</h1> 
                    <p className='briefDesc'>{briefDesc.price}</p>
                    <p>{question}</p>
                </div>
                <div className='faqCategory' id="faqDetails.service.serviceQuestion" onClick={ () =>{visibilityToggle(); updateSection('Cleaners'); updateParam(faqDetails.cleaner.cleanerQuestion)}} >            
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
                        <h1 className='emphasis-title'>{section}</h1>
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


