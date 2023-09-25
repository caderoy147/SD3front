import React, { useState } from 'react';
import SideBar from './SideBar';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
import '../../styles/dashboard.css';
import Dashboard from '../../pages/Dashboard';
const Layout = () => {

    const [isSidebarHidden, setIsSidebarHidden] = useState(false);
  
    const handleSidebarToggle = () => {
      setIsSidebarHidden(!isSidebarHidden);
    };


  return (
    <div>
      <NavBar handleSidebarToggle={handleSidebarToggle} />
      <SideBar isSidebarHidden={isSidebarHidden} />
      <Dashboard/>
    </div>
  )
}

export default Layout