import React from 'react'


export const Button = props => {


  return (
    <button
      id={props.id}
    
    className={`btn `}
      onClick={props.clickHandler}
      type={props.type}
      disabled={props.isDisabled}
    >
      {props.value}
    </button>
  );
};