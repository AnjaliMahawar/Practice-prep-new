import React from 'react'

const ArryMethos = () => {
    const arr=[10,14,15,12,3,4,5,6,11]
    //filter
    const filterArr=arr.filter((val)=>{return val>10})
    console.log("filter arr",filterArr)

    //find
    const findArr=arr.find(val=>val>10)
    console.log("findarr",findArr)

    //some
    const someArr=arr.some(val=>val>10)
    console.log("someArr",someArr)
    
    //every
    const everyArry =arr.every(val=>val>2)
    console.log("every",everyArry)

    //include 
    //The includes method is used to check if an array includes a specific element. It returns a boolean value, true if the element is found, and false if it is not. Here's the basic syntax:


    const includeArr=arr.includes(6)
    console.log("includeArr",includeArr)
  return (
    <div>ArryMethos</div>
  )
}

export default ArryMethos