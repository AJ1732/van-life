import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'

import HomePage from './components/pages/HomePage'
import About from './components/pages/About'
import Vans from './components/pages/Vans'
import VanDetail from './components/pages/VanDetail'
import './App.css'
import "./server"
import Layout from './components/Layout'
import HostLayout from './components/pages/HostLayout'
import Income from './components/pages/Income'
import Reviews from './components/pages/Reviews'
import Dashboard from './components/pages/Dashboard'
import VansHost from './components/pages/VansHost'
import VansHostDetail from './components/pages/VansHostDetail'
import Error from './components/pages/Error'
// import { Outlet } from 'react-router-dom'



function App() {

  return (
    <div className='vanlife_container h-screen'>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='about' element={<About />} />
            <Route path='vans' element={<Vans />}/>
            <Route path='vans/:id' element={<VanDetail />}/>
            <Route path='host' element={<HostLayout />} >
              <Route index element={<Dashboard />}/>
              <Route path='income' element={<Income />}/>
              <Route path='vans' element={<Outlet />}>
                <Route index element={<VansHost />}/>
                <Route path=':id' element={<VansHostDetail />}/>
              </Route >
              <Route path='reviews' element={<Reviews />}/>
            </Route>
            <Route path='*' element={<Error />}/> 
          </Route>
        </Routes>

      </Router>
    </div>
  )
}

export default App
