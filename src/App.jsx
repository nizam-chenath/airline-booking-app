
import { useState, useEffect } from 'react'
import './App.css'
import BookingPage from './pages/BookingPage'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'



function App() {
  
  const navigate = useNavigate()
  const [Flight, setFlight] = useState(null)

  useEffect(() => {
    console.log(Flight);
  }, [Flight]);
  
   function handleSelectedFlight(flight) {
     setFlight(flight);
    navigate('/booking')
   
  }
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home handleSelectedFlight={handleSelectedFlight}/>} />
    <Route path="/booking" element={<BookingPage flight={Flight} />} />
    
    </Routes>
     
     
    </>
  )
}

export default App

