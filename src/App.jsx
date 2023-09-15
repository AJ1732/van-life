import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import HomePage from './components/pages/HomePage'
import About from './components/pages/About'
import Vans from './components/pages/Vans'
import Footer from './components/Footer'
import './App.css'



function App() {

  return (
    <div className='vanlife_container h-screen'>
      
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/vans' element={<Vans />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  )
}

export default App
