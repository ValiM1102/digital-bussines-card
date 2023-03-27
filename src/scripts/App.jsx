import { useState } from 'react'
import '../css/App.css'
import Header from '../scripts/Header'
import AboutMe from '../scripts/AboutMe'
import Footer from '../scripts/Footer'
import WhiteSpace from '../scripts/WhiteSpace'

function App() {
  
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <WhiteSpace />
      <Footer />
    </div>
  )
}

export default App
