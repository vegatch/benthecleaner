import React from 'react'

const FaqList = (props) => {
  return (
    <div>
            {Object.values(props.text).map((keyName, index) => (
            <div key={index}>                
                    <div>{keyName.title}</div>
                    <div><p className='faq-description'>{keyName.description}</p></div>
            </div>
        ))}
        </div>
  )
}

export default FaqList
