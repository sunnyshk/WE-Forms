import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Feedback = () => {
    const [info, setInfo] = useState({
        userId:'',
        firstName:'',
        lastName:''

    });
    let API_KEY = '5f11970a-cd7d-4521-a978-ee147a3982d1';

    const handleChange = (e) =>{
     setInfo((prev)=>{
       return ({...prev, [e.target.name]:e.target.value})
     })
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
          await axios.post('https://api.webengage.com/v1/accounts/~10a5cb1dc/users',info,{
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 5f11970a-cd7d-4521-a978-ee147a3982d1',
            }
           })     
        } catch (error) {
            console.log(error)
        }
        console.log(info)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Enter email' name='email'  onChange={handleChange}/>
          <input type="text" placeholder='First Name' name='firstName'  onChange={handleChange}/>
          <input type="text" placeholder='Last Name' name='lastName' onChange={handleChange}/>
          <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Feedback