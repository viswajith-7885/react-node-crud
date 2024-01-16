import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"


function Createusers() {
  const [name,setname]=useState()
  const [email,setemail]=useState()
  const [phone,setphone]=useState()
  const nav =useNavigate()

  const Submit =(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3001/createuser',{name,email,phone})
    .then(result=>{
      console.log(result)
      nav('/')
    })
    .catch(err=>console.log(err))
  }

  return (
    <form onSubmit={Submit}>
  <div className="mb-3">
    <label  className="form-label">name</label>
    <input type="text" className="form-control" onChange={(e)=>setname(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label className="form-label">Email</label>
    
    <input type="email" className="form-control" onChange={(e)=>setemail(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label className="form-label">Phone</label>
    
    <input type="text" className="form-control" onChange={(e)=>setphone(e.target.value)}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  )
}

export default Createusers