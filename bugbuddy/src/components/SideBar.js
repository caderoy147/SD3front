import React, { useState, useEffect } from 'react';
import '../styles/dashboard.css';

const SideBar = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(0);
  const [isSidebarHidden, setIsSidebarHidden] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarHidden(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const menuItems = [
    {
      icon: 'bx bxs-dashboard',
      text: 'Dashboard',
    },
    {
      icon: 'bx bxs-shopping-bag-alt',
      text: 'My Projects',
    },
    {
      icon: 'bx bxs-doughnut-chart',
      text: 'Analytics',
    },
    {
      icon: 'bx bxs-message-dots',
      text: 'Message',
    },
    {
      icon: 'bx bxs-group',
      text: 'Team',
    },
  ];

  const handleMenuItemClick = (index) => {
    setActiveMenuItem(index);
  };

  const toggleSidebar = () => {
    setIsSidebarHidden(!isSidebarHidden);
		console.log('Toggled: isSidebarHidden =', isSidebarHidden);
  };

  return (
    <section id="sidebar" className={isSidebarHidden ? 'hide' : ''}>
      <a href="#" className="brand">
        <i className='bx bxs-smile'></i>
        <span className="text">Bug Buddy</span>
      </a>
      <ul className="side-menu top">
        {menuItems.map((item, index) => (
          <li key={index} className={index === activeMenuItem ? 'active' : ''}>
            <a href="#" onClick={() => handleMenuItemClick(index)}>
              <i className={item.icon}></i>
              <span className="text">{item.text}</span>
            </a>
          </li>
        ))}
      </ul>
      <ul className="side-menu">
        <li>
          <a href="#">
            <i className='bx bxs-cog'></i>
            <span className="text">Settings</span>
          </a>
        </li>
        <li>
          <a href="#" className="logout">
            <i className='bx bxs-log-out-circle'></i>
            <span className="text">Logout</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default SideBar;
