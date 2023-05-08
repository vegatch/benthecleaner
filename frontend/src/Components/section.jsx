import React from 'react'


export const Section = ({arrayObject, imgUrl}) =>{
	return (
    	<div className="section-flex">
          <div className="sectionIntro-left">
                {arrayObject.map(({ id, Description }) => (
                    <p key={id}> {Description} </p>         
                ))}
          </div>
          <div className="sectionIntro-right">
            <img className="section-img" src={imgUrl} alt='cleaning supplies'/>
          </div>
          
        </div>
    )
}