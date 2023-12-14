import { Outlet } from 'react-router-dom';
import Layout2 from './MainLayout/Layout2';
import '../index.css';
import React, { useState, useEffect } from 'react';

const DashLayout = () => {
  const [contentClass, setContentClass] = useState('');
  const [isSidebarHidden, setIsSidebarHidden] = useState(window.innerWidth < 768);

  const toggleSidebar = () => {
    setIsSidebarHidden(!isSidebarHidden);
    setContentClass(isSidebarHidden ? '' : 'hide-sidebar');
  };

  return (
    <>
      <Layout2 toggleSidebar={toggleSidebar} />
      <section id="content" className={contentClass}>
      
        <main>
          <Outlet />
        </main>
      </section>
    </>
  );
};

export default DashLayout;
