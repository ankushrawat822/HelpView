import React from "react"
import {Router , Route , Routes} from 'react-router-dom'
// importing components and pages
import Navbar from "./components/common/Navbar"
import Home from './components/pages/Home'

import Contact from "./components/pages/Contact"


import RegularMeet from "./components/pages/solution/RegularMeet"

import TongueTwister from "./components/pages/solution/TongueTwister"
import Breathing from "./components/pages/solution/Breathing"

// fluent speech
import Articulation from "./components/pages/solution/Articulation"

import UserSelfIntroInfoForm from "./features/Self-intro/pages/info-page"


import Footer from './components/common/Footer'
function App() {
  

  return (
   <>

   <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<div><Home></Home><Footer></Footer></div>} /> 
        <Route path="/contact" element={<Contact></Contact>} />
       
        <Route path="/technical-interview" element={<TechnicalInterview></TechnicalInterview>} />
        
        <Route path="/regular-meet" element={<RegularMeet></RegularMeet>} />
        
        
        <Route path="/tongue-twister" element={<TongueTwister></TongueTwister>} />
        <Route path="/breathing-exercise" element={<Breathing></Breathing>} />
       
        <Route path="/articulation-exercise" element={<Articulation></Articulation>} />
        <Route path="/selfintro" element={<UserSelfIntroInfoForm/>} />

        <Route path="*" element={<Error />} />
    </Routes>
    
   </>
  )
}

export default App
