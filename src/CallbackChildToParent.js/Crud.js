import React, { useState } from 'react'

const Crud = () => {
  const [data, setData] = useState({
    name: '',
    age: ""
  })
  const [todo, setTodo] = useState([])
  const [updateIndex, setUpdatIndex] = useState(-1)
  const[error,setError]=useState({})

  const handleChange = (e) => {
    const { value, name } = e.target
    let newVal={[name]:value}
    const{err}=validation(newVal)
    setError({
      ...error,
      ...err
    })
    setData({
      ...data,
      [name]: value
    })
  }

 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (updateIndex === -1) {
      setTodo([...todo, data]);
    } else {
      const updatedTodo = [...todo];
      updatedTodo[updateIndex] = data;
      setTodo(updatedTodo);
      setUpdatIndex(-1);
    }
    setData({
      name: '',
      age: '',
    });
  };

  const handleDelete = (index) => {
    const updatedArr = [...todo]
    updatedArr.splice(index, 1)
    setTodo(updatedArr)
  }

  const handleEdit = (index) => {
    setData(todo[index])
    setUpdatIndex(index)
  }
  const validation = (userData) => {
    let err = {}
    let isValid = true
    if (userData?.name !== undefined && !userData?.name) {
      err.name = 'plz enter name'
      isValid = false
    }
    else if (userData?.name?.length < 4) {
      err.name = 'name is too short plz enter valid name'
      isValid = false
    }
    
    else if(userData?.name){
      err.name=''
    }
    if(userData?.age !==undefined && !userData?.age){
      err.age='plz enter your age'
      isValid =false
    }
    else if(userData?.age){
      err.age=''
    }
    return {err,isValid}
  }
  
  return (
    <div>
3<form onSubmit={handleSubmit}>
        Name <input name='name' type='text' value={data?.name} onChange={handleChange} />
        <label className='danger' style={{ color: 'red' }}>{error?.name}</label><br />
        Age <input name='age' type='text' value={data?.age} onChange={handleChange} />
        <label className='danger' style={{ color: 'red' }}>{error?.age}</label><br />

        {
          updateIndex === -1 ? <button type='submit'>Add</button> : <button type='button' onClick={handleSubmit}>Update</button>
        }
      </form>
      <table>
        <tr>
          <th>name</th>
          <th>age</th>
          <th>Action</th>
        </tr>
        {
          todo?.map((cv, index) =>
            <tr key={index}>
              <td>{cv?.name}</td>
              <td>{cv?.age}</td>
              <td>
                <button onClick={() => { handleEdit(index) }}>Edit</button>
                <button onClick={() => { handleDelete(index) }}>Delete</button>
              </td>
            </tr>
          )
        }
      </table>
    </div>
  )
}

export default Crud