import React from "react";

import "../CSS/book.css";

export function BookNowForm() {
    
    return(
        <div className="form-container">
            <div>
                <h1> Please fill out the form below to book your service</h1>
            </div>
            <div>
                <form>
                    <fieldset>
                        <legend>Space to be cleaned</legend>
                        <label>
                            # of bedrooms
                            <input name="name"  />                            
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