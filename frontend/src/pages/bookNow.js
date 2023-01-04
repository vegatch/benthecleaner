import React from "react";
import "../CSS/book.css";

const BookNow = () => {
  return (
    <div className="main-container">     
      <header className="head-page">
          <p>i am the head page</p>
      </header>
      <div className="book-flex-container">
        <section className="section-left">
          <p>i am the left section in the page</p>
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
            <div>
              <p>Button</p>
            </div>            
          </div>
        </section>
      </div>
    </div>
  );
};
  
export default BookNow;