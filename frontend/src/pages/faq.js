import React from 'react';
import { FaqForm } from "../Components/faqForm";
import { HomeContent } from "../Components/homeContent";
import background from '../pics/house-cleaning.jpg'


const headMessage = `Welcome to Benskya's FAQ page. How can we serve you today`

const Faq = () => {
    return(
        <div>
            <div>
                <HomeContent text={headMessage} photo={background}/> 
            </div>
            <div>
                <FaqForm />
            </div>
        </div>
    )

}

export default Faq
