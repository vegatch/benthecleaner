
// import React from 'react'

export  function idGenerator(lengthOfId) { 
    const myVariable = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~@!#$%^&*()_+:"?><|[]{}';
    let numberOfChar = 0
    let firstId = ''
    let secondId = ''
    while (numberOfChar < lengthOfId) {
      firstId += myVariable.charAt(Math.floor(Math.random() * myVariable.length));
      secondId += myVariable.charAt(Math.floor(Math.random() * myVariable.length));
      numberOfChar += 1;
    }
    
    return firstId+ '-'+Date.now() +'-'+ secondId ;
}


