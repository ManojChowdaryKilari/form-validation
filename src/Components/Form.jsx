import React, {  useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
function Form() {

  const[Email,setEmail]=useState('')
  const[Password,setPassword]=useState('')

const[Errors, setErrors]=useState({
  email:"",
  Password:""
})
const emailpattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]{2,}$/;
  function handleSubmit(){
    if(Email.trim()===''){
      setErrors((Errors)=>({...Errors,email:'Please enter your Email'}));
    }
    else if(! emailpattern.test(Email)){
      setErrors((Errors)=>({...Errors,email:'Invalid Email format'}));
    }
   
    else{
      setErrors((Errors)=>({...Errors,email:""}))
    }

    if(Password.trim()===''){
      setErrors((Errors)=>({...Errors,Password:'Please enter your Password'}));
    }
    else if(Password.trim().length<8){
      setErrors((Errors)=>({...Errors,Password:'Invalid Password format'}));
    }
   
    else{
      setErrors((Errors)=>({...Errors,Password:""}))
    }

  }

 return (
    <div className= "border w-75 h-50 mt-5 m-auto p-3">
      <h2 className='text-primary text-center'>Login Form</h2>
      <div className='mt-3'>
        <label>Email</label>
        <input type="text" className='form-control' value={Email}  placeholder='Enter your Email'
        onChange={(e)=>{setEmail(e.target.value)}}
        />

        {Errors.email&&<span className='text-danger'>{Errors.email}</span>}
      </div>
      <div className='mt-3'>
        <label htmlFor="">Password</label>
        <input type="password"  className='form-control' value={Password}  placeholder='Enter your Password'
        onChange={(e)=>{setPassword(e.target.value)}}
        />
         {Errors.Password&&<span className='text-danger'>{Errors.Password}</span>}
      </div>
   <div className='mt-3'>
   <button className=' btn btn-primary w-100' onClick={handleSubmit}>Submit</button>
   </div>
    </div>
  )
}

export default Form
