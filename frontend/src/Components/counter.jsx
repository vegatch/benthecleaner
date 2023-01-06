import React, { useState } from "react";

// export const Counter =() =>{
//     const [count, setCount] = useState(0)

//     const handleIncrement =() =>{
//         setCount(count + 1)
//     }

//     const handleDecrement =() =>{
//         // if(count > 0){
//         //     setCount(count - 1)   
//         // }else{
//         //     setCount(0)   
//         // }
//         count > 0 ? setCount(count - 1) : setCount(0);
        
//     }
//     return(
//         <div>
//             <div>{Counter}</div>
//             <div>
//                 <button onClick={handleIncrement}>+</button>
//             </div>
//             <div>
//                 <button onClick={handleDecrement}>-</button>
//             </div>
//         </div>
//     )

// }


export const Counter = () => {
  const [count, setCount] = useState(0)  
  const handleIncrement = () => {
    setCount(count + 1)
  }
  const handleDecrement = () => {
    count > 0 ? setCount(count - 1) : setCount(0);
  }
  
  return (
    <div >      
      <div >
        {count}
      </div>
      <div className="buttons">
        <button onClick={handleDecrement} disabled={count === 0 ? true : false}>-</button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  )
}


let select =() =>{
    let numberOfRooms = 0;
    for (let i = 0; i < 10; i++) {
        numberOfRooms +=  i ;
    }
    return numberOfRooms
}
select()