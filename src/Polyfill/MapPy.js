// arrayBuffer.map((cv,index,arr)=>{})
Array.prototype.myMap=function(cb){
    //map creates new arr so we need empty arr
    let temp =[] ;
    //this is the refrence of parent arry
    for(let i =0;i <this.length;i++){
      temp.push(cb(this[i],i,this));
    }
   return temp;
  
  }

  //filter
  Array.prototype.myFilter=function(cb){
    let temp=[]
    for (let i=0;i<this.length;i++){
        if(cb(this[i],i,this)){
            temp.push(this[i])
        }
    }
    return temp;

  }


  //reduce
  //if user forget to provide initial value then acc take first element of the arr as initial value
  //current vvalue assign as 2nd value of the array
  Array.prototype.myReduce=function(cb,initialvalue)
{
    var accumulator =initialvalue;

    for (let i=0;i<this?.length;i++){
        accumulator=accumulator?cb(accumulator,this[i],i,this):this[i]
    }
    return accumulator
}




  //use
const arr=[1,2,3,4,5,6]
const mapArr=arr.myMap((val,index,arr)=>{
 return val+2
})


const filterArr=arr.myFilter((val,i,arr)=>{
return val>4
})


//map and foreach
const newMap=arr.map((val,i)=>{
 return val+1
})

const newForeach=arr.forEach((val,i)=>{
    return arr[i]=val+1
})

const reduceArr=arr.myReduce((acc,cv,i,arr)=>{
    return acc+cv
   
},0)

// console.log("reduce",reduceArr,arr)
//coding ques 
const students=[
    {name:'anjali', class:12},
    {name:"priya",class:10},
    {name:'tannu',class:11},
    {name:"vishal",class:9}
]
const newArr=students.map((val,index)=>{
  return val?.name?.toUpperCase()
})






