import {BrowserRouter, Routes, Route} from 'react-router-dom'
  import SignUp from './SignUp'
import Login from './Login'
const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    
      
    </div>
  )
}


export default App