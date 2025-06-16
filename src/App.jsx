
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<h1 className='text-center text-2xl pt-4'>Page Not Found!</h1>}/>
     </Routes>
    </>
  )
}

export default App
