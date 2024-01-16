import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function Updateuser() {
  const {id}=useParams()
  const [name,setname]=useState()
  const [email,setemail]=useState()
  const [phone,setphone]=useState()
  const nav =useNavigate()

  useEffect(()=>{
    axios.get('http://localhost:3001/getuser/'+id)
    .then(result=>{console.log(result)
      setname(result.data.name)
      setemail(result.data.email)
      setphone(result.data.phone)
    })
    .catch(err=>console.log(err))
  },[])

  const update = (e) =>{
    e.preventDefault()
    axios.put('http://localhost:3001/updateuser/'+id,{name,email,phone})
    .then(result=>{
      console.log(result)
      nav('/')
    })
    .catch(err=>console.log(err))
  }

  return (
    <form  onSubmit={update}>
    <div className="mb-3">
      <label  className="form-label">name</label>
      <input type="text" className="form-control" defaultValue={name} onChange={(e)=>setname(e.target.value)}/>
    </div>
    <div className="mb-3">
      <label className="form-label">Email</label>
      
      <input type="email" className="form-control" defaultValue={email} onChange={(e)=>setemail(e.target.value)}/>
    </div>
    <div className="mb-3">
      <label className="form-label">Phone</label>
      
      <input type="text" className="form-control" defaultValue={phone} onChange={(e)=>setphone(e.target.value)}/>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  )
}

export default Updateuser