
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './Users'
import Createusers from './Createusers'
import Updateuser from './Updateuser'



function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users/>}/>
          <Route path='/create' element={<Createusers/>}/>
          <Route path='/update' element={<Updateuser/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
