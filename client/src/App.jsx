import {BrowserRouter, Routes, Route} from 'react-router-dom'
  import SignUp from './SignUp'
import Login from './Login'
import Home from './Home'
const App = () => {
  return (
    <div>
    <>
   
    </>
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    
      
    </div>
  )
}


export default App