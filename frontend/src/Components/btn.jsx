import React from "react";
import "../CSS/btn.css";


const buttonStyle = {
  margin: '10px 0'
};

const Button = ({ label, handleClick }) => (
  <button
    className="btn btn-main"
    style={buttonStyle}
    onClick={handleClick}
  >
    {label}
    
   {/* <NavLink to= '/bookNow'>BookNow</NavLink> */}

  </button>
);

export default Button;