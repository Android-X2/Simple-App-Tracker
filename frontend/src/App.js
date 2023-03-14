import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Imported Pages
import Home from './pages/Home'

//Imported Components
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App