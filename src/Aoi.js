import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";


const FuntionCompo = () => {
    const [data, setData] = useState([])
    const [userData, setUserData] = useState({
        name: '',
        surname: ""
    })

    const url = `https://bbaa-223-236-41-193.ngrok-free.app/api/studio/templates/`
    const call_Api_Fun = async () => {
        try {
            const res = await axios.get('https://9399-223-236-41-193.ngrok-free.app/api/studio/templates/', {
                headers: {
                    // 'Accept': 'application/json',
                    // 'Content-Type': 'application/json',
                    // 'Access-Control-Allow-Origin': '*',
                    // "Access-Control-Allow-Headers": 'application/json',
                    'ngrok-skip-browser-warning': 69420,
                }
            });

            console.log("res", res)
            setData(res?.data)
        } catch (error) {
            console.log("error", error)
        }
    }

    const handleChange = (e) => {
        console.log("eeeeee", e.target)
        const { name, value } = e.target
        setUserData({
            ...userData,
            [name]: value
        })

    }

    const postData = async (e) => {
        e.preventDefault()
        const data = {
            name: userData.name,
            surname: userData.surname
        }
        try {
            const res = await axios.post(url, data)
            console.log('post res', res)
        } catch (error) {

        }
    }
    useEffect(() => {

        call_Api_Fun()
    }, [])

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {
                    data.map((cv,index)=>{
                       return <tr>
                       <td>{index}</td>
                       <td>{cv?.title}</td>
                       <td>{cv?.body}</td>
                       
                   </tr>
                    })
                } */}

                </tbody>
            </Table>
            <form onSubmit={postData}>
                <label>name:=</label>
                <input name="name" value={userData?.name} onChange={handleChange} />
                <label>surname:=</label>
                <input name="surname" value={userData?.surname} onChange={handleChange} />
                <button type="submit">send</button>
            </form>
        </>

    )
}
export default FuntionCompo;

// fetch('https://jsonplaceholder.typicode.com/posts').then((data)=>{
//   return data.json()
// }).then((data)=>{
//   console.log("feych data",data)
// }).catch((err)=>{
//  console.log(err)
// })