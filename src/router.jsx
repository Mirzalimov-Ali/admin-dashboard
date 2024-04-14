import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/sections/sidebar'
import Statisctics from './components/pages/statistics/statisctics'
import Header from './components/sections/header'
import Users from './components/pages/users/users'
import Reports from './components/pages/reports/reports'

function RouterComponent() {
  return (
    <div>
      {/* <Sidebar/> */}
      <Header/>
      <Routes>
        <Route path='/' element={<Statisctics/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/reports' element={<Reports/>}/>
      </Routes>
    </div>
  )
}

export default RouterComponent
