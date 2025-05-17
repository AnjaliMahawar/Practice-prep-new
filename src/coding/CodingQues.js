import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

const CodingQues = () => {
    const[data,setData]=useState([])
    const fetchData=async()=>{
        const url='https://jsonplaceholder.typicode.com/posts'
        try {
            const res=await axios.get(url)
            setData(res?.data)
        } catch (error) {
            console.log("error",error)
        }
    }
    const filterData=()=>{
        const fineData= data.filter((dataa)=>{
               return dataa?.id >10
            //    return dataa?.title?.includes('eum')
        })
        console.log("finedata",fineData)
    }

    useEffect(()=>{
        fetchData()
    },[])


    let spred=[1,2,3,4,5,6]
    console.log(...spred,'===========')
    console.log("data",data)
  return (
    <div>
        <h1>jsonplaceholder</h1>
        <table>
            <tbody>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                </tr>
               
                    {
                        data?.map((cv,index)=>{
                          return <tr key={index}>
                            <td>{cv?.id}</td>
                            <td>{cv?.title}</td>
                          </tr>
                        })
                    }
                
                

            </tbody>
        </table>
        <h1>Filtter Data</h1>
                <Button onClick={filterData}>filter Data</Button>
    </div>
  )
}

export default CodingQues