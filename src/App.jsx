import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/navbar'
import AboutUs from './components/about'
import Hero from './components/hero'
import Room from './components/room'
import Gallery from './components/gallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <Navbar/>
    <Hero/>
    <AboutUs/>
    <Room/>
    <Gallery/>
    <div>Hello world</div></>
  )
}

export default App
