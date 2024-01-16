import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';

function Users() {
    const nav=useNavigate()
    const[user,setuser]=useState([])

    useEffect(()=>{
      axios.get('http://localhost:3001')
      .then(result=>setuser(result.data))
      .catch(err=>console.log(err))
    },[])

    const deleteuser =(e)=>{
      const id =e.target.id
      axios.delete('http://localhost:3001/deleteuser/'+id)
      .then(res=>{console.log(res)
        window.location.reload()
      })
      .catch(err=>console.log(err))
    }
  return (
    
    <Table striped bordered hover variant="dark">
    <button onClick={()=>nav('/create')}>Createuser</button>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
      {user.map((e)=>(
        <tr key={e._id}>
        <td>{e._id}</td>
        <td>{e.name}</td>
        <td>{e.email}</td>
        <td>{e.Phone}</td>
        <td>
        <button onClick={()=>nav(`/update/${e._id}`)} className='btn btn-success'>edit</button>
        <button className='btn btn-danger' id={e._id} onClick={deleteuser}>delete</button></td>
      </tr>
      
      ))}
      </tbody>
    </Table>
  )
}

export default Users