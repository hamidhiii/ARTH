import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import HomeLending from './pages/HomeLending'
import Footer from './components/Footer/Footer'
import EcoScanLending from './pages/EcoScanLending'
import CubesatLending from './pages/CubesatLending'
import SignIn from './components/SignIn/SignIn'

export default function App() {
  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/' element={<HomeLending/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/ecoscan' element={<EcoScanLending/>}/>
      <Route path='/cubesat' element={<CubesatLending/>}/>
      </Routes> 
      <Footer/>
    </>
  )
}
