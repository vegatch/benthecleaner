import React from 'react'
import '../CSS/faqForm.css'

const faqDetails = {
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
        cleaner: {
            cleanerQuestion:{
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
         
            
    };
    console.log(faqDetails.service.serviceQuestion.q1.title)
export const FaqForm = () => {
  return (
    <div className='faq-container'>
        <div className='faqCategory'>    
        <div>
            <h1>Service</h1>
        </div>    
        <div>
            {Object.values(faqDetails.service.serviceQuestion).map((keyName, index) => (
            <div key={index}>                
                    <div>{keyName.title}</div>
                    <div><p className='faq-description'>{keyName.description}</p></div>
            </div>
        ))}
        </div>

        </div>
        <div className='faqCategory'>    
        <div>
            <h1>Booking</h1>
        </div>    
        <div>
            {Object.values(faqDetails.booking.bookingQuestion).map((keyName, index) => (
            <div key={index}>                
                    <div>{keyName.title}</div>
                    <div><p className='faq-description'>{keyName.description}</p></div>
            </div>
        ))}
        </div>

        </div>
        <div className='faqCategory'>    
        <div>
            <h1>Cleaners</h1>
        </div>    
        <div>
            {Object.values(faqDetails.cleaner.cleanerQuestion).map((keyName, index) => (
            <div key={index}>                
                    <div>{keyName.title}</div>
                    <div><p className='faq-description'>{keyName.description}</p></div>
            </div>
        ))}
        </div>

        </div>
    </div>
    
  )
}


