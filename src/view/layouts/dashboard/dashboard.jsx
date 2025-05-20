import React from 'react'


import './_StyleDashboard.css'

import { Outlet } from 'react-router'
import Header from '../../../components/componenteBasicos/header/header'
import Sidebar from '../../../components/componenteBasicos/sidebar/sidebar'

const Dashboard = () => {
  return (
    <div style={{backgroundColor:'#283048' }} className="container">
    <Header className="header "/>
    <Sidebar className="sidebar "/>
    <section className="leyenda bg-dark text-light ">
     <Outlet/>
    </section>
  </div>   
  )  
}

export default Dashboard