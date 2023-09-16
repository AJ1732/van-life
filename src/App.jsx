import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from './components/pages/HomePage'
import About from './components/pages/About'
import Vans from './components/pages/Vans'
import VanDetail from './components/pages/VanDetail'
import Footer from './components/Footer'
import './App.css'
import "./server"
import Layout from './components/Layout'
import HostLayout from './components/pages/HostLayout'
import Income from './components/pages/Income'
import Reviews from './components/pages/Reviews'
import Dashboard from './components/pages/Dashboard'
import Error from './components/pages/Error'



function App() {

  return (
    <div className='vanlife_container h-screen'>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<About />} />
            <Route path='/vans'>
              <Route index element={<Vans />}/>
              <Route path=':id' element={<VanDetail />}/>
            </Route>
            <Route element={<HostLayout />} >
              <Route path='/host' element={<Dashboard />}/>
              <Route path='income' element={<Income />}/>
              <Route path='reviews' element={<Reviews />}/>
            </Route>
            <Route path='*' element={<Error />}/> 
          </Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  )
}

export default App
