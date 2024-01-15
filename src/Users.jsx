import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';



function Users() {
    const nav=useNavigate()
    const[user,setuser]=useState([{
        id:'345',
        name:"aswin",
        email:'aswin@123',
        Phone:"97666322"
    }])

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
        <tr key={e.id}>
        <td>{e.id}</td>
        <td>{e.name}</td>
        <td>{e.email}</td>
        <td>{e.Phone}</td>
        <td>
        <button onClick={()=>nav('/update')}>edit</button>
        <button>delete</button></td>
      </tr>
      
      ))}
      </tbody>
    </Table>
  )
}

export default Users