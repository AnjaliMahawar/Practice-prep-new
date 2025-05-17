
import React, { useState } from 'react'

const State = () => {
  const [name, setName] = useState('')
  const [arr, setArry] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    surName: '',
    Mob: '',
    class: ''
  })
  const [error, setError] = useState({})
  const saveFun = () => {
    setArry([
      ...arr, //arr (2) ['asxa', 'asxa']
      name
    ])
  }
  console.log("arr", arr)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submit")
    setFormData({
      name: '',
      surName: '',
      Mob: '',
      class: '',
      email: ''
    })
  }

  const handleChange = (e) => {
    let { name, value } = e.target
    let newdata = { [name]: value }
    const { err } = validation(newdata)

    setError({
      ...error,
      ...err
    })
    setFormData({
      ...formData,
      ...newdata
    })

  }

  const validation = (userData) => {

    let err = {};
    let isValid = true
    const emailRex = /^\S+@\S+\.\S+$/
    if (userData?.name !== undefined && !userData?.name) {
      err.name = 'plz enter your name'
      isValid = false
    }
    else if (userData?.name !== undefined && userData?.name.length < 4) {
      err.name = 'name is too short plz enter valid name'
      isValid = false
    }
    else if (userData?.name !== undefined && userData?.name.length > 10) {
      err.name = 'name is too long'
      isValid = false
    }
    else if (userData?.name) {
      err.name = ''
    }
    if (userData?.email !== undefined && !userData?.email) {
      err.email = 'Please enter your email';
      isValid = false;
    }
    else if (userData?.email !== undefined && !emailRex.test(userData?.email)) {
      err.email = 'plz enter valid email'
      isValid = false
    }
    else if (userData?.email) {
      err.email = ''
    }
    if (userData?.Mob !== undefined && !userData?.Mob) {
      err.Mob = 'Plz Enter Mobile no'
      isValid=false
    }
    else if (userData?.Mob !== undefined&& userData?.Mob?.length<10  ){
      err.Mob='PLZ enter valid mobile no'
      isValid=false
    }
    else if(userData?.Mob !==undefined && userData?.Mob?.length >10){
      err.Mob='PLZ enter valid mobile no'
      isValid=false
    }
     else if(userData?.Mob){
      err.Mob=''
     }
    return { err, isValid }



  }
  console.log(formData)
  console.log("error", error)

  return (
    <div>
      <input type='text' value={name} onChange={(e) => { setName(e.target.value) }} />
      <button onClick={saveFun}>SAVE</button>
      <form onSubmit={handleSubmit}>
        <label>name</label><br />
        <input type='text' name='name' value={formData?.name} onChange={handleChange} /><br />
        <label className='danger' style={{ color: 'red' }}>{error?.name}</label><br />
        <label>surName</label>
        <input type='text' name='surName' value={formData?.surName} onChange={handleChange} /><br />
        <label>Mob</label>
        <input type='number' name='Mob' value={formData?.Mob} onChange={handleChange} /><br />
        <label style={{ color: 'red' }}>{error?.Mob}</label><br />
        <label>class</label><br />
        <input type='text' name='class' value={formData?.class} onChange={handleChange} /><br />
        <label>email</label><br />
        <input type='email' name='email' value={formData?.email} onChange={handleChange} /><br />
        <label style={{ color: 'red' }}>{error?.email}</label>
        <button type='submit' >Submit</button>
      </form>
    </div>
  )
}

export default State
