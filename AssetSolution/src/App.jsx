import React from 'react'
import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import ReactLenis from 'lenis/react'
const App = () => {
  return (
    <ReactLenis
    root 
      options={{
        lerp:0.1,
        duration:1.2, // smooth factor
        orientation:'vertical',
        gestureOrientation:'vertical',
        smoothWheel:true,
        wheelMultiplier:1,
        smoothTouch:false,
        touchMultiplier:2,
      }}>
    <div className='w-full'>   
        <Header/>
        <About/>
        <Projects/>
        <Testimonials/>
    </div>
    </ReactLenis>
  )
}

export default App
