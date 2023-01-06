// import React from "react";
import React, { useState } from "react";

import "../CSS/book.css";

export function BookNowForm() {
    // ------------------
    const [count, setCount] = useState(0)  
    const handleIncrement = (e) => {
        e.preventDefault();
        setCount(count + 1)
    }
    const handleDecrement = (e) => {
        e.preventDefault();
        count > 0 ? setCount(count - 1) : setCount(0);
    }
    const countHandler = e => {
        e.preventDefault();
        setCount(e.target.value);

    };

    // ------------------
    // ------------------- Form states
    // const [bookInfo, setBookInfo] = useState({
    //     bedroom: 0,
    //     bathroom: 0,
    // });

    // const bookIncrement = (e) => {
    //     e.preventDefault();
    //     setBookInfo({countHandler})
    // }
    // const bookDecrement = (e) => {
    //     e.preventDefault();
    //     setBookInfo({handleDecrement});
    // }
    // const bookHandler = e => {
    //     e.preventDefault();
    //     setCount(e.target.value);

    // };

    // --------------------
    
    return(
        <div className="form-container">
            <div>
                <h1> Please fill out the form below to book your service</h1>
            </div>
            <div>
                <form>
                    <fieldset>
                        <legend>Space to be cleaned</legend>
                        <label className="label-flex-container">
                            # of bedrooms:
                            <input type="text"
                                name="bedroom"
                                onChange={countHandler}
                                value={count} />  
                            <div className="btn">
                                <button onClick={handleIncrement}>^</button>
                                <button className="btn2" onClick={handleDecrement} disabled={count === 0 ? true : false}>^</button>
                            </div>                          
                        </label>
                        <label className="label-flex-container">
                            # of bathrooms:
                            <input type="text"
                                name="bathroom"
                                onChange={countHandler}
                                value={count} />  
                            <div className="btn">
                                <button onClick={handleIncrement}>^</button>
                                <button className="btn2" onClick={handleDecrement} disabled={count === 0 ? true : false}>^</button>
                            </div>                          
                        </label>
                        
                    </fieldset>
                    {/* <fieldset></fieldset>
                    <fieldset></fieldset>
                    <fieldset></fieldset> */}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

// export default bookNowForm;