import React from "react";
import {BookNowForm} from "../Components/bookNowForm";
import { HomeContent } from "../Components/homeContent";
import background from '../pics/house-cleaning.jpg'
import "../CSS/book.css";


const headMessage = 'You are one click away to a professionally clean home. Pease complete your booking now and relax.'


const BookNow = () => {
  return (
    <div>
      <div>
          <HomeContent text={headMessage} photo={background}/>  
      </div>
      <div className="main-container">
          <BookNowForm />
      </div>
    </div>
   
        
  );
};
  
export default BookNow;