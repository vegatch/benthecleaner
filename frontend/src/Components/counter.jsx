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
    let price = 0
    if(deepClean === false){
         
        switch (bedroomNum) {
            case bedroomNum === 0:
                cleanPrice = 0
                break;
            case (bedroomNum >1 && bedroomNum <=3 ):
                bedroomPrice = 20;
                price = (basePrice + (bedroomNum * bedroomPrice) + (bathroomNum * bathroomPrice)) 
                standardCleanPrice = (price *.07) + price
                cleanPrice = standardCleanPrice
                break;
            case (bedroomNum >=4 && bedroomNum <=6 ):
                bedroomPrice = 40;
                price = (basePrice + (bedroomNum * bedroomPrice) + (bathroomNum * bathroomPrice)) 
                standardCleanPrice = (price *.07) + price
                cleanPrice = standardCleanPrice
                break;
            default:
                text = "No value found";
        }
        // if(bedroomNum<=3){
        //     bedroomPrice = 20;
        //     let price = (basePrice + (bedroomNum * bedroomPrice) + (bathroomNum * bathroomPrice)) 
        //     standardCleanPrice = (price *.07) + price
        //     cleanPrice = standardCleanPrice
        // }else{
        //     bedroomPrice = 30;
        //     let price = (basePrice + (bedroomNum * bedroomPrice) + (bathroomNum * bathroomPrice)) 
        //     standardCleanPrice = (price *.07) + price
        //     cleanPrice = standardCleanPrice
        // }
    }
       return  cleanPrice
}
select(false, 1, 0)

let calculateQuote =(deepClean=false, bedroomNum, bathroomNum=0 ) =>{
    
    let bathroomPrice = 30;
    let bedroomPrice = 0;
    let bedroomTotalPrice = 0
    let standardCleanPrice = 0
    let cleanPrice = 0
    let basePrice = 100;    

    if(bedroomNum > 0 &&  bedroomNum < 3){
        bedroomPrice = 20
        bedroomTotalPrice = bedroomPrice * bedroomNum
    }else if(bedroomNum === 3){
        bedroomPrice = 24
        bedroomTotalPrice = bedroomPrice * bedroomNum
    }
    else if(bedroomNum === 4){
        bedroomPrice = 28
        bedroomTotalPrice = bedroomPrice * bedroomNum
    }
    else if(bedroomNum === 5){
        bedroomPrice = 30
        bedroomTotalPrice = bedroomPrice * bedroomNum
    }
    else if(bedroomNum === 6){
        bedroomPrice = 34
        bedroomTotalPrice = bedroomPrice * bedroomNum
    }
    else{
        bedroomPrice = 36
        bedroomTotalPrice = bedroomPrice * bedroomNum
    }
    // let bedroomTotalPrice = bedroomPrice * bedroomNum
    let bathroomTotalPrice = bathroomPrice * bathroomNum
    standardCleanPrice = basePrice + bedroomTotalPrice + bathroomTotalPrice
    
    cleanPrice = deepClean === true ? standardCleanPrice + 100 : standardCleanPrice;
    
    return  cleanPrice

}

calculateQuote(false, 2, 1)