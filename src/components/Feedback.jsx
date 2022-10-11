import React, { useEffect, useState } from 'react'
import axios from 'axios';

let data = JSON.parse(localStorage.getItem("userInfo")) || [];

const Feedback = () => {
    const [info, setInfo] = useState({
        userId:'',
        firstName:'',
        lastName:''

    });
    // let API_KEY = '5f11970a-cd7d-4521-a978-ee147a3982d1';

    const handleChange = (e) =>{
     setInfo((prev)=>{
       return ({...prev, [e.target.name]:e.target.value})
     })
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        window.webengage.user.login(info.userId)
        window.webengage.user.setAttribute('usr_email', info.firstName);
        window.webengage.user.setAttribute('usr_lastname', info.lastName);
        localStorage.setItem('userInfo', JSON.stringify(info))
        
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Enter email' name='userId'  onChange={handleChange}/>
          <input type="text" placeholder='First Name' name='firstName'  onChange={handleChange}/>
          <input type="text" placeholder='Last Name' name='lastName' onChange={handleChange}/>
          <button type='submit' id="btnSubmit">Submit</button>
        </form>
    </div>
  )
  
}



export default Feedback