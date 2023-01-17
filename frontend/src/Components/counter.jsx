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


let select = (deepClean=false, bedroomNum, bathroomNum ) =>{
    let bathroomPrice = 30;
    let bedroomPrice = 20;
    let standardCleanPrice = 0
    let cleanPrice = 0
    let deepCleanPrice = standardCleanPrice + 100;
    let basePrice = 95;
    if(deepClean === false){
        if(bedroomNum<=3){
            bedroomPrice = 20;
            let price = (basePrice + (bedroomNum * bedroomPrice) + (bathroomNum * bathroomPrice)) 
            standardCleanPrice = (price *.07) + price
            cleanPrice = standardCleanPrice
        }else{
            bedroomPrice = 30;
            let price = (basePrice + (bedroomNum * bedroomPrice) + (bathroomNum * bathroomPrice)) 
            standardCleanPrice = (price *.07) + price
            cleanPrice = standardCleanPrice
        }
    }
       return  cleanPrice
}
select(false, 6, 0)