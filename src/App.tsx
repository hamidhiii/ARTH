import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import HomeLending from './pages/HomeLending'

export default function App() {
  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/' element={<HomeLending/>}/>
      </Routes> 
    </>
  )
}
