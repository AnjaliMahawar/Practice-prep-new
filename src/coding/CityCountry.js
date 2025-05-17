import React, { useState } from "react";

const CityCountry = () => {
  
  const countries = [
    {
      name: "india",
      city: ["ratlam", "delhi", "Bhopal"],
    },
    {
      name: "pak",
      city: ["lohar", "krachi"],
    },
  ];
  const [city, setcity] = useState(countries[0].city);
  const [country,setCountry]=useState(countries[0].name)
  const hndlechg = (val) => {
    console.log("val", val);
    const num = Number(val);
    setcity(countries[val].city);
  };
  const handlechnge = (e) => {
    const index=Number(e.target.value)
    console.log("index",typeof(index))
    setCountry(countries[index].name)
    setcity(countries[index].city)
    
  }
  console.log("country", country)
  const handlechngecity = (e) => {
    console.log("city", e.target.value)
    setcity(e.target.value)
  }
  return (
    <div>
      <h1>City country</h1>
      <select  onChange={handlechnge}>
        {countries.map((cv, index) => {
          return <option value={index}>{cv.name}</option>;
        })}
      </select>

      <select onChange={handlechngecity}>
        {city.map((cv, index) => {
          return <option value={cv} key={index}>{cv}</option>;
        })}
      </select>
      {/* {
            countries.map((cv,index)=>{
             return <select>
                <option value={index}>{cv.name}</option>
             </select>
            })
        } */}
      {/* <select onChange={(e)=>{hndlechg(e.target.value)}}>
          {countries.map((item,index)=>{
             return<option key={index} value={index}>{item.name}</option>
          })}
        </select>
        <select>
         o {city.map((cv,index)=>{
            return<option key={index}>{cv}</option>
          })}
        </select> */}
    </div>
  );
};

export default CityCountry;
