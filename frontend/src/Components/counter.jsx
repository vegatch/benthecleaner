import React, { useState } from "react";

export const Counter =() =>{
    const [count, setCount] = useState(0)

    const handleIncrement =() =>{
        setCount(count + 1)
    }

    const handleDecrement =() =>{
        if(count > 0){
            setCount(count - 1)   
        }else{
            setCount(0)   
        }
        
    }
    return(
        
    )

}