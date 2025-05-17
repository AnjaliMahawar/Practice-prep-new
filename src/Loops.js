
function Loops() {
    const numbers = [65, 44, 12, 4];
    var sum=0
    var arr=[]
   const num= numbers.forEach(function myFunction(item) {
        if(item>12){
           arr.push(item)
        };
      });
      console.log("arr",arr)
   console.log("sum",sum)
   const obj={
    "name":"anju",
    "city":"pune",
    "age":21,
    "eeducation":"MCA"
}
const arr1=[1,2,3,44,5,6,7]
for(let key in obj){
    console.log("x",key,obj[key] ) //key value
}
for(let key in arr1)
{
  console.log("......",key ,arr1[key])
}

//for of loop 
for (let key of arr1){
  console.log("for off", key, arr1)
}
  return (
    <div>
        <h1>foreach</h1>
       
    </div>
  )
}

export default Loops