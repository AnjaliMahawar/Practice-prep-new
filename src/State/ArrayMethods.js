import React, { useEffect } from 'react'

const ArrayMethods = () => {
    const arr=[1,2,3,4,5]
    const names=['anju',"tannu"]
    names.forEach((val,index,array)=>{   // foreach not return new array its chnage existing array
        // array[index]=val*2
        array[index]=val+' mahawar'
    })

    const mapArr=arr.map((cv,index,arr)=>{  // map retrun new array its not modify existing array
         return cv-1
    })

    const  filterArr=arr.filter((cv,index,arr)=>{ //filter creates new array with element which pased test case
        return cv>3  
    })

    const everyArr=arr.every((cv,index,arr)=>{
        return cv >6                                  //method checks if all array values pass a test. its retrn true flase
    })

const someArr=arr.some((cv)=>{
    return cv>10                 // method check if some value pass the test its retrun true or false
})

const indexOfArr=arr.indexOf(3) //
const findArr=arr.find((val)=>{  // method returns the value of the first array element that passes a test function.
return val<4
})

//reduce method 
//reduce method also executes callback for each array element 
//reduce accepts two parameter 1. is callback function and second is initial value
const reduce =arr.reduce((acc,val,index,arr)=>{
    return acc+val // it will return sum of all arr element
},0) //acc is result of previous calculation
console.log("indexof arr",findArr)
  return (
    <div>ArrayMethods</div>
  )
}

export default ArrayMethods