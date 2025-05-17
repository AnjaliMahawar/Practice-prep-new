import React from 'react'

const Objectt = () => {
    const obj={
        name:'anju',
        age:'21',
        "address of anju":"neemuch",
        num1:100,
        num2:20,
        sub:{
            eng:10,
            hin:20
        }
        
    }
    const {name}=obj //anju //destructring
    const{sub:{eng}}=obj //multi lavel destucring
    console.log(obj['address of anju'],'......')  //neemuch
    for(let key in obj){
        
        if(typeof obj[key]=='number'){
           obj[key]=obj[key]*2
           console.log("**",obj[key])
        }
        // console.log(obj[key],'value');
        // console.log(key)// key
    }
    // console.log({a:1}==={a:1}) //flase becoz both represent diffrent memory space
    console.log('spred',...'anjali')
  return (
    <div>Objectt</div>
  )
}
//shallo and deep copy
export default Objectt